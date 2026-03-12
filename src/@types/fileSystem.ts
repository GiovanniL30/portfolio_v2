import type { ReactNode } from "react";

export type FileNode = {
  name: string;
  path?: string;
  type: "file" | "folder";
  children?: FileNode[];
  content?: () => ReactNode;
};
