export type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
};

export type GitHubProfile = {
  followers: number;
  publicRepos: number;
  stars: number;
  forks: number;
  repos: GitHubRepo[];
  source: "live" | "fallback";
};

const fallbackProfile: GitHubProfile = {
  followers: 1280,
  publicRepos: 42,
  stars: 1860,
  forks: 240,
  source: "fallback",
  repos: [
    {
      id: 1,
      name: "nexus-commerce",
      description: "Headless commerce starter with edge caching and typed checkout flows.",
      url: "https://github.com/codewithsaviour/nexus-commerce",
      stars: 420,
      forks: 58,
      language: "TypeScript",
    },
    {
      id: 2,
      name: "aurora-dashboard",
      description: "Realtime operations console with streaming metrics and RBAC.",
      url: "https://github.com/codewithsaviour/aurora-dashboard",
      stars: 310,
      forks: 41,
      language: "TypeScript",
    },
    {
      id: 3,
      name: "signal-ai",
      description: "AI research synthesis workspace with grounded citations.",
      url: "https://github.com/codewithsaviour/signal-ai",
      stars: 540,
      forks: 72,
      language: "TypeScript",
    },
    {
      id: 4,
      name: "folio-engine",
      description: "Editorial portfolio framework with motion recipes and SEO scaffolding.",
      url: "https://github.com/codewithsaviour/folio-engine",
      stars: 1200,
      forks: 180,
      language: "TypeScript",
    },
  ],
};

export async function getGitHubProfile(): Promise<GitHubProfile> {
  const username = process.env.GITHUB_USERNAME ?? process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!username) {
    return fallbackProfile;
  }

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "codewithsaviour-portfolio",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        { headers, next: { revalidate: 3600 } },
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return fallbackProfile;
    }

    const user = (await userRes.json()) as {
      followers: number;
      public_repos: number;
    };
    const repos = (await reposRes.json()) as Array<{
      id: number;
      name: string;
      description: string | null;
      html_url: string;
      stargazers_count: number;
      forks_count: number;
      language: string | null;
      fork: boolean;
    }>;

    const ownRepos = repos.filter((repo) => !repo.fork);
    const stars = ownRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const forks = ownRepos.reduce((sum, repo) => sum + repo.forks_count, 0);
    const pinned = [...ownRepos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description ?? "No description provided.",
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
      }));

    return {
      followers: user.followers,
      publicRepos: user.public_repos,
      stars,
      forks,
      repos: pinned,
      source: "live",
    };
  } catch {
    return fallbackProfile;
  }
}
