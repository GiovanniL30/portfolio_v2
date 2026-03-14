import { useQuery } from "@tanstack/react-query";
import githubApi from "../_config/githubApi.config";
import type { GithubRepo, GithubUser } from "../@types/github";

export const useGetUserInfo = (userName: string) => {
  return useQuery<GithubUser>({
    queryKey: ["user", userName],
    retry: false,
    enabled: !!userName,
    queryFn: async () => {
      const response = await githubApi.get(`/users/${userName}`);
      return response.data;
    },
  });
};

export const useGetUserRepos = (userName: string) => {
  return useQuery<GithubRepo[]>({
    queryKey: ["user", "repo", userName],
    retry: false,
    enabled: !!userName,
    queryFn: async () => {
      const response = await githubApi.get(`/users/${userName}/repos?sort=updated`);
      return response.data;
    },
  });
};

export const useGetTotalCommits = (userName: string) => {
  return useQuery<number>({
    queryKey: ["user", "totalCommits", userName],
    retry: false,
    enabled: !!userName,
    queryFn: async () => {
      const reposResponse = await githubApi.get(`/users/${userName}/repos?per_page=100`);
      const repos: GithubRepo[] = reposResponse.data;
      const commitPromises = repos.map(async (repo) => {
        try {
          const commitsResponse = await githubApi.get(`/repos/${userName}/${repo.name}/commits?per_page=1`);
          const linkHeader = commitsResponse.headers["link"];
          if (linkHeader) {
            const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
            if (match) {
              return parseInt(match[1], 10);
            }
          }
          return commitsResponse.data.length;
        } catch {
          return 0;
        }
      });
      const commitCounts = await Promise.all(commitPromises);
      return commitCounts.reduce((sum, count) => sum + count, 0);
    },
  });
};

export const useGetTotalStars = (userName: string) => {
  return useQuery<number>({
    queryKey: ["user", "totalStars", userName],
    retry: false,
    enabled: !!userName,
    queryFn: async () => {
      const reposResponse = await githubApi.get(`users/${userName}/repos?per_page=100`);
      const repos: GithubRepo[] = reposResponse.data;
      return repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    },
  });
};
