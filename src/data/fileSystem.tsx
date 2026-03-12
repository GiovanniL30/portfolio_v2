import type { FileNode } from "../@types/fileSystem";
import AboutMe from "../components/AboutMe";

export const fileSystem: FileNode[] = [
  {
    name: "about",
    path: "src/about",
    type: "folder",
    children: [
      {
        name: "about-me.tsx",
        path: "src/about/about-me.tsx",
        type: "file",
        content: () => <AboutMe />,
      },
      {
        name: "skills.json",
        path: "src/about/skills.json",
        type: "file",
        content: () => <div>TypeScript, React, Node.js, Tailwind CSS, Git</div>,
      },
    ],
  },
  {
    name: "projects",
    path: "src/projects",
    type: "folder",
    children: [
      {
        name: "project-1.tsx",
        path: "src/projects/project-1.tsx",
        type: "file",
        content: () => (
          <div>
            Project 1 - A portfolio website built with React and Tailwind.
          </div>
        ),
      },
      {
        name: "project-2.tsx",
        path: "src/projects/project-2.tsx",
        type: "file",
        content: () => (
          <div>Project 2 - A full-stack app with Node.js and PostgreSQL.</div>
        ),
      },
    ],
  },
  {
    name: "contact.md",
    path: "src/contact.md",
    type: "file",
    content: () => (
      <div>
        Email: hello@example.com
        <br />
        GitHub: github.com/example
      </div>
    ),
  },
  {
    name: "README.md",
    path: "src/README.md",
    type: "file",
    content: () => (
      <div>
        <h1># Welcome to my portfolio</h1>
        <p>Thanks for visiting!</p>
      </div>
    ),
  },
];
