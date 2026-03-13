import { CodeIcon } from "lucide-react";
import { featuredProjects } from "../../../data/content";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="h-full w-full flex flex-col justify-start my-5 max-w-150 mx-auto">
      <div className="w-full flex flex-col items-start">
        <div className="flex items-center gap-5">
          <div className="p-2 bg-primary/10 text-primary border rounded-xl shadow-[0_0_6px] shadow-primary">
            <CodeIcon size={18} />
          </div>
          <p className="text-xl font-semibold">Featured Projects</p>
        </div>
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
    </div>
  );
};

export default Projects;
