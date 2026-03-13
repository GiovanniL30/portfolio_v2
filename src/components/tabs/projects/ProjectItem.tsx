import { CalendarIcon, GithubIcon, GlobeIcon, ArrowRightIcon } from "lucide-react";
import type { Project } from "../../../@types/fileSystem";
import ScrollableContainer from "../../containers/ScrollableContainer";
import Badge from "../../ui/Badge";

type ProjectItemProps = {
  project: Project;
  index: number;
};

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  return (
    <div className="transition-all group">
      <div className="flex flex-col gap-3">
        <div className="flex items-end">
          <p className=" transition-all ease-in text-xs border font-semibold text-text-muted bg-surface p-1.5 rounded-full w-fit group-hover:text-primary group-hover:bg-primary/10 ">
            0{index}
          </p>
          <p className="text-lg font-semibold pl-5">{project.title}</p>
        </div>
        <div className="pl-10 flex flex-col gap-2">
          <div className="flex gap-2 items-center flex-wrap">
            {project.badge.map((badge) => (
              <Badge>{badge}</Badge>
            ))}
          </div>
          <div className="text-sm text-text-muted flex gap-1 items-center">
            <CalendarIcon size={16} />
            <p>{project.info.year}</p>
          </div>

          {project?.images && project.images.length === 1 && (
            <div className="mb-2">
              <img className="w-full h-56 object-cover rounded-md" src={project.images[0]} alt="project-0" />
            </div>
          )}

          <ScrollableContainer scrollable={false}>
            <p className="text-sm text-text-muted text-justify p-2">{project.description}</p>
          </ScrollableContainer>
          <div className="flex items-center gap-2">
            {project.info?.githubUrl && (
              <a
                className="group/link inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-text-muted bg-surface text-text-muted hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 shadow-sm mt-2 min-w-[90px] group"
                href={project.info.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
              >
                <GithubIcon size={18} />
                <span className="text-xs font-medium">GitHub</span>
                <span className="inline-block w-0 group-hover/link:w-5 transition-all duration-200 overflow-hidden">
                  <ArrowRightIcon size={16} className="ml-1 opacity-0 group-hover/link:opacity-100 scale-x-100 transition-all duration-200" />
                </span>
              </a>
            )}
            {project.info?.liveUrl && (
              <a
                className="group/link inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-text-muted bg-surface text-text-muted hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 shadow-sm mt-2 min-w-[90px] group"
                href={project.info.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Project"
              >
                <GlobeIcon size={18} />
                <span className="text-xs font-medium">Live URL</span>
                <span className="inline-block w-0 group-hover/link:w-5 transition-all duration-200 overflow-hidden">
                  <ArrowRightIcon size={16} className="ml-1 opacity-0 group-hover/link:opacity-100 scale-x-100 transition-all duration-200" />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
