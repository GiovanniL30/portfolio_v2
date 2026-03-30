import { GithubIcon, MailIcon } from "lucide-react";
import Button from "../../ui/Button";
import type { ReactNode } from "react";
import Skills from "./Skills";
import Interests from "./Interests";
import Me from "./Me";
import Experience from "./Experience";
import Certifications from "./Certifications";
import { personalGithubLink } from "../../../data/content";
import { useEditorStore } from "../../../store/useEditorStore";
import { contactTab } from "../../../data/fileSystem";

type section =
  | "About Me"
  | "Skills"
  | "Interests"
  | "Experience"
  | "Certifications";

const sections: section[] = [
  "About Me",
  "Certifications",
  "Skills",
  "Experience",
  "Interests",
];

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
        <img
          className="w-60 h-60 rounded-full object-cover border-2 border-primary drop-shadow-[0_0_6px_var(--brand-primary)]"
          src="/images/giovanni-leo.jpeg"
          alt="Giovanni Leo — full stack web developer from Baguio City"
          title="Giovanni Leo"
          loading="eager"
          decoding="async"
        />

        <div className="w-full mt-15 flex flex-col gap-2">
          <div className="flex gap-2 justify-between w-full">
            <h1 className="text-4xl font-bold tracking-wide">
              Giovanni M. Leo
            </h1>
            <div className="flex items-center gap-2">
              <a href={personalGithubLink} target="_blank">
                <Button variant="outline" className="p-2!">
                  <GithubIcon size={18} />
                </Button>
              </a>

              <Button
                onClick={() => window.open("/GiovanniLeo-Resume.pdf", "_blank")}
                className="p-2! text-sm text-nowrap"
              >
                <p>View Resume</p>
              </Button>
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
                <p className="text-primary text-sm font-semibold">
                  0{index + 1}
                </p>
                <p className="font-semibold text-xl pl-5">{section}</p>
              </div>
              <div className="w-full pl-10 mt-5">
                {generateContent(section)}
              </div>
            </div>
          ))}
          <Button
            onClick={() => setOpenTab(contactTab)}
            className="w-full my-5"
          >
            Send a Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
