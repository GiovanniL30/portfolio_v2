export type Message = {
  id: string | number;
  message: string;
  messageAt: Date | string;
  isPending: boolean;
  from: "bot" | "me";
};
