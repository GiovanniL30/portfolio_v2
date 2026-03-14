import { SparkleIcon, UserRoundIcon } from "lucide-react";
import type { Message } from "../../@types/message";
import { formatTime } from "../../utils/date.utils";
import { useEffect, useRef, useState } from "react";
import MarkdownRenderer from "../../components/MarkdownRenderer";

const Messages = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="flex flex-col w-full gap-3 p-6">
      {messages.map((message) => (
        <MessageBlock message={message} key={message.id} />
      ))}
    </div>
  );
};

const MessageBlock = ({ message }: { message: Message }) => {
  const isBot = message.from === "bot";
  const messageTime = formatTime(message.messageAt);

  return (
    <div className={`${isBot ? " mr-auto" : "ml-auto"}`}>
      {isBot ? (
        <>
          <div className="flex items-center gap-2">
            <div className={`bg-accent/10 w-fit p-2 rounded-full border text-accent ${message.isPending ? "animate-pulse" : ""} `}>
              <SparkleIcon size={15} className={message.isPending ? "animate-spin" : ""} />
            </div>
            <div className="flex gap-2 items-end flex-wrap">
              <p className="font-semibold">Gio Bot</p>
              <p className="text-sm text-text-muted">{messageTime ?? ""}</p>
            </div>
          </div>
          <div className="max-w-250 mt-2 text-xs text-text-main/80 hover:text-text-main p-2 bg-secondary/10 rounded-sm hover:bg-secondary/20 duration-150 ease-linear transition-all">
            <MessageContent message={message} />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <div className="flex gap-2 items-end flex-nowrap text-nowrap">
              <p className="text-sm text-text-muted">{messageTime ?? ""}</p>
              <p className="font-semibold">You</p>
            </div>
            <div className="w-fit p-2 rounded-full bg-primary/10 text-primary">
              <UserRoundIcon />
            </div>
          </div>
          <div className="max-w-100 mt-2 text-xs text-right text-text-main/80 p-2 bg-accent/10 rounded-sm duration-150">{message.message}</div>
        </div>
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
        setDisplay("");
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
    const speed = Math.max(8, 24 - Math.min(12, Math.floor(fullMessage.length / 50)) * 2);
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
    <div className="whitespace-pre-wrap wrap-break-word">
      <MarkdownRenderer source={display} />
    </div>
  );
};

export default Messages;
