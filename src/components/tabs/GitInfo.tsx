import {
  FolderGit2Icon,
  GitGraphIcon,
  GithubIcon,
  SquareArrowOutUpRightIcon,
  StarIcon,
  UserRoundIcon,
} from "lucide-react";
import { useGetGithubInfo } from "../../hooks/useGetGithubInfo.ts";
import CardContainer from "../containers/CardContainer.tsx";
import Button from "../ui/Button.tsx";
import { personalGithubLink } from "../../data/content.ts";

const USERNAME = "GiovanniL30";

const GitInfo = () => {
  const {
    userInfo,
    loadingRepos,
    userError,
    userRepos,
    loadingUser,
    reposError,
    totalCommit,
    totalCommitError,
    totalStars,
    totalStarsError,
  } = useGetGithubInfo(USERNAME);

  if (
    loadingRepos ||
    loadingUser ||
    totalCommit === undefined ||
    totalStars === undefined
  ) {
    return (
      <div className="w-full mx-auto max-w-150">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-text-muted/50 h-24 w-24 animate-pulse" />
          <div className="flex-1 space-y-2 py-2">
            <div className="h-6 bg-text-muted/50 rounded-md w-1/3 animate-pulse" />
            <div className="h-4 bg-text-muted/50 rounded-md w-1/4 animate-pulse" />
          </div>
          <div className="w-28">
            <div className="h-10 bg-text-muted/50 rounded-md animate-pulse" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-text-muted/50 shadow rounded-lg animate-pulse h-28" />
          <div className="p-4 bg-text-muted/50 shadow rounded-lg animate-pulse h-28" />
          <div className="p-4 bg-text-muted/50 shadow rounded-lg animate-pulse h-28" />
          <div className="p-4 bg-text-muted/50 shadow rounded-lg animate-pulse h-28" />
        </div>
      </div>
    );
  }

  if (userError || reposError || totalCommitError || totalStarsError) {
    return (
      <div className="w-full mx-auto max-w-150 flex items-center justify-center h-40">
        <span className="text-error font-semibold">
          Error loading GitHub stats.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto max-w-150">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
        <img
          className="rounded-full w-24 h-24 sm:w-30 sm:h-30 object-cover border-3 border-primary"
          src="/images/giovanni-leo-workspace.jpg"
          alt="Workspace setup of Giovanni Leo, full stack web developer in Baguio City"
          title="Giovanni Leo workspace"
          loading="eager"
          decoding="async"
        />

        <div className="flex flex-col gap-1 flex-1 items-center sm:items-start">
          <p className="text-xl sm:text-2xl font-semibold tracking-wide">
            {userInfo?.name}
          </p>
          <p className="text-text-muted">@{USERNAME}</p>
        </div>
        <a
          href={personalGithubLink}
          target="_blank"
          className="mt-3 sm:mt-0 sm:ml-auto w-full md:w-fit"
        >
          <Button
            variant="primary"
            className="flex items-center gap-2 p-2! px-4! text-xs sm:text-sm w-full justify-center md:w-fit"
          >
            <GithubIcon size={18} />
            <p>Github</p>
          </Button>
        </a>
      </div>
      <div className="mt-8 hidden lg:block">
        <img
          className="max-h-full"
          src={`https://ghchart.rshah.org/${USERNAME}`}
          alt="GitHub Contribution Chart"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <CardContainer className="flex flex-col items-center justify-center p-4 bg-background shadow rounded-lg">
          <UserRoundIcon className="text-primary mb-2" size={28} />
          <p className="text-xl font-bold">{userInfo?.followers}</p>
          <p className="text-xs text-text-muted mt-1">Followers</p>
        </CardContainer>
        <CardContainer className="flex flex-col items-center p-4 bg-background shadow rounded-lg">
          <GitGraphIcon className="text-secondary mb-2" size={28} />
          <p className="text-xl font-bold">{totalCommit}</p>
          <p className="text-xs text-text-muted mt-1">Total Commits</p>
        </CardContainer>
        <CardContainer className="flex flex-col items-center p-4 bg-background shadow rounded-lg">
          <StarIcon className="text-accent mb-2" size={28} />
          <p className="text-xl font-bold">{totalStars}</p>
          <p className="text-xs text-text-muted mt-1">Total Stars</p>
        </CardContainer>
        <CardContainer className="flex flex-col items-center p-4 bg-background shadow rounded-lg">
          <FolderGit2Icon className="text-primary mb-2" size={28} />
          <p className="text-xl font-bold">{userInfo?.public_repos}</p>
          <p className="text-xs text-text-muted mt-1">Public Repos</p>
        </CardContainer>
      </div>

      <div className="mb-5 w-full">
        <div className="flex w-full justify-between items-center">
          <p className="text-xl uppercase font-semibold tracking-tight my-10">
            Top Repositories
          </p>
          <a href={`${personalGithubLink}?tab=repositories`} target="_blank">
            <button className="flex items-center gap-1 text-primary cursor-pointer group transition-all ease-in text-sm">
              <p className="group-hover:pr-1 transition-all">View All</p>
              <SquareArrowOutUpRightIcon size={15} />
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(() => {
            const sortedRepos = userRepos
              ?.slice()
              .sort((a, b) => (b.forks_count || 0) - (a.forks_count || 0))
              .slice(0, 10);
            return sortedRepos?.map((repo) => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.id}
                className="block min-h-full group"
              >
                <CardContainer className="h-full">
                  <div className="flex items-center justify-between gap-2 mb-2 w-full">
                    <span className="font-semibold text-lg  text-primary">
                      {repo.name}
                    </span>
                    <button className="text-text-muted">
                      <SquareArrowOutUpRightIcon size={15} />
                    </button>
                  </div>
                  <p className="text-xs text-text-muted mb-2 line-clamp-1">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex gap-4 mt-auto text-sm">
                    <span className="flex items-center gap-1 text-yellow-400">
                      <StarIcon size={16} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-secondary">
                      <GitGraphIcon size={16} />
                      {repo.forks_count}
                    </span>
                    <span className="flex items-center gap-1 text-token-type text-nowrap">
                      <UserRoundIcon size={16} />
                      {repo.language || "N/A"}
                    </span>
                  </div>
                </CardContainer>
              </a>
            ));
          })()}
        </div>
      </div>
    </div>
  );
};

export default GitInfo;
