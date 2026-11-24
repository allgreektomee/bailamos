/**
 * 특강 이름은 `초급 트레이닝 특강(Caminata, Abrazo)` 처럼 레벨명 + 괄호 안 주제로 되어 있고,
 * 괄호 안 주제가 회차마다 바뀌는 핵심 내용이다. 그래서 괄호 부분을 떼어 내 보라 알약 태그로 강조한다.
 * 괄호가 없으면 이름 그대로 보여 준다.
 */
const BRACKETS = [
  ["(", ")"],
  ["（", "）"],
  ["[", "]"],
  ["［", "］"],
];

export function splitCourseName(name = "") {
  for (const [open, close] of BRACKETS) {
    const start = name.indexOf(open);
    const end = name.lastIndexOf(close);
    if (start > -1 && end > start) {
      return {
        base: name.slice(0, start).trim(),
        topic: name.slice(start + 1, end).trim(),
      };
    }
  }
  return { base: name, topic: "" };
}

export default function CourseName({ name = "" }) {
  const { base, topic } = splitCourseName(name);
  if (!topic) return <span className="course-name-base">{name}</span>;
  return (
    <>
      <span className="course-name-base">{base}</span>
      <span className="topic-tag">{topic}</span>
    </>
  );
}
