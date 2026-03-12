import {
  ArrowRightIcon,
  CodeIcon,
  GithubIcon,
  LinkedinIcon,
  SlashIcon,
} from "lucide-react";
import Button from "./ui/Button";

const AboutMe = () => {
  return (
    <div className="h-full flex w-full justify-center items-center -mt-10">
      <div className="flex flex-col items-center gap-10">
        <CodeIcon
          className="text-primary drop-shadow-[0_0_12px_var(--brand-primary)]"
          fill="transparent"
        />
        <p className="text-text-muted uppercase">Hello, I'm</p>
        <p className="font-medium text-5xl text-center">Giovanni M. Leo</p>
        <p className="text-primary tracking-wide font-medium">
          Full Stack Web Developer
        </p>

        <div className="w-25 h-0.5 gradient-divider -my-3"></div>
        <p className="text-center max-w-110 tracking-wide text-text-muted">
          I craft clean, performant web applications with modern technologies.
          Specialized in TypeScript, React, Node.js, and building products that
          users love.
        </p>
        <div className="flex items-center gap-4">
          <Button className="flex gap-2 items-center shadow-[0_0_12px] shadow-primary/50">
            <p>View Projects</p>
            <ArrowRightIcon size={18} />
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
        <div className="flex items-center gap-5">
          <Button
            variant="icon"
            className="flex items-center gap-3 text-text-muted"
          >
            <GithubIcon />
            <p>Github</p>
          </Button>
          <SlashIcon size={10} className="text-text-muted" />
          <Button
            variant="icon"
            className="flex items-center gap-3 text-text-muted"
          >
            <LinkedinIcon />
            <p>LinkedIn</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
// Nitin Ranganath
// Full Stack Developer

// I craft clean, performant web applications with modern technologies. Specialized in TypeScript, React, Node.js, and building products that users love.

// View Projects
// Learn More
// GitHub
// /
// Contact
