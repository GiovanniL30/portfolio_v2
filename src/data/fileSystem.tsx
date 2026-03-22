import type { FileNode } from "../@types/fileSystem";
import About from "../components/tabs/about/About";
import Contact from "../components/tabs/about/Contact";
import CodeEditor from "../components/tabs/codeEditor/CodeEditor";
import CodeEditorReadme from "../components/tabs/codeEditor/CodeEditorReadme";
import GitInfo from "../components/tabs/GitInfo";
import Projects from "../components/tabs/projects/Projects";
import Readme from "../components/tabs/Readme";
import Bot from "../pages/bot/Bot";

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
  name: "code.tagalog",
  path: "src/code/code.tagalog",
  type: "file",
  content: () => <CodeEditor />,
};

export const codeEditorReadmeTab: FileNode = {
  name: "CODE_README.md",
  path: "src/code/CODE_README.md",
  type: "file",
  content: () => <CodeEditorReadme />,
};

export const botTab: FileNode = {
  name: "bot.tsx",
  path: "me/bot.tsx",
  type: "file",
  content: () => <Bot />,
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
      {
        name: "code",
        path: "src/code",
        type: "folder",
        children: [codeEditorTab, codeEditorReadmeTab],
      },

      gitInfoTab,
    ],
  },
  readMeTab,
];
