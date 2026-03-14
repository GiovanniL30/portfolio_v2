import { ArrowUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cleanPrompt } from "../../utils/string.utils";

const MAX_HEIGHT = 200;

const MessageBox = ({ sendMessage }: { sendMessage: (prompt: string) => void }) => {
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    const resize = () => {
      ta.style.height = "auto";
      const target = Math.min(ta.scrollHeight, MAX_HEIGHT);
      ta.style.height = `${target}px`;
      ta.style.overflowY = ta.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
      ta.style.maxHeight = `${MAX_HEIGHT}px`;
    };

    resize();

    ta.addEventListener("input", resize);
    return () => ta.removeEventListener("input", resize);
  }, []);

  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    const target = Math.min(ta.scrollHeight, MAX_HEIGHT);
    ta.style.height = `${target}px`;
    ta.style.overflowY = ta.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
    ta.style.maxHeight = `${MAX_HEIGHT}px`;
  }, [prompt]);

  const handlePrompt = (e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSend = () => {
    const cleaned = cleanPrompt(prompt);
    if (!cleaned) return;
    sendMessage(cleaned);
    setPrompt("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
      className={`bg-text-muted/30 p-3 rounded-md w-full border ${isFocused ? "border-primary" : "border-transparent"}`}
    >
      <textarea
        value={prompt}
        onChange={handlePrompt}
        ref={taRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full resize-none focus:outline-none text-xs text-text-main/80 small-scroll"
        placeholder="Enter your message here"
        rows={1}
      />

      <div className="flex w-full justify-end">
        <button
          type="submit"
          disabled={!prompt.trim()}
          className={`text-text-main/80 ${!prompt.trim() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <ArrowUpIcon size={15} />
        </button>
      </div>
    </form>
  );
};

export default MessageBox;
