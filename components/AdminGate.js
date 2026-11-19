"use client";

import { useEffect, useState } from "react";
import { countRoles, courseLabel, courseOptions, filterApplications } from "@/lib/adminFilter";

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

function AdminFilters({ rows, draft, onChange, onSearch, onReset, filtering }) {
  return (
    <form className="admin-filters" onSubmit={onSearch}>
      <label>
        과정
        <select value={draft.course} onChange={(event) => onChange("course", event.target.value)}>
          <option value="">전체</option>
          {courseOptions(rows).map((value) => (
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
        <button className="inquire-btn admin-search" type="submit">검색하기</button>
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
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [draft, setDraft] = useState(defaultFilters);
  const [filters, setFilters] = useState(defaultFilters);

  const filtered = filterApplications(rows, filters);
  const filtering = Object.values(filters).some(Boolean);
  const counts = countRoles(filtered);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await fetch("/api/admin/rows");
    if (response.status === 401) {
      setAuthed(false);
      setReady(true);
      return;
    }
    const data = await response.json().catch(() => ({}));
    setAuthed(true);
    setRows(Array.isArray(data.rows) ? data.rows : []);
    setError(data.ok ? "" : data.error || "unread");
    setReady(true);
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
    await load();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setRows([]);
    const next = defaultFilters();
    setDraft(next);
    setFilters(next);
    setError("");
  }

  function setDraftField(key, value) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function search(event) {
    event.preventDefault();
    setFilters(draft);
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
      <p className="admin-note">{filtering ? `${filtered.length}건 / ${rows.length}건` : `${rows.length}건`}</p>
      <AdminFilters
        rows={rows}
        draft={draft}
        onChange={setDraftField}
        onSearch={search}
        onReset={() => {
          const next = defaultFilters();
          setDraft(next);
          setFilters(next);
        }}
        filtering={filtering}
      />
      <p className="admin-stats">
        <span>리더 <b>{counts.leader}</b>명</span>
        <span>팔로워 <b>{counts.follower}</b>명</span>
      </p>
      {error === "unread" ? (
        <p className="apply-error">시트를 아직 읽지 못했습니다. 스크립트에 읽기 기능을 넣고 같은 주소로 다시 배포해야 합니다.</p>
      ) : null}
      {error === "unconfigured" ? <p className="apply-error">시트 읽기 설정이 없습니다.</p> : null}
      {rows.length === 0 && !error ? <p className="admin-note">접수된 신청이 없습니다.</p> : null}
      {rows.length > 0 && filtered.length === 0 ? <p className="admin-note">조건에 맞는 신청이 없습니다.</p> : null}
      <ul className="admin-list">
        {filtered.map((row, index) => (
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
            {filtered.map((row, index) => (
              <tr key={`${row.at}-${index}`}>
                {columns.map(([key]) => (
                  <td key={key}>{key === "course" ? courseLabel(row.course) : row[key] || ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
