import { useGetTotalCommits, useGetUserInfo, useGetUserRepos, useGetTotalStars } from "../_api/github.api";

export const useGetGithubInfo = (userName: string) => {
  const { data: userInfo, isLoading: loadingUser, isError: userError } = useGetUserInfo(userName);
  const { data: userRepos, isLoading: loadingRepos, isError: reposError } = useGetUserRepos(userName);
  const { data: totalCommit, isLoading: loadingTotalCommit, isError: totalCommitError } = useGetTotalCommits(userName);
  const { data: totalStars, isLoading: loadingTotalStars, isError: totalStarsError } = useGetTotalStars(userName);

  return {
    userInfo,
    loadingRepos,
    userError,
    userRepos,
    loadingUser,
    reposError,
    totalCommit,
    loadingTotalCommit,
    totalCommitError,
    totalStars,
    loadingTotalStars,
    totalStarsError,
  };
};
