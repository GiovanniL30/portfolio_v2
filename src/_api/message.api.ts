import { useMutation } from "@tanstack/react-query";
import api from "../_config/api.config";
import type { ContactFormData } from "../@types/contact";

export const useSendEmailMessage = () => {
  return useMutation<
    { success: boolean; message: string },
    Error,
    ContactFormData
  >({
    retry: false,
    mutationFn: async (args) => {
      const response = await api.post("/api/v1/message", args);
      return response.data;
    },
  });
};
