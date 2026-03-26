import { TextToken } from "../../text/TextTokens";

const Me = () => {
  return (
    <div className="flex flex-col gap-5 text-text-muted">
      <p>
        Hi! I'm Giovanni Leo, a{" "}
        <TextToken variant="keyword">Software Engineer</TextToken> and startup
        founder with a strong foundation in designing scalable system
        architectures and web infrastructure. I love balancing high-level system
        design with hands-on coding to turn complex business needs into reality.
      </p>
      <p>
        Whether I'm architecting a backend, deploying to the cloud, or leading a
        development team, I thrive on driving projects from concept to
        deployment. I'm always eager to explore modern tech, collaborate on
        creative solutions, and make a real-world impact through my code.
      </p>
    </div>
  );
};

export default Me;
