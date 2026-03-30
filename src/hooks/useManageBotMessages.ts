import { useSendBotMessage } from "../_api/bot.api";
import type { Message } from "../@types/message";
import { useState } from "react";

const useManageBotMessages = () => {
  const sendMutation = useSendBotMessage();

  const initialMessages: Message[] = [];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const sendMessage = (prompt: string) => {
    const myId = `me-${Date.now()}-${Math.random()}`;
    const botId = `bot-${Date.now()}-${Math.random()}`;

    const myMessage: Message = {
      id: myId,
      message: prompt,
      messageAt: new Date(),
      from: "me",
      isPending: false,
    };

    const tempBotMessage: Message = {
      id: botId,
      message: "",
      messageAt: new Date(),
      from: "bot",
      isPending: true,
    };

    setMessages((prev) => [...prev, myMessage, tempBotMessage]);

    sendMutation.mutate(
      { prompt },
      {
        onSuccess: (data) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botId
                ? {
                    ...m,
                    message: data.message,
                    messageAt: new Date(),
                    isPending: false,
                  }
                : m,
            ),
          );
        },
        onError: (err) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botId
                ? {
                    ...m,
                    message: err?.message ?? "Request failed",
                    messageAt: new Date(),
                    isPending: false,
                  }
                : m,
            ),
          );
          console.error(err);
        },
      },
    );
  };

  return { sendMessage, messages, messageLoading: sendMutation.isPending };
};

export default useManageBotMessages;
