"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/components/Language";

const PAGE = 10;

/** 글 목록. 처음 10개는 서버가 그려 주고, `더 보기` 를 누르면 10개씩 이어서 불러온다. */
export default function BlogList({ initialPosts, total }) {
  const { t } = useI18n();
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function more() {
    setLoading(true);
    setFailed(false);
    try {
      const response = await fetch(`/api/blog?offset=${posts.length}&limit=${PAGE}`);
      const data = await response.json();
      if (!Array.isArray(data.posts)) throw new Error("bad");
      setPosts((current) => {
        const seen = new Set(current.map((post) => post.slug));
        return [...current, ...data.posts.filter((post) => !seen.has(post.slug))];
      });
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="blog-card">
              {post.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.cover} alt="" loading="lazy" />
              ) : null}
              <span className="blog-card-body">
                <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
                <strong>{post.title}</strong>
                {post.summary ? <span>{post.summary}</span> : null}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {posts.length < total ? (
        <p className="blog-more">
          <button type="button" onClick={more} disabled={loading}>
            {loading ? t("blogLoading") : t("blogLoadMore")}
          </button>
          {failed ? <span className="blog-more-error">{t("blogLoadFail")}</span> : null}
        </p>
      ) : null}
    </>
  );
}
