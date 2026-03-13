import type { FileNode } from "../@types/fileSystem";
import About from "../components/tabs/about/About";
import Contact from "../components/tabs/about/Contact";
import GitInfo from "../components/tabs/GitInfo";
import Home from "../components/tabs/Home";
import Projects from "../components/tabs/projects/Projects";
import Readme from "../components/tabs/Readme";

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
    name: "src",
    path: "src",
    type: "folder",
    children: [
      {
        name: "about",
        path: "src/about",
        type: "folder",
        children: [aboutTab, { name: "contact.json", path: "src/about/contact.json", type: "file", content: () => <Contact /> }],
      },
      {
        name: "projects",
        path: "src/projects",
        type: "folder",
        children: [projectsTab],
      },
      {
        name: "info.git",
        path: "src/info.git",
        type: "file",
        content: () => <GitInfo />,
      },
    ],
  },
  homeTab,

  {
    name: "README.md",
    path: "src/README.md",
    type: "file",
    content: () => <Readme />,
  },
];
