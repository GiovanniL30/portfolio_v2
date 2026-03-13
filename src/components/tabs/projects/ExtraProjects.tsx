import { GithubIcon, GlobeIcon } from "lucide-react";
import { extraProjects } from "../../../data/content";
import CardContainer from "../../containers/CardContainer";
import Button from "../../ui/Button";

const ExtraProjects = () => {
  return (
    <>
      <div className="w-full flex flex-col items-start mt-15">
        <p className="text-xl font-semibold">Other Projects</p>

        <p className="text-text-muted text-sm my-5 mb-7">
          Additional projects and experiments that highlight my curiosity, learning, and versatility as a developer.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {extraProjects.map((project) => (
          <CardContainer key={project.title}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p>{project.title}</p>
                </div>
                <p className="text-sm text-text-muted mt-2">{project.description}</p>
              </div>
              <div className="flex items-end justify-end mt-6 gap-3">
                {project.info?.githubUrl && (
                  <a href={project.info.githubUrl} target="_blank">
                    <Button variant="outline" className="p-2!">
                      <GithubIcon size={18} />
                    </Button>
                  </a>
                )}
                {project.info?.liveUrl && (
                  <a href={project.info.liveUrl} target="_blank">
                    <Button variant="outline" className="p-2!">
                      <GlobeIcon size={18} />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default ExtraProjects;
