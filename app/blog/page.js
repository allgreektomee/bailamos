import Link from "next/link";
import Tx from "@/components/Tx";
import { getPosts } from "@/lib/blog";

export const metadata = {
  title: "블로그 · BAILAMOS TANGO",
};

export default function Page() {
  const posts = getPosts();
  return (
    <section className="blog">
      <div className="section-head">
        <h2>Blog</h2>
        <i />
      </div>
      <p className="section-lead">
        <Tx k="blogLead" />
      </p>
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
    </section>
  );
}
