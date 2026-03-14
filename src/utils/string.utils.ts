export const cleanPrompt = (text: string) => {
  if (!text) return "";

  let t = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  t = t
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .join("\n");

  t = t.replace(/\n{2,}/g, "\n\n");

  return t.trim();
};
