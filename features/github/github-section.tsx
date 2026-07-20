import { Star, GitFork, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/shared/brand-icons";
import { getGitHubProfile } from "@/lib/github";

export async function GitHubSection() {
  const profile = await getGitHubProfile();

  return (
    <section id="github" className="relative py-24 lg:py-32" aria-labelledby="github-heading">
      <div className="container-premium section-padding">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="GitHub"
              title="Open source & activity."
              description="Live snapshot from GitHub — pinned work, languages, and contribution energy."
            />
            <Button asChild variant="outline" size="lg">
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" />
                Follow on GitHub
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Followers", value: profile.followers, icon: Users },
            { label: "Public repos", value: profile.publicRepos, icon: GitHubIcon },
            { label: "Stars", value: profile.stars, icon: Star },
            { label: "Forks", value: profile.forks, icon: GitFork },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/8 bg-surface p-6"
            >
              <stat.icon className="mb-4 size-5 text-cyan" aria-hidden />
              <p className="font-display text-3xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {profile.repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.75rem] border border-white/8 bg-surface p-6 transition-colors hover:border-electric/30"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-white">
                  {repo.name}
                </h3>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="size-3.5" />
                  {repo.stars}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {repo.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                {repo.language ? (
                  <span className="rounded-full border border-white/10 px-2.5 py-1">
                    {repo.language}
                  </span>
                ) : null}
                <span>{repo.forks} forks</span>
              </div>
            </a>
          ))}
        </div>

        {profile.source === "fallback" ? (
          <p className="mt-6 text-xs text-muted-foreground">
            Showing curated fallback data. Set{" "}
            <code className="text-cyan">GITHUB_USERNAME</code> /{" "}
            <code className="text-cyan">GITHUB_TOKEN</code> to enable live sync.
          </p>
        ) : null}
      </div>
    </section>
  );
}
