import { Helmet } from "react-helmet-async";
import useManageBotMessages from "../../hooks/useManageBotMessages";
import EmptyMessage from "./EmptyMessage";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

const Bot = () => {
  const { sendMessage, messages } = useManageBotMessages();

  return (
    <>
      <Helmet>
        <title>Chat with Giovanni Leo | Web Developer Assistant</title>

        <meta
          name="description"
          content="Ask Giovanni Leo anything about his web development work, projects, and experience. Interactive portfolio chatbot."
        />

        <meta name="keywords" content="Giovanni Leo chatbot, ask web developer, developer portfolio assistant, web developer Baguio chat" />

        <meta property="og:title" content="Chat with Giovanni Leo" />
        <meta property="og:description" content="Interact with Giovanni Leo's portfolio chatbot and learn more about his work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giovanni.upsertsolution.com/bot" />
      </Helmet>
      <div className="h-full overflow-y-auto bg-surface/80 p-2 flex flex-col">
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wide">Bot</p>
        </div>

        {messages.length == 0 ? (
          <div className="h-full  overflow-y-auto my-3 flex items-center justify-center">
            <EmptyMessage sendMessage={sendMessage} />
          </div>
        ) : (
          <div className="h-full  overflow-y-auto my-3">
            <Messages messages={messages} />
          </div>
        )}

        <div className="mt-auto">
          <MessageBox sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

export default Bot;
