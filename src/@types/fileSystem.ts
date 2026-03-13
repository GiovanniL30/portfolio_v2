import type { ReactNode } from "react";

export type FileNode = {
  name: string;
  path?: string;
  type: "file" | "folder";
  children?: FileNode[];
  content?: () => ReactNode;
};

export type Project = {
  title: string;
  description: string;
  info: {
    year: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  badge: string[];
};
