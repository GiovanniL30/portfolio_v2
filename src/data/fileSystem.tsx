import type { FileNode } from "../@types/fileSystem";
import About from "../components/tabs/about/About";
import Contact from "../components/tabs/about/Contact";
import CodeEditor from "../components/tabs/codeEditor/CodeEditor";
import GitInfo from "../components/tabs/GitInfo";
import Projects from "../components/tabs/projects/Projects";
import Readme from "../components/tabs/Readme";

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

export const readMeTab: FileNode = {
  name: "README.md",
  path: "src/README.md",
  type: "file",
  content: () => <Readme />,
};

export const gitInfoTab: FileNode = {
  name: "info.git",
  path: "src/info.git",
  type: "file",
  content: () => <GitInfo />,
};

export const contactTab: FileNode = {
  name: "contact.json",
  path: "src/about/contact.json",
  type: "file",
  content: () => <Contact />,
};

export const codeEditorTab: FileNode = {
  name: "code-editor.wika",
  path: "src/code-editor.wika",
  type: "file",
  content: () => <CodeEditor />,
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
        children: [aboutTab, contactTab],
      },

      {
        name: "projects",
        path: "src/projects",
        type: "folder",
        children: [projectsTab],
      },
      codeEditorTab,
      gitInfoTab,
    ],
  },
  readMeTab,
];
