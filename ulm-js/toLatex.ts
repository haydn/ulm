import AST, { Expression, isExpression } from "./AST";

const expressionToLatex = (expression: Expression): string => {
  if (expression.type === "NumericEqualRelation") {
    return `${toLatex(expression.operands[0])} = ${toLatex(
      expression.operands[1]
    )}`;
  }
  if (expression.type === "NumericNotEqualRelation") {
    return `${toLatex(expression.operands[0])} ≠ ${toLatex(
      expression.operands[1]
    )}`;
  }
  if (expression.type === "NumericAdditionOperation") {
    return `${toLatex(expression.operands[0])} + ${toLatex(
      expression.operands[1]
    )}`;
  }
  if (expression.type === "NumericMultiplicationOperation") {
    return `${toLatex(expression.operands[0])} \\times ${toLatex(
      expression.operands[1]
    )}`;
  }
  if (expression.type === "RationalNumber") {
    return expression.denominator === 1
      ? expression.numerator.toString()
      : `\\frac{${expression.numerator}}{${expression.denominator}}`;
  }
};

const toLatex = (x: Expression | AST): string =>
  isExpression(x)
    ? expressionToLatex(x)
    : x.map(e => expressionToLatex(e)).join("\\\\[16pt]");

export default toLatex;
