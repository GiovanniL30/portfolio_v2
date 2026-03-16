export type TerminalTab = "OUTPUT" | "TERMINAL";

export type LineKind =
  | "input"
  | "output"
  | "error"
  | "info"
  | "success"
  | "divider";

export type TerminalLine = {
  kind: LineKind;
  text: string;
};

export type CommandResult =
  | string // single output line
  | string[] // multiple plain output lines
  | TerminalLine[] // full control — mixed kinds per line
  | null; // no output (used for "clear")

export type Command = {
  description: string;
  run: (args: string[]) => CommandResult;
};
