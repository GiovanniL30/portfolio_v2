import { ArrowRightIcon } from "lucide-react";
import Button from "../../ui/Button";
import ExtraProjects from "./ExtraProjects";
import FeaturedProjects from "./FeaturedProjects";
import { personalGithubLink } from "../../../data/content";

const Projects = () => {
  return (
    <div className="h-full w-full flex flex-col justify-start my-5 max-w-150 mx-auto">
      <FeaturedProjects />
      <ExtraProjects />
      <a
        className="w-full flex flex-1 pb-15"
        href={personalGithubLink}
        target="_blank"
      >
        <Button
          variant={"outline"}
          className="mt-8 w-full flex justify-center gap-2 text-xs"
        >
          <p>View More on Github</p>
          <ArrowRightIcon size={15} />
        </Button>
      </a>
    </div>
  );
};

export default Projects;
