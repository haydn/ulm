import { CodePoint } from "./Token";

const errorMessage = (
  message: string,
  { line, column }: CodePoint,
  file: string | null
) =>
  [message, `${file ? `In: ${file} at ` : "At: "}${line}:${column}`].join("\n");

export default errorMessage;
