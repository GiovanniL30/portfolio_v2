import type { FileNode } from "../@types/fileSystem";
import About from "../components/tabs/about/About";
import Home from "../components/tabs/Home";
import Projects from "../components/tabs/projects/Projects";

export const homeTab: FileNode = {
  name: "home.tsx",
  path: "src/home.tsx",
  type: "file",
  content: () => <Home />,
};

export const aboutTab: FileNode = {
  name: "about-me.tsx",
  path: "src/about/about-me.tsx",
  type: "file",
  content: () => <About />,
};

export const projectsTab: FileNode = {
  name: "all-projects.tsx",
  path: "src/project/all-projects.tsx",
  type: "file",
  content: () => <Projects />,
};

export const fileSystem: FileNode[] = [
  {
    name: "about",
    path: "src/about",
    type: "folder",
    children: [aboutTab],
  },
  {
    name: "projects",
    path: "src/projects",
    type: "folder",
    children: [
      projectsTab,
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
  homeTab,
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
