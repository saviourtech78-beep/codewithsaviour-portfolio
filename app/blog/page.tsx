import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/about";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays on Next.js, frontend systems, motion, and shipping with intention.",
};

export default function BlogIndexPage() {
  const posts = blogPosts.filter((post) => post.published);

  return (
    <div className="pb-24 pt-28 lg:pb-32 lg:pt-32">
      <div className="container-premium section-padding">
        <p className="eyebrow mb-4">Blog</p>
        <h1 className="headline-lg text-white">Notes on craft & systems.</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Architecture, motion, TypeScript boundaries, and the details that separate
          templates from products.
        </p>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-[1.75rem] border border-white/8 bg-surface p-7 transition-colors hover:border-electric/30"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="text-cyan">{post.category}</span>
                <span>·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
