import { Building2Icon } from "lucide-react";
import CardContainer from "../../containers/CardContainer";
import Tag from "../../ui/Tag";
import { TextToken } from "../../text/TextTokens";

const Experience = () => {
  return (
    <div className="flex flex-col gap-3">
      <CardContainer>
        <Tag>Feb 2026 - Present</Tag>
        <div className="mt-5 flex flex-col gap-1">
          <p>Founder & Lead Software Engineer</p>

          <p className="text-sm text-text-muted">Startup</p>

          <div className="flex gap-2 text-text-muted text-sm">
            <p>Upsertsolution</p>
            <p>/</p>
            <p>Remote</p>
          </div>
        </div>

        <ul className="list-disc pl-5 mt-4 text-text-muted text-sm flex flex-col gap-2 marker:text-accent">
          <li>
            Architected the startup's core infrastructure, landing page, and
            integrated blog platform using{" "}
            <TextToken variant="keyword">Next.js</TextToken>,{" "}
            <TextToken variant="keyword">Node.js</TextToken>, and a SQL
            database.
          </li>
          <li>
            Engineered an extensible admin portal with role-based access
            control, seamlessly connecting to backend services to streamline
            operations.
          </li>
          <li>
            Designed a scalable backend architecture and database schema focused
            on high performance and maintainability to support planned user
            growth.
          </li>
        </ul>
      </CardContainer>
      <CardContainer>
        <Tag>Present</Tag>
        <div className="mt-5 flex flex-col gap-1">
          <p>Software Engineer Associate</p>

          <p className="text-sm text-text-muted">Internship</p>

          <div className="flex gap-2 text-text-muted text-sm">
            <p>FullSuite</p>
            <p>/</p>
            <p>Onsite</p>
          </div>
        </div>

        <ul className="list-disc pl-5 mt-4 text-text-muted text-sm flex flex-col gap-2 marker:text-accent">
          <li>
            Develop and maintain web applications using React, Node.js, and
            modern full stack technologies.
          </li>
          <li>
            Collaborate closely with cross-functional teams to deliver features
            and improvements efficiently.
          </li>
          <li>
            Contribute to internal tools and projects that streamline workflows
            and boost company productivity.
          </li>
          <li>
            Participate in code reviews, share best practices, and help foster a
            culture of learning and growth.
          </li>
        </ul>
      </CardContainer>

      <CardContainer>
        <Tag>2022-2026</Tag>
        <div className="mt-5 flex flex-col gap-1">
          <p>BSIT Student</p>

          <div className="flex gap-2 text-text-muted text-sm items-center">
            <Building2Icon size={18} />
            <p>Saint Louis University - Baguio City</p>
          </div>
        </div>
        <p className="text-text-muted text-sm mt-2">
          <TextToken variant="keyword">Graduated with Latin honors</TextToken>.
          My time at university helped me build a strong foundation in computer
          science and software engineering, and{" "}
          <TextToken variant="keyword">
            I learned the importance of fundamentals, teamwork, and continuous
            growth.
          </TextToken>
        </p>
      </CardContainer>
    </div>
  );
};

export default Experience;
