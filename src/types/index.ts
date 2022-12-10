export interface IErrorMessage {
  message: string;
  textColor?: "black" | "white" | "red" | "green" | "yellow" | "blue";
  bgColor?: "black" | "white" | "red" | "green" | "yellow" | "blue";
  fontSize?: string;
  fontWeight?: "bold" | "normal" | "lighter" | "900";
  textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
  error?: string;
}

export interface ISendMessage {
  chatId: string | number;
  message: string;
}
