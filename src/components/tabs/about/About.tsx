import { ArrowRightIcon, GithubIcon, MailIcon } from "lucide-react";
import me from "../../../assets/images/me.jpg";
import Button from "../../ui/Button";
import type { ReactNode } from "react";
import Skills from "./Skills";
import Interests from "./Interests";
import Me from "./Me";
import Experience from "./Experience";
import Certifications from "./Certifications";
import { projectsTab } from "../../../data/fileSystem";
import { personalGithubLink } from "../../../data/content";
import { useEditorStore } from "../../../store/useEditorStore";

type section = "About Me" | "Skills" | "Interests" | "Experience" | "Certifications";

const sections: section[] = ["About Me", "Certifications", "Skills", "Experience", "Interests"];

const generateContent = (section: section): ReactNode => {
  switch (section) {
    case "About Me":
      return <Me />;
    case "Skills":
      return <Skills />;
    case "Interests":
      return <Interests />;
    case "Experience":
      return <Experience />;
    case "Certifications":
      return <Certifications />;
  }
};

const About = () => {
  const { setOpenTab } = useEditorStore();

  return (
    <div className="flex flex-col w-full justify-center items-center mt-5 max-w-150  mx-auto">
      <div className="flex flex-col w-full items-center">
        <img className="w-60 h-60 rounded-full object-cover border-2 border-primary drop-shadow-[0_0_6px_var(--brand-primary)]" src={me} alt="me" />
        <div className="w-full mt-15 flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <h1 className="text-4xl font-bold tracking-wide">Giovanni M. Leo</h1>
            <div className="flex items-center gap-2">
              <a href={personalGithubLink} target="_blank">
                <Button variant="outline" className="p-2!">
                  <GithubIcon size={18} />
                </Button>
              </a>
              <a href="mailto:giovannileo100@gmail.com">
                <Button variant="outline" className="p-2!">
                  <MailIcon size={18} />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <MailIcon size={18} />
            <p>giovannileo100@gmail.com</p>
          </div>
          <div className="text-sm text-text-muted flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <p>Baguio City</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-10">
        <div className="flex flex-col gap-5 w-full">
          {sections.map((section, index) => (
            <div>
              <div className="flex items-end" key={index}>
                <p className="text-primary text-sm font-semibold">0{index + 1}</p>
                <p className="font-semibold text-xl pl-5">{section}</p>
              </div>
              <div className="w-full pl-10 mt-5">{generateContent(section)}</div>
            </div>
          ))}
        </div>

        <div className="h-0.5 gradient-divider my-3 w-full max-w-80 mx-auto mt-8 mb-5"></div>
        <Button onClick={() => setOpenTab(projectsTab)} variant="icon" className="flex justify-center gap-2  items-center text-primary">
          <p>View My Projects</p>
          <ArrowRightIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default About;
