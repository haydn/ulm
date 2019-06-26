import Token from "./Token";
import AST, { Expression, isNumericExpression } from "./AST";
import errorMessage from "./errorMessage";

const parse = (tokens: Token[]): AST => {
  let ast = [];
  let index = 0;
  let token = tokens[index];

  const walk = (): Expression => {
    if (token.type === "OperatorName") {
      let { value: operator, location, file } = token;

      index += 1;
      token = tokens[index];

      let operands = walkParentheses();

      if (
        operator === "NumericEqualRelation" ||
        operator === "NumericNotEqualRelation" ||
        operator === "NumericMultiplicationOperation" ||
        operator === "NumericAdditionOperation"
      ) {
        if (operands.length !== 2) {
          throw errorMessage(
            `Wrong number of operands. Expected 2, found ${operands.length}.`,
            location,
            file
          );
        }

        let [a, b] = operands;

        if (!isNumericExpression(a)) {
          throw errorMessage(
            `Unexpected operand: '${a.type}' Expected: 'NumericExpression'.`,
            location,
            file
          );
        }

        if (!isNumericExpression(b)) {
          throw errorMessage(
            `Unexpected operand: '${b.type}' Expected: 'NumericExpression'.`,
            location,
            file
          );
        }

        return {
          type: operator,
          operands: [a, b]
        };
      }

      if (operator === "RationalNumber") {
        if (operands.length !== 2) {
          throw errorMessage(
            `Wrong number of operands. Expected 2, found ${operands.length}.`,
            location,
            file
          );
        }

        let [numerator, denominator] = operands;

        if (numerator.type !== "IntegerNumber") {
          throw errorMessage(
            `Unexpected operand: '${
              numerator.type
            }' Expected: 'IntegerNumber'.`,
            location,
            file
          );
        }

        if (denominator.type !== "NaturalNumber") {
          throw errorMessage(
            `Unexpected operand: '${
              denominator.type
            }' Expected: 'NaturalNumber'.`,
            location,
            file
          );
        }

        return {
          type: operator,
          numerator: numerator.value,
          denominator: denominator.value
        };
      }

      throw errorMessage(`Unknown operator: '${operator}'`, location, file);
    }

    if (token.type === "NaturalNumberLiteral") {
      let value = Number(token.value.slice(0, -1).replace(/_/g, ""));

      index += 1;
      token = tokens[index];

      return {
        type: "NaturalNumber",
        value
      };
    }

    if (token.type === "WholeNumberLiteral") {
      let value = Number(token.value.slice(0, -1).replace(/_/g, ""));

      index += 1;
      token = tokens[index];

      return {
        type: "WholeNumber",
        value
      };
    }

    if (token.type === "IntegerNumberLiteral") {
      let value = Number(token.value.slice(0, -1).replace(/_/g, ""));

      index += 1;
      token = tokens[index];

      return {
        type: "IntegerNumber",
        value
      };
    }

    if (token.type === "RationalNumberLiteral") {
      let value = token.value.replace(/_/g, "");
      let numerator, denominator;
      if (value.includes(".")) {
        const [n, d] = value.split(".");
        numerator = Number(n + d);
        denominator = 10 ** d.length;
      } else if (value.includes("/")) {
        const [n, d] = value.split("/");
        numerator = Number(n);
        denominator = Number(d);
      } else {
        numerator = Number(value);
        denominator = 1;
      }

      index += 1;
      token = tokens[index];

      return {
        type: "RationalNumber",
        numerator,
        denominator
      };
    }

    throw errorMessage(
      `Unexpected token: '${token.type}'`,
      token.location,
      token.file
    );
  };

  const walkParentheses = (): Expression[] => {
    let expressions = [];

    if (!token) {
      throw `Unexpected end of file. Expected: 'LeftParenthesis'`;
    }

    if (token.type === "LeftParenthesis") {
      index += 1;
      token = tokens[index];
    } else {
      throw errorMessage(
        `Unexpected token: '${token.type}' Expected: 'LeftParenthesis'`,
        token.location,
        token.file
      );
    }

    while (token && token.type !== "RightParenthesis") {
      expressions.push(walk());
    }

    if (!token) {
      throw `Unexpected end of file. Expected: 'RightParenthesis'`;
    }

    index += 1;
    token = tokens[index];

    return expressions;
  };

  while (token) {
    ast.push(walk());
  }

  return ast;
};

export default parse;
