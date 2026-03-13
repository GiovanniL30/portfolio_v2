import { CodeIcon } from "lucide-react";
import { featuredProjects } from "../../../data/content";
import ProjectItem from "./ProjectItem";

const FeaturedProjects = () => {
  return (
    <>
      <div className="w-full flex flex-col items-start">
        <div className="flex items-center gap-5">
          <div className="p-2 bg-primary/10 text-primary border rounded-xl shadow-[0_0_6px] shadow-primary">
            <CodeIcon size={18} />
          </div>
          <p className="text-xs text-text-muted bg-text-muted/10 border py-1 px-4 rounded-full">
            {featuredProjects.length} projects
          </p>
        </div>
        <p className="text-2xl mt-5 font-semibold">Featured Projects</p>
        <p className="text-text-muted text-sm  my-5 mb-7">
          A selection of my best and most recent work, showcasing a range of
          technologies and problem-solving skills.
        </p>
      </div>
      <div className="relative grid grid-cols-1 gap-5 mt-5 w-full justify-items-center">
        <div className="absolute -left-5 top-0 bottom-0 w-0.5 ml-4 z-0 bg-linear-to-b from-transparent via-primary/80 to-transparent rounded-full h-full" />
        {featuredProjects.map((project, index) => (
          <div className="relative w-full flex" key={index}>
            <div className="w-6" />
            <div className="flex-1">
              <ProjectItem index={index + 1} project={project} />
              {index < featuredProjects.length - 1 && (
                <hr className="border-text-muted/30 h-1 w-full mt-10 mb-5" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProjects;
