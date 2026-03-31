import { useEffect, useRef, useState } from "react";
import MarkdownRenderer from "../MarkdownRenderer";
import type { Message } from "../../@types/message";
import { formatTime } from "../../utils/date.utils";

const Messages = ({ messages }: { messages: Message[] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full gap-4 p-4 font-mono">
      {messages.map((message) => (
        <MessageBlock message={message} key={message.id} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

const MessageBlock = ({ message }: { message: Message }) => {
  const isBot = message.from === "bot";
  const messageTime = formatTime(message.messageAt);

  return (
    <div className="flex flex-col gap-1 max-w-full overflow-hidden">
      {isBot ? (
        <>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-primary font-bold shrink-0">[SYSTEM]</span>
            <span className="text-text-muted">{messageTime}</span>
          </div>
          <div
            className={`text-xs text-text-main/90 leading-relaxed pl-1 wrap-break-word overflow-wrap-anywhere ${
              message.isPending ? "animate-pulse" : ""
            }`}
          >
            <MessageContent message={message} />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start gap-2 text-xs text-accent max-w-full">
            <span className="shrink-0 mt-px">{">"}</span>
            <span className="text-accent/80 leading-relaxed wrap-break-word overflow-hidden min-w-0">
              {message.message}
            </span>
          </div>
          <div className="text-text-muted text-xs pl-4">{messageTime}</div>
        </>
      )}
    </div>
  );
};

const MessageContent = ({ message }: { message: Message }) => {
  const { message: fullMessage, isPending, from } = message;
  const [display, setDisplay] = useState<string>(isPending ? "" : fullMessage);

  const indexRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const typedRef = useRef(false);

  useEffect(() => {
    const schedule = (fn: () => void) => Promise.resolve().then(fn);

    if (isPending) {
      schedule(() => {
        setDisplay("bot is thinking...");

        indexRef.current = 0;
        typedRef.current = false;
      });
      return;
    }

    if (from !== "bot" || typedRef.current || !fullMessage) {
      schedule(() => {
        setDisplay(fullMessage);

        typedRef.current = true;
      });
      return;
    }

    schedule(() => setDisplay(""));

    indexRef.current = 0;
    const speed = Math.max(
      8,
      24 - Math.min(12, Math.floor(fullMessage.length / 50)) * 2,
    );
    intervalRef.current = window.setInterval(() => {
      indexRef.current += 1;
      setDisplay(fullMessage.slice(0, indexRef.current));
      if (indexRef.current >= fullMessage.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        typedRef.current = true;
      }
    }, speed);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [fullMessage, isPending, from]);

  return (
    <div className="whitespace-pre-wrap wrap-break-word leading-relaxed">
      <MarkdownRenderer source={display} />
    </div>
  );
};

export default Messages;
