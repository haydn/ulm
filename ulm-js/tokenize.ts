import Token, { CodePoint } from "./Token";

const SIGNS = new Set(["+", "-"]);

const LEADING_DIGITS = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

const TRUE_DIGITS = new Set(["0", ...LEADING_DIGITS]);

const DIGITS = new Set([...TRUE_DIGITS, "_"]);

const WHITESPACE = new Set(["\u0009", "\u0020"]);

const IGNORED = new Set([",", ";"]);

const NAME = new Set([
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."_-!*/\\%^+÷=≠|"
]);

const errorMessage = (
  message: string,
  { line, column }: CodePoint,
  file: string | null
) =>
  [message, `${file ? `In: ${file} at ` : "At: "}${line}:${column}`].join("\n");

const format = (string?: string): string =>
  string
    ? `'${string}' (${string
        .split("")
        .map(
          char =>
            `U+${char
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
              .padStart(4, "0")}`
        )
        .join(" ")})`
    : "NULL";

const tokenize = (input: string, file: string | null = null): Token[] => {
  let index = 0;
  let line = 1;
  let column = 1;
  let char = input[index];

  let tokens: Token[] = [];

  while (index < input.length) {
    if (char === "\r") {
      const nextChar = input[index + 1];

      if (nextChar === "\n") {
        line += 1;

        index += 2;
        column = 1;
        char = input[index];

        continue;
      }

      throw errorMessage(
        `Unexpected character ${format(
          nextChar
        )} encountered. Expected ${format("\n")}.`,
        { index, line, column },
        file
      );
    }

    if (char === "\n") {
      line += 1;

      index += 1;
      column = 1;
      char = input[index];

      continue;
    }

    if (WHITESPACE.has(char) || IGNORED.has(char)) {
      index += 1;
      column += 1;
      char = input[index];

      continue;
    }

    if (char === "(") {
      tokens.push({
        type: "LeftParenthesis",
        value: char,
        file,
        location: {
          index,
          line,
          column
        }
      });

      index += 1;
      column += 1;
      char = input[index];

      continue;
    }

    if (char === ")") {
      tokens.push({
        type: "RightParenthesis",
        value: char,
        file,
        location: {
          index,
          line,
          column
        }
      });

      index += 1;
      column += 1;
      char = input[index];

      continue;
    }

    if (char === "{") {
      tokens.push({
        type: "LeftBracket",
        value: char,
        file,
        location: {
          index,
          line,
          column
        }
      });

      index += 1;
      column += 1;
      char = input[index];

      continue;
    }

    if (char === "}") {
      tokens.push({
        type: "RightBracket",
        value: char,
        file,
        location: {
          index,
          line,
          column
        }
      });

      index += 1;
      column += 1;
      char = input[index];

      continue;
    }

    if (char === ":") {
      tokens.push({
        type: "Colon",
        value: char,
        file,
        location: {
          index,
          line,
          column
        }
      });

      index += 1;
      column += 1;
      char = input[index];

      continue;
    }

    if (char === "0") {
      let value = char;
      let location = {
        index,
        line,
        column
      };

      index += 1;
      column += 1;
      char = input[index];

      if (char === "w") {
        value += char;

        tokens.push({
          type: "WholeNumberLiteral",
          value,
          file,
          location
        });

        index += 1;
        column += 1;
        char = input[index];

        continue;
      }

      if (char === "i") {
        value += char;

        tokens.push({
          type: "IntegerNumberLiteral",
          value,
          file,
          location
        });

        index += 1;
        column += 1;
        char = input[index];

        continue;
      }

      if (char === ".") {
        value += char;

        index += 1;
        column += 1;
        char = input[index];

        if (TRUE_DIGITS.has(char)) {
          do {
            value += char;

            index += 1;
            column += 1;
            char = input[index];
          } while (DIGITS.has(char));

          tokens.push({
            type: "RationalNumberLiteral",
            value,
            file,
            location
          });

          continue;
        }

        throw errorMessage(
          `Unexpected character ${format(
            char
          )} encountered. Expected one of: ${[...TRUE_DIGITS].join(" ")}`,
          { index, line, column },
          file
        );
      }

      if (char === "/") {
        value += char;

        index += 1;
        column += 1;
        char = input[index];

        if (LEADING_DIGITS.has(char)) {
          value += char;

          index += 1;
          column += 1;
          char = input[index];

          while (DIGITS.has(char)) {
            value += char;

            index += 1;
            column += 1;
            char = input[index];
          }

          tokens.push({
            type: "RationalNumberLiteral",
            value,
            file,
            location
          });

          continue;
        }

        throw errorMessage(
          `Unexpected character ${format(
            char
          )} encountered. Expected one of: ${[...LEADING_DIGITS].join(" ")}`,
          { index, line, column },
          file
        );
      }

      tokens.push({
        type: "RationalNumberLiteral",
        value,
        file,
        location
      });

      continue;
    }

    if (LEADING_DIGITS.has(char)) {
      let value = char;
      let location = {
        index,
        line,
        column
      };

      index += 1;
      column += 1;
      char = input[index];

      while (DIGITS.has(char)) {
        value += char;

        index += 1;
        column += 1;
        char = input[index];
      }

      if (char === "n") {
        value += char;

        tokens.push({
          type: "NaturalNumberLiteral",
          value,
          file,
          location
        });

        index += 1;
        column += 1;
        char = input[index];

        continue;
      }

      if (char === "w") {
        value += char;

        tokens.push({
          type: "WholeNumberLiteral",
          value,
          file,
          location
        });

        index += 1;
        column += 1;
        char = input[index];

        continue;
      }

      if (char === "i") {
        value += char;

        tokens.push({
          type: "IntegerNumberLiteral",
          value,
          file,
          location
        });

        index += 1;
        column += 1;
        char = input[index];

        continue;
      }

      if (char === ".") {
        value += char;

        index += 1;
        column += 1;
        char = input[index];

        if (TRUE_DIGITS.has(char)) {
          do {
            value += char;

            index += 1;
            column += 1;
            char = input[index];
          } while (DIGITS.has(char));

          tokens.push({
            type: "RationalNumberLiteral",
            value,
            file,
            location
          });

          continue;
        }

        throw errorMessage(
          `Unexpected character ${format(
            char
          )} encountered. Expected one of: ${[...TRUE_DIGITS].join(" ")}`,
          { index, line, column },
          file
        );
      }

      if (char === "/") {
        value += char;

        index += 1;
        column += 1;
        char = input[index];

        if (LEADING_DIGITS.has(char)) {
          value += char;

          index += 1;
          column += 1;
          char = input[index];

          while (DIGITS.has(char)) {
            value += char;

            index += 1;
            column += 1;
            char = input[index];
          }

          tokens.push({
            type: "RationalNumberLiteral",
            value,
            file,
            location
          });

          continue;
        }

        throw errorMessage(
          `Unexpected character ${format(
            char
          )} encountered. Expected one of: ${[...LEADING_DIGITS].join(" ")}`,
          { index, line, column },
          file
        );
      }

      tokens.push({
        type: "RationalNumberLiteral",
        value,
        file,
        location
      });

      continue;
    }

    if (SIGNS.has(char) && TRUE_DIGITS.has(input[index + 1])) {
      let value = char;
      let location = {
        index,
        line,
        column
      };

      index += 1;
      column += 1;
      char = input[index];

      if (char === "0") {
        value += char;

        index += 1;
        column += 1;
        char = input[index];

        if (char === ".") {
          value += char;

          index += 1;
          column += 1;
          char = input[index];

          if (TRUE_DIGITS.has(char)) {
            do {
              value += char;

              index += 1;
              column += 1;
              char = input[index];
            } while (DIGITS.has(char));

            tokens.push({
              type: "RationalNumberLiteral",
              value,
              file,
              location
            });

            continue;
          }

          throw errorMessage(
            `Unexpected character ${format(
              char
            )} encountered. Expected one of: ${[...TRUE_DIGITS].join(" ")}`,
            { index, line, column },
            file
          );
        }

        if (char === "/") {
          value += char;

          index += 1;
          column += 1;
          char = input[index];

          if (LEADING_DIGITS.has(char)) {
            value += char;

            index += 1;
            column += 1;
            char = input[index];

            while (DIGITS.has(char)) {
              value += char;

              index += 1;
              column += 1;
              char = input[index];
            }

            tokens.push({
              type: "RationalNumberLiteral",
              value,
              file,
              location
            });

            continue;
          }

          throw errorMessage(
            `Unexpected character ${format(
              char
            )} encountered. Expected one of: ${[...LEADING_DIGITS].join(" ")}`,
            { index, line, column },
            file
          );
        }
      }

      while (DIGITS.has(char)) {
        value += char;

        index += 1;
        column += 1;
        char = input[index];
      }

      if (char === "i") {
        value += char;

        tokens.push({
          type: "IntegerNumberLiteral",
          value,
          file,
          location
        });

        index += 1;
        column += 1;
        char = input[index];

        continue;
      }

      if (char === ".") {
        value += char;

        index += 1;
        column += 1;
        char = input[index];

        if (TRUE_DIGITS.has(char)) {
          do {
            value += char;

            index += 1;
            column += 1;
            char = input[index];
          } while (DIGITS.has(char));

          tokens.push({
            type: "RationalNumberLiteral",
            value,
            file,
            location
          });

          continue;
        }

        throw errorMessage(
          `Unexpected character ${format(
            char
          )} encountered. Expected one of: ${[...TRUE_DIGITS].join(" ")}`,
          { index, line, column },
          file
        );
      }

      if (char === "/") {
        value += char;

        index += 1;
        column += 1;
        char = input[index];

        if (LEADING_DIGITS.has(char)) {
          value += char;

          index += 1;
          column += 1;
          char = input[index];

          while (DIGITS.has(char)) {
            value += char;

            index += 1;
            column += 1;
            char = input[index];
          }

          tokens.push({
            type: "RationalNumberLiteral",
            value,
            file,
            location
          });

          continue;
        }

        throw errorMessage(
          `Unexpected character ${format(
            char
          )} encountered. Expected one of: ${[...LEADING_DIGITS].join(" ")}`,
          { index, line, column },
          file
        );
      }

      tokens.push({
        type: "RationalNumberLiteral",
        value,
        file,
        location
      });

      continue;
    }

    if (NAME.has(char)) {
      let value = "";
      let location = {
        index,
        line,
        column
      };

      while (NAME.has(char)) {
        value += char;

        index += 1;
        column += 1;
        char = input[index];
      }

      tokens.push({
        type: "OperatorName",
        value,
        file,
        location
      });

      continue;
    }

    // // FIXME: Is something like this needed?
    // if (!/[\u0009\u000A\u000D\u0020-\uFFFF]/.test(char)) {
    //   throw `Unexpected ( ${char} ) encountered. ${line}:${column}`;
    // }

    throw errorMessage(
      `Unknown character encountered: ${format(char)}`,
      { index, line, column },
      file
    );
  }

  return tokens;
};

export { Token };
export default tokenize;
