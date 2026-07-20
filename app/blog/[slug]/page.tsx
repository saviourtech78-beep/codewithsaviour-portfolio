import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/content/about";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post.published)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} · ${siteConfig.name}`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug && item.published);
  if (!post) notFound();

  return (
    <article className="pb-24 pt-28 lg:pb-32 lg:pt-32">
      <div className="container-premium section-padding max-w-3xl">
        <Button asChild variant="ghost" size="sm" className="mb-10 -ml-2">
          <Link href="/blog">
            <ArrowLeft className="size-4" />
            All articles
          </Link>
        </Button>

        <p className="eyebrow mb-4">{post.category}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime} read</span>
        </div>

        <div className="prose-invert mt-12 space-y-5 text-base leading-relaxed text-zinc-300">
          <p>{post.description}</p>
          <p>
            This article is part of the CodeWithSaviour writing system. Full MDX
            content can be added under <code className="text-cyan">content/blog/</code>{" "}
            as the library grows — the routing, metadata, and listing layers are
            already production-ready.
          </p>
          <p>
            Until then, treat this page as a structured placeholder with SEO,
            canonical routes, and Open Graph configured for every slug in{" "}
            <code className="text-cyan">content/about.ts</code>.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
