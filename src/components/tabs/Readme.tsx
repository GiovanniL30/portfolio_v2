import { useEditor } from "../../context/useEditor";
import ScrollableContainer from "../containers/ScrollableContainer";
import { aboutTab, contactTab, gitInfoTab, projectsTab } from "../../data/fileSystem";

const Readme = () => {
  const { setOpenTab } = useEditor();

  return (
    <div className="mx-auto p-6 max-w-200">
      <h1 className="text-3xl font-bold mb-2">👋 Hello I am Giovanni M. Leo!</h1>
      <p className="mb-4 text-text-muted">
        This portfolio is a living canvas of my journey as a developer, designer, and creator. Inspired by the best of modern developer portfolios and
        built with love, every pixel and line of code here reflects my passion for technology and creativity.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2">Quick Links</h3>
      <ScrollableContainer className="mt-2">
        <ul className="list-disc list-inside ml-4 text-primary">
          <li>
            <button className="text-primary hover:underline" onClick={() => setOpenTab(aboutTab)}>
              About Me
            </button>
          </li>
          <li>
            <button className="text-primary hover:underline" onClick={() => setOpenTab(projectsTab)}>
              Projects
            </button>
          </li>
          <li>
            <button className="text-primary hover:underline" onClick={() => setOpenTab(gitInfoTab)}>
              Git Info
            </button>
          </li>
          <li>
            <button className="text-primary hover:underline" onClick={() => setOpenTab(contactTab)}>
              Contact
            </button>
          </li>
        </ul>
      </ScrollableContainer>

      <h2 className="text-2xl font-semibold mt-6 mb-2">✨ Inspiration</h2>
      <p className="mb-4 text-text-muted">
        My portfolio draws inspiration from the vibrant open-source community, the elegance of VS Code, and the creativity of countless developers who
        share their work online. I believe in learning from others, remixing great ideas, and always striving to make something uniquely my own.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">🛠️ Built With</h2>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>React & TypeScript</li>
        <li>Vite</li>
        <li>Tailwind CSS</li>
        <li>Custom UI Components</li>
        <li>Lots of ☕ and ❤️</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">🚀 Features</h2>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>Modern, VS Code-inspired UI</li>
        <li>Responsive and accessible design</li>
        <li>Showcase of projects, skills, and experience</li>
        <li>Interactive and dynamic content</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">💡 Philosophy</h2>
      <p className="mb-4 text-text-muted">
        I believe a portfolio should be more than a resume—it should be a playground for ideas, a showcase of growth, and a place to connect. This
        site is always evolving, just like me.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">🌐 Connect</h2>
      <p className="text-text-muted">
        If you like what you see or want to collaborate, feel free to reach out! My contact info and links are just a click away.
      </p>
      <p className="mt-8 text-sm text-text-muted">Made with love, inspiration, and a lot of curiosity. — Giovanni M. Leo</p>
    </div>
  );
};

export default Readme;
