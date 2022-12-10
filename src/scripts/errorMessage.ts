import { IErrorMessage } from "../types";

export function errorMessage({
  message,
  textColor = "red",
  bgColor = "black",
  fontSize = "24px",
  fontWeight = "bold",
  textTransform = "none",
  error = "No data on route",
}: IErrorMessage): string {
  return `<html><head><style>*,*::before,*::after{margin: 0;padding: 0;box-sizing: border-box}</style><title>${error}</title></head><body><div style="width: 100vw; height: 100vh; background-color: ${bgColor}; display: flex; justify-content: center; align-items: center"><h1 style="text-align: center; color: ${textColor}; font-size: ${fontSize}; font-weight: ${fontWeight}; text-transform: ${textTransform}">${message}</h1></div></body></html>`;
}
