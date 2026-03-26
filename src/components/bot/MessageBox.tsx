import { ArrowRightIcon } from "lucide-react";
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

  const handlePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      className={`font-mono flex items-start gap-2 px-3 py-2 border-t ${
        isFocused ? "border-primary" : "border-text-muted/30"
      } transition-colors duration-150 bg-transparent`}
    >
      {/* Prompt arrow */}
      <span className="text-accent text-xs mt-1.5 shrink-0">{">"}</span>

      <textarea
        value={prompt}
        onChange={handlePrompt}
        ref={taRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        className="flex-1 resize-none focus:outline-none text-xs text-text-main/80 bg-transparent small-scroll placeholder:text-text-muted/50 leading-relaxed"
        placeholder="ask something..."
        rows={1}
      />

      <button
        type="submit"
        disabled={!prompt.trim()}
        className={`mt-1 shrink-0 text-accent transition-opacity duration-150 ${
          !prompt.trim() ? "opacity-20 cursor-not-allowed" : "cursor-pointer hover:text-primary"
        }`}
      >
        <ArrowRightIcon size={14} />
      </button>
    </form>
  );
};

export default MessageBox;
