"use client";

import Link from "next/link";
import { useState } from "react";
import CourseName from "@/components/CourseName";
import { useI18n } from "@/components/Language";
import { classes, getCourse } from "@/lib/curriculum";
import { dayName, localizeCourse } from "@/lib/i18n";
import { applyBatches, applyCourses, applyCourseById, applyPrices, hasBatch, applyRoles, applySources, depositAccount } from "@/lib/apply";
import { contacts } from "@/lib/links";

const roleKey = { 리더: "roleLeader", 팔로워: "roleFollower" };
const batchKey = { "B.T 기수 신청": "batchTerm", 재수강: "batchRetake", "일반 신청": "batchOpen" };
const sourceKey = {
  "지인 추천": "sourceFriend",
  페이스북: "sourceFacebook",
  "네이버 카페": "sourceNaver",
  인스타그램: "sourceInstagram",
  "다음 카페": "sourceDaum",
  기타: "sourceOther",
};

export default function ApplyForm({ initialCourse }) {
  const { lang, t } = useI18n();
  const preset = applyCourseById(initialCourse) ? initialCourse : "intensive";
  const [course, setCourse] = useState(preset);
  const [role, setRole] = useState("");
  const [batch, setBatch] = useState("");
  const [name, setName] = useState("");
  const [depositor, setDepositor] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [sourceOther, setSourceOther] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function courseName(id) {
    if (id === "practica") return t("applyPractica");
    const found = classes.find((item) => item.id === id);
    return found ? localizeCourse(getCourse(id), lang).name : id;
  }

  function courseLabel(id) {
    return `BAILAMOS tango ${courseName(id)}`;
  }

  function coursePreview(id) {
    if (id === "practica") {
      return {
        image: "/videos/practica-2026-10-25.jpg",
        position: "center",
        kicker: t("gather"),
        name: t("practicaName"),
        when: `${t("practicaDay")} · 16:00–19:00`,
        lead: t("practicaLead"),
      };
    }
    const raw = getCourse(id);
    if (!raw) return null;
    const item = localizeCourse(raw, lang);
    const group = classes.filter((entry) => (entry.track === "special") === (raw.track === "special"));
    const index = group.findIndex((entry) => entry.id === id);
    return {
      image: item.image,
      position: item.imagePosition || "center",
      kicker: `${String(index + 1).padStart(2, "0")} · ${raw.track === "special" ? t("specials") : t("regular")}`,
      name: item.name,
      when: raw.track === "special" || !item.day ? "" : `${dayName(lang, item.day)} ${item.time}`,
      lead: item.lead,
    };
  }

  async function copyAccount() {
    const wrote = await Promise.race([
      navigator.clipboard.writeText(depositAccount).then(() => true).catch(() => false),
      new Promise((resolve) => window.setTimeout(() => resolve(false), 400)),
    ]);
    if (!wrote) {
      const field = document.createElement("textarea");
      field.value = depositAccount;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (source === "기타" && !sourceOther.trim()) {
      setError(t("applyRequired"));
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          course,
          role,
          batch: hasBatch(course) ? batch : "",
          name,
          depositor,
          phone,
          source,
          sourceOther,
          note,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus("idle");
        setError(data.error === "unconfigured" ? t("applyUnconfigured") : t("applyFail"));
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(t("applyFail"));
    }
  }

  if (status === "sent") {
    return (
      <article className="detail apply">
        <Link href="/" className="back">
          ← {t("backHome")}
        </Link>
        <h1>{t("applyDone")}</h1>
        <p className="apply-sent">{t("applySent")}</p>
        <p className="apply-chat">{t("applyChat")}</p>
        <a className="inquire-btn apply-chat-btn" href={contacts.find((item) => item.icon === "chat").href} target="_blank" rel="noreferrer">
          {t("applyChatBtn")}
        </a>
        <p className="apply-chat-note">
          {t("applyChatCode")} {contacts.find((item) => item.icon === "chat").note}
        </p>
      </article>
    );
  }

  const preview = coursePreview(course);

  return (
    <article className="detail apply">
      <Link href="/" className="back">
        ← {t("backHome")}
      </Link>
      <h1>{t("applyTitle")}</h1>
      <p className="apply-lead">{t("applyLead")}</p>
      <form className="apply-form" onSubmit={onSubmit}>
        <div className="apply-field">
          <span>
            {t("applyCourse")} <em className="apply-req">*</em>
          </span>
          {preview ? (
            <div className="apply-preview course-card">
              <div className="course-visual">
                {preview.image ? (
                  <img src={preview.image} alt="" style={{ objectPosition: preview.position }} />
                ) : (
                  <span className="course-mark">{preview.name}</span>
                )}
              </div>
              <p className="course-kicker">{preview.kicker}</p>
              <p className="course-name">
                <CourseName name={preview.name} />
              </p>
              {preview.when ? <p className="course-when">{preview.when}</p> : null}
              <p className="course-lead">{preview.lead}</p>
            </div>
          ) : null}
          {applyPrices[course] ? (
            <>
              <p className="apply-price">
                {applyPrices[course].once ? (
                  <span className="is-on">{applyPrices[course].once}</span>
                ) : applyPrices[course].term ? (
                  <span className="is-on">
                    {t("applyPriceTerm")} {applyPrices[course].term}
                  </span>
                ) : (
                  <>
                    <span className={batch === "B.T 기수 신청" || batch === "재수강" ? "is-on" : batch ? "is-dim" : ""}>
                      {t("applyPriceCohort")} · {t("applyPriceRetake")} {applyPrices[course].cohort}
                    </span>
                    <span className="apply-price-mark" aria-hidden="true" />
                    <span className={batch === "일반 신청" ? "is-on" : batch ? "is-dim" : ""}>
                      {t("applyPriceOpen")} {applyPrices[course].open}
                    </span>
                  </>
                )}
              </p>
              {course === "practica" ? <p className="apply-price-note">{t("applyPracticaNote")}</p> : null}
            </>
          ) : null}
          <select name="course" value={course} required onChange={(event) => setCourse(event.target.value)}>
            <option value="">{t("applyPick")}</option>
            {applyCourses.map((item) => (
              <option key={item.id} value={item.id}>
                {courseLabel(item.id)}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="apply-field">
          <legend>
            {t("applyRole")} <em className="apply-req">*</em>
          </legend>
          <div className="apply-choices apply-split">
            {applyRoles.map((value) => (
              <label key={value} className={role === value ? "apply-choice is-on" : "apply-choice"}>
                <input type="radio" name="role" value={value} required checked={role === value} onChange={() => setRole(value)} />
                {t(roleKey[value])}
              </label>
            ))}
          </div>
        </fieldset>

        {course && hasBatch(course) ? (
          <fieldset className="apply-field">
            <legend>
              {t("applyBatch")} <em className="apply-req">*</em>
            </legend>
            <div className="apply-choices apply-split apply-split-3">
              {applyBatches.map((value) => (
                <label key={value} className={batch === value ? "apply-choice is-on" : "apply-choice"}>
                  <input type="radio" name="batch" value={value} required checked={batch === value} onChange={() => setBatch(value)} />
                  {t(batchKey[value])}
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        <div className="apply-pair">
          <label className="apply-field">
            <span>
              {t("applyName")} <em className="apply-req">*</em>
            </span>
            <input name="name" autoComplete="name" value={name} required maxLength={80} onChange={(event) => setName(event.target.value)} />
          </label>
          <label className="apply-field">
            <span>
              {t("applyPhone")} <em className="apply-req">*</em>
            </span>
            <input name="phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} required maxLength={30} onChange={(event) => setPhone(event.target.value)} />
          </label>
        </div>

        <div className="apply-field">
          <span>
            {t("applyDepositor")} <em className="apply-req">*</em> <em className="apply-hint">{t("applyDepositHint")}</em>
          </span>
          <input name="depositor" aria-label={t("applyDepositor")} value={depositor} required maxLength={80} onChange={(event) => setDepositor(event.target.value)} />
          <button type="button" className="apply-copy" onClick={copyAccount}>
            {copied ? t("applyCopied") : t("applyCopy")}
          </button>
        </div>

        <fieldset className="apply-field">
          <legend>
            {t("applySource")} <em className="apply-req">*</em>
          </legend>
          <div className="apply-choices">
            {applySources.map((value) => (
              <label key={value} className={source === value ? "apply-choice is-on" : "apply-choice"}>
                <input type="radio" name="source" value={value} required checked={source === value} onChange={() => setSource(value)} />
                {t(sourceKey[value])}
              </label>
            ))}
          </div>
          {source === "기타" ? (
            <input
              name="sourceOther"
              value={sourceOther}
              required
              maxLength={80}
              placeholder={t("applyOther")}
              onChange={(event) => setSourceOther(event.target.value)}
            />
          ) : null}
        </fieldset>

        <label className="apply-field">
          <span>
            {t("applyNote")} <em className="apply-optional">{t("applyOptional")}</em>
          </span>
          <textarea name="note" rows={4} maxLength={2000} value={note} onChange={(event) => setNote(event.target.value)} />
        </label>

        {error ? <p className="apply-error">{error}</p> : null}
        <button type="submit" className="inquire-btn" disabled={status === "sending"}>
          {status === "sending" ? t("applySending") : t("applySend")}
        </button>
      </form>
    </article>
  );
}
