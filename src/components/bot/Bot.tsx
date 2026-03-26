import useManageBotMessages from "../../hooks/useManageBotMessages";
import EmptyMessage from "./EmptyMessage";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

const Bot = () => {
  const { sendMessage, messages } = useManageBotMessages();

  return (
    <>
      <div className="bg-surface p-2">
        <p className="text-xs text-text-muted uppercase tracking-wide text-center">Giovanni Assistant</p>
      </div>
      <div className="h-full overflow-y-auto bg-surface/60 backdrop-blur-md p-2 flex flex-col max-w-80 md:max-w-100">
        {messages.length == 0 ? (
          <div className="h-full  overflow-y-auto my-3 flex items-center justify-center">
            <EmptyMessage sendMessage={sendMessage} />
          </div>
        ) : (
          <div className="h-full max-h-100 overflow-y-auto my-3">
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
