import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../_config/api.config";
import type { Keyword } from "../@types/compiler";

export const useGetKeywords = () => {
  return useQuery<{ keywords: Keyword[] }>({
    retry: false,
    queryKey: ["compiler", "keywords"],
    queryFn: async () => {
      const response = await api.get("/api/v1/compiler/keywords");
      return response.data;
    },
  });
};

export const useCompileSourceCode = () => {
  return useMutation<{ compiled: string }, Error, { sourceCode: string }>({
    retry: false,
    mutationFn: async ({ sourceCode }) => {
      const response = await api.post("/api/v1/compiler/compile", {
        sourceCode,
      });
      return response.data;
    },
  });
};
