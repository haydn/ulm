import Token from "./Token";
import AST, { Expression, isNumericExpression } from "./AST";

const parse = (tokens: Token[]): AST => {
  let ast = [];
  let index = 0;
  let token = tokens[index];

  const walk = (): Expression => {
    if (token.type === "OperatorName") {
      let operator = token.value;

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
          throw `Wrong number of operands. Expected 2, found ${
            operands.length
          }.`;
        }

        let [a, b] = operands;

        if (!isNumericExpression(a)) {
          throw `Unexpected operand: ${a.type} Expected: 'NumericExpression'.`;
        }

        if (!isNumericExpression(b)) {
          throw `Unexpected operand: ${b.type} Expected: 'NumericExpression'.`;
        }

        return {
          type: operator,
          operands: [a, b]
        };
      }

      throw `Unknown operator ${operator}`;
    }

    if (
      token.type === "NaturalNumberLiteral" ||
      token.type === "WholeNumberLiteral" ||
      token.type === "IntegerNumberLiteral" ||
      token.type === "RationalNumberLiteral"
    ) {
      let value = token.value.replace(/_/g, "").replace(/[nwi]$/, "");
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

    console.log(token);
    throw `What's this?`;
  };

  const walkParentheses = (): Expression[] => {
    let expressions = [];

    if (token.type === "LeftParenthesis") {
      index += 1;
      token = tokens[index];
    } else {
      throw `Unexpected token: '${token.type}' Expected: 'LeftParenthesis'`;
    }

    while (token && token.type !== "RightParenthesis") {
      expressions.push(walk());
    }

    if (!token) {
      throw `Unexpected end of file. Expected 'RightParenthesis'`;
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
