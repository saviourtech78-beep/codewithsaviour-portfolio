import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/content/about";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export function BlogPreviewSection() {
  const posts = blogPosts.filter((post) => post.published).slice(0, 3);

  return (
    <section id="blog" className="relative py-24 lg:py-32" aria-labelledby="blog-heading">
      <div className="container-premium section-padding">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Blog"
              title="Notes on craft & systems."
              description="Essays on Next.js architecture, motion, and shipping with intention."
            />
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                View all articles
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-surface p-6 transition-colors hover:border-electric/30 sm:p-7"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-cyan">{post.category}</span>
                  <span>·</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white transition-colors group-hover:text-cyan">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <p className="mt-6 text-xs text-zinc-500">{post.readingTime} read</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
