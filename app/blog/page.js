import BlogList from "@/components/BlogList";
import Tx from "@/components/Tx";
import { getPostsPage } from "@/lib/blog";

export const metadata = {
  title: "블로그 · BAILAMOS TANGO",
};

export default function Page() {
  const { posts, total } = getPostsPage(0, 10);
  return (
    <section className="blog">
      <div className="section-head">
        <h2>Blog</h2>
        <i />
      </div>
      <p className="section-lead">
        <Tx k="blogLead" />
      </p>
      <BlogList initialPosts={posts} total={total} />
    </section>
  );
}
