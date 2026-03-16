import type {
  Command,
  CommandResult,
  LineKind,
  TerminalLine,
} from "../@types/terminal";
import { personalGithubLink } from "../data/content";
import { formatDate, formatTime } from "./date.utils";

export const COMMANDS: Record<string, Command> = {
  help: {
    description: "Show available commands",
    run: () => {
      const lines: TerminalLine[] = [
        { kind: "info", text: "Available commands:" },
        { kind: "divider", text: "──────────────────────────────────" },
      ];
      Object.entries(COMMANDS).forEach(([name, cmd]) => {
        lines.push({
          kind: "output",
          text: `  ${name.padEnd(12)} — ${cmd.description}`,
        });
      });
      return lines;
    },
  },

  clear: {
    description: "Clear the terminal",
    run: () => null,
  },

  version: {
    description: "Show version info",
    run: (): TerminalLine[] => [
      { kind: "success", text: "Giovanni Terminal v1.0.0" },
    ],
  },

  echo: {
    description: "Print text — usage: echo <text>",
    run: (args): CommandResult =>
      args.length > 0
        ? args.join(" ")
        : ([{ kind: "error", text: "Usage: echo <text>" }] as TerminalLine[]),
  },

  date: {
    description: "Show current date and time",
    run: (): TerminalLine[] => [
      { kind: "info", text: "Current date & time:" },
      {
        kind: "output",
        text: `  ${formatDate(new Date())} ${formatTime(new Date())}`,
      },
    ],
  },

  about: {
    description: "About this terminal",
    run: (): TerminalLine[] => [
      { kind: "success", text: "Giovanni Terminal" },
      { kind: "output", text: "more commands will be added soon!!" },
      { kind: "divider", text: "──────────────────────────────────" },
      { kind: "info", text: `Github: ${personalGithubLink}` },
    ],
  },
};

export const WELCOME: TerminalLine[] = [
  { kind: "success", text: "Giovanni Terminal v1.0.0" },
  { kind: "output", text: 'Type "help" for available commands.' },
  { kind: "divider", text: "──────────────────────────────────" },
];

export const KIND_CLASS: Record<LineKind, string> = {
  input: "text-primary",
  output: "text-text-secondary",
  error: "text-red-400",
  info: "text-blue-400",
  success: "text-green-400",
  divider: "text-text-muted/40",
};

export const isTerminalLineArray = (arr: unknown[]): arr is TerminalLine[] =>
  arr.length > 0 &&
  typeof arr[0] === "object" &&
  arr[0] !== null &&
  "kind" in arr[0];

export const toLines = (result: CommandResult): TerminalLine[] => {
  if (result === null) return [];
  if (typeof result === "string") return [{ kind: "output", text: result }];
  if (Array.isArray(result)) {
    return isTerminalLineArray(result)
      ? result
      : (result as string[]).map((t) => ({
          kind: "output" as LineKind,
          text: t,
        }));
  }
  return [];
};
