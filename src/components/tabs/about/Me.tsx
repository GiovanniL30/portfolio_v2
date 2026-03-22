import { TextToken } from "../../text/TextTokens";

const Me = () => {
  return (
    <div className="flex flex-col gap-5 text-text-muted">
      <p>
        Hi! I'm Giovanni, a passionate <TextToken variant="keyword">full stack web developer</TextToken> who loves building clean, modern, and
        user-friendly applications. I enjoy turning ideas into reality with code and thrive on solving real-world problems with technology.
      </p>
      <p>
        You'll find me exploring new tech, learning about design, or collaborating with others on creative projects. I'm always eager to grow, share
        knowledge, and make a positive impact through my work.
      </p>
    </div>
  );
};

export default Me;
