const EmptyMessage = ({ sendMessage }: { sendMessage: (prompt: string) => void }) => {
  const samples = [
    "Can you walk me through your professional experience and key accomplishments?",
    "Tell me about your background and skills.",
    "How can I contact you for freelance work?",
  ];

  return (
    <div className="flex flex-col p-4 font-mono gap-4">
      {/* Boot header */}
      <div className="flex flex-col gap-1 text-xs">
        <p className="text-primary font-bold">[SYSTEM] Welcome to Giovanni Leo personal bot.</p>
        <p className="text-text-main/80">How can I assist you in exploring Giovanni&apos;s portfolio today?</p>
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <div className="flex items-center gap-2 text-accent">
          <span>{">"}</span>
          <span className="text-accent/80">list --prompts</span>
        </div>
        <div className="flex flex-col gap-1 pl-4">
          {samples.map((s, i) => (
            <button
              key={i}
              onClick={() => sendMessage(s)}
              className="text-left text-text-main/70 hover:text-primary transition-colors duration-150 cursor-pointer flex items-start gap-2 group"
            >
              <span className="text-text-muted shrink-0 group-hover:text-primary">-</span>
              <span className="group-hover:underline underline-offset-2">{s}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Blinking cursor */}
      <div className="flex items-center gap-1 text-xs text-text-main/60">
        <span className="inline-block w-2 h-3 bg-text-main/60 animate-[blink_1s_step-end_infinite]" />
      </div>
    </div>
  );
};

export default EmptyMessage;
