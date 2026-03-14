import { useMutation } from "@tanstack/react-query";
import api from "../_config/api.config";

export const useSendBotMessage = () => {
  return useMutation<{ message: string }, Error, { prompt: string }>({
    retry: false,
    mutationFn: async ({ prompt }) => {
      const response = await api.post("/api/v1/bot", { prompt });
      return response.data;
    },
  });
};
