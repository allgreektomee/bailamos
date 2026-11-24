"use client";

import { useEffect, useRef, useState } from "react";
import { courseLabel, courseOptions, pageSize } from "@/lib/adminFilter";

function seoulParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const pick = (type) => Number(parts.find((part) => part.type === type).value);
  return { year: pick("year"), month: pick("month"), day: pick("day") };
}

function defaultFilters() {
  const today = seoulParts();
  const first = new Date(Date.UTC(today.year, today.month - 2, 1));
  const from = `${first.getUTCFullYear()}-${String(first.getUTCMonth() + 1).padStart(2, "0")}-01`;
  const to = `${today.year}-${String(today.month).padStart(2, "0")}-${String(today.day).padStart(2, "0")}`;
  return { course: "", from, to, role: "", batch: "", query: "" };
}

function AdminFilters({ draft, onChange, onSearch, onReset, filtering, searching }) {
  return (
    <form className="admin-filters" onSubmit={onSearch}>
      <label>
        과정
        <select value={draft.course} onChange={(event) => onChange("course", event.target.value)}>
          <option value="">전체</option>
          {courseOptions().map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </label>
      <div className="admin-filter-dates">
        <label>
          시작일
          <input type="date" value={draft.from} onChange={(event) => onChange("from", event.target.value)} />
        </label>
        <label>
          종료일
          <input type="date" value={draft.to} onChange={(event) => onChange("to", event.target.value)} />
        </label>
      </div>
      <div className="admin-filter-split">
        <label>
          포지션
          <select value={draft.role} onChange={(event) => onChange("role", event.target.value)}>
            <option value="">전체</option>
            <option value="리더">리더</option>
            <option value="팔로워">팔로워</option>
          </select>
        </label>
        <label>
          신청구분
          <select value={draft.batch} onChange={(event) => onChange("batch", event.target.value)}>
            <option value="">전체</option>
            <option value="일반">일반</option>
            <option value="기수">기수</option>
            <option value="재수강">재수강</option>
          </select>
        </label>
      </div>
      <label>
        이름 · 닉네임 · 휴대폰
        <input
          value={draft.query}
          placeholder="이름, 닉네임, 번호"
          onChange={(event) => onChange("query", event.target.value)}
        />
      </label>
      <div className="admin-filter-actions">
        <button className="inquire-btn admin-search" type="submit" disabled={searching} aria-busy={searching}>
          {searching ? "검색중" : "검색하기"}
        </button>
        {filtering ? (
          <button type="button" className="admin-out" onClick={onReset}>
            필터 지우기
          </button>
        ) : null}
      </div>
    </form>
  );
}

const columns = [
  ["at", "접수시각"],
  ["course", "신청과정"],
  ["role", "포지션"],
  ["batch", "신청구분"],
  ["name", "이름"],
  ["depositor", "입금자명"],
  ["phone", "휴대폰"],
  ["source", "알게된곳"],
  ["note", "하고싶은말"],
];

export default function AdminGate() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [counts, setCounts] = useState({ leader: 0, follower: 0 });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [draft, setDraft] = useState(defaultFilters);
  const [filters, setFilters] = useState(defaultFilters);
  const [mobile, setMobile] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searching, setSearching] = useState(false);
  const requestId = useRef(0);
  const loadingMoreRef = useRef(false);
  const moreRef = useRef(null);
  const wasMobile = useRef(false);

  const filtering = Object.values(filters).some(Boolean);
  const windowFrom = (page - 1) * pageSize + 1;
  const shownFrom = total === 0 ? 0 : mobile ? 1 : windowFrom;
  const shownTo = total === 0 ? 0 : Math.min(total, mobile ? rows.length : windowFrom + rows.length - 1);
  const exposure = total === 0
    ? "총 0명"
    : shownFrom === shownTo
      ? `총 ${total}명 중 ${shownTo}명`
      : `총 ${total}명 중 ${shownFrom}–${shownTo}명`;

  useEffect(() => {
    load(defaultFilters(), 1);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 799px)");
    const sync = () => setMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!ready || !authed) return;
    if (wasMobile.current && !mobile) load(filters, 1);
    wasMobile.current = mobile;
  }, [mobile, ready, authed, filters]);

  useEffect(() => {
    const node = moreRef.current;
    if (!node || !mobile || page >= pages) return undefined;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) load(filters, page + 1, true);
    }, { rootMargin: "240px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [mobile, page, pages, filters, rows.length]);

  async function load(nextFilters, nextPage, append = false) {
    if (append && loadingMoreRef.current) return;
    const id = requestId.current + 1;
    requestId.current = id;
    if (append) {
      loadingMoreRef.current = true;
      setLoadingMore(true);
    }
    const params = new URLSearchParams({ page: String(nextPage), limit: String(pageSize) });
    for (const [key, value] of Object.entries(nextFilters)) {
      if (value) params.set(key, value);
    }
    try {
      const response = await fetch(`/api/admin/rows?${params}`);
      if (id !== requestId.current) return;
      if (response.status === 401) {
        setAuthed(false);
        setReady(true);
        return;
      }
      const data = await response.json().catch(() => ({}));
      if (id !== requestId.current) return;
      const incoming = Array.isArray(data.rows) ? data.rows : [];
      setAuthed(true);
      setRows((current) => (append ? [...current, ...incoming] : incoming));
      setTotal(Number(data.total) || 0);
      setPage(Number(data.page) || nextPage);
      setPages(Number(data.pages) || 1);
      setCounts({ leader: Number(data.leader) || 0, follower: Number(data.follower) || 0 });
      setError(data.ok ? "" : data.error || "unread");
      setReady(true);
    } catch {
      if (id !== requestId.current) return;
      setError("unread");
      setReady(true);
    } finally {
      if (id === requestId.current) {
        loadingMoreRef.current = false;
        setLoadingMore(false);
      }
    }
  }

  async function login(event) {
    event.preventDefault();
    setPending(true);
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setPending(false);
    if (!response.ok) {
      setError("denied");
      return;
    }
    setPassword("");
    setReady(false);
    const next = defaultFilters();
    setDraft(next);
    setFilters(next);
    await load(next, 1);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setRows([]);
    setTotal(0);
    setPage(1);
    setPages(1);
    setCounts({ leader: 0, follower: 0 });
    const next = defaultFilters();
    setDraft(next);
    setFilters(next);
    setError("");
  }

  function setDraftField(key, value) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  async function search(event) {
    event.preventDefault();
    setFilters(draft);
    setSearching(true);
    try {
      await load(draft, 1);
    } finally {
      setSearching(false);
    }
  }

  if (!ready) {
    return <p className="admin-note">불러오는 중</p>;
  }

  if (!authed) {
    return (
      <form className="admin-login" onSubmit={login}>
        <h1>관리자</h1>
        <label className="apply-field">
          <span>비밀번호</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        {error === "denied" ? <p className="apply-error">비밀번호가 다릅니다.</p> : null}
        {error === "unconfigured" ? <p className="apply-error">관리자 비밀번호가 설정되어 있지 않습니다.</p> : null}
        <button className="inquire-btn" type="submit" disabled={pending}>
          {pending ? "확인 중" : "들어가기"}
        </button>
      </form>
    );
  }

  return (
    <div className="admin-board">
      <div className="admin-bar">
        <h1>신청 목록</h1>
        <button type="button" className="admin-out" onClick={logout}>
          나가기
        </button>
      </div>
      <p className="admin-note">{!mobile && pages > 1 ? `${exposure} · ${page}/${pages}쪽` : exposure}</p>
      <AdminFilters
        draft={draft}
        onChange={setDraftField}
        onSearch={search}
        onReset={() => {
          const next = defaultFilters();
          setDraft(next);
          setFilters(next);
          load(next, 1);
        }}
        filtering={filtering}
        searching={searching}
      />
      <p className="admin-stats">
        <span>리더 <b>{counts.leader}</b>명</span>
        <span>팔로워 <b>{counts.follower}</b>명</span>
      </p>
      {error === "unread" ? (
        <p className="apply-error">시트를 아직 읽지 못했습니다. 스크립트에 읽기 기능을 넣고 같은 주소로 다시 배포해야 합니다.</p>
      ) : null}
      {error === "unconfigured" ? <p className="apply-error">시트 읽기 설정이 없습니다.</p> : null}
      {total === 0 && !error ? <p className="admin-note">조건에 맞는 신청이 없습니다.</p> : null}
      <ul className="admin-list">
        {rows.map((row, index) => (
          <li className="admin-card" key={`${row.at}-${index}`}>
            <div className="admin-card-top">
              <strong>{row.name || "이름 없음"}</strong>
              <span>{row.at}</span>
            </div>
            <p className="admin-card-course">{courseLabel(row.course)}</p>
            <p className="admin-card-meta">{[row.role, row.batch].filter(Boolean).join(" · ")}</p>
            <dl>
              <dt>입금자명</dt>
              <dd>{row.depositor}</dd>
              <dt>휴대폰</dt>
              <dd>{row.phone ? <a href={`tel:${row.phone}`}>{row.phone}</a> : ""}</dd>
              <dt>알게된곳</dt>
              <dd>{row.source}</dd>
              {row.note ? (
                <>
                  <dt>하고싶은말</dt>
                  <dd>{row.note}</dd>
                </>
              ) : null}
            </dl>
          </li>
        ))}
        {mobile && page < pages ? (
          <li ref={moreRef} className="admin-more">{loadingMore ? "불러오는 중" : ""}</li>
        ) : null}
      </ul>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map(([, label]) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.at}-${index}`}>
                {columns.map(([key]) => (
                  <td key={key}>{key === "course" ? courseLabel(row.course) : row[key] || ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!mobile && pages > 1 ? (
        <div className="admin-pager">
          <button type="button" className="admin-out" disabled={page <= 1} onClick={() => load(filters, page - 1)}>
            이전
          </button>
          <span>{page} / {pages}</span>
          <button type="button" className="admin-out" disabled={page >= pages} onClick={() => load(filters, page + 1)}>
            다음
          </button>
        </div>
      ) : null}
    </div>
  );
}
