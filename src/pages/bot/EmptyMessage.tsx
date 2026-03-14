const EmptyMessage = ({ sendMessage }: { sendMessage: (prompt: string) => void }) => {
  const samples = [
    "Can you walk me through your professional experience and key accomplishments?",
    "Tell me about your background and skills.",
    "How can I contact you for freelance work?",
  ];

  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6">
      <h3 className="text-2xl font-semibold">Welcome to the Bot 🤖</h3>
      <p className="text-sm text-text-muted px-6">Ask me anything about my experience, projects, or skills.</p>

      <p className="text-sm text-text-muted/90  ">Try one of these starter prompts:</p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center justify-center">
        {samples.map((s, i) => (
          <button
            key={i}
            onClick={() => sendMessage(s)}
            className="rounded-md bg-accent/50 px-4 py-2 text-sm hover:bg-accent cursor-pointer transition-all duration-150 ease-linear"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyMessage;
