import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/Markdown";
import Tx from "@/components/Tx";
import { blogTags, getPost, getPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "블로그" };
  return {
    title: `${post.title} · BAILAMOS TANGO`,
    description: post.summary || undefined,
    openGraph: post.cover ? { images: [post.cover] } : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="blog blog-post">
      <Link href="/blog" className="back">
        ← <Tx k="blogBack" />
      </Link>
      <header>
        <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
        <h1>{post.title}</h1>
        {post.author ? <p className="blog-author">{post.author}</p> : null}
      </header>
      <Markdown source={post.body} />
      <ul className="blog-tags" aria-label="태그">
        {blogTags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </article>
  );
}
