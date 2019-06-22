interface CodePoint {
  index: number;
  line: number;
  column: number;
}

interface Token {
  type:
    | "NaturalNumberLiteral"
    | "WholeNumberLiteral"
    | "IntegerNumberLiteral"
    | "RationalNumberLiteral"
    | "LeftParenthesis"
    | "RightParenthesis"
    | "LeftBracket"
    | "RightBracket"
    | "Colon"
    | "OperatorName";
  // | "ShorthandOperator"
  // | "PropertyName"
  // | "Comment"
  value: string;
  file: string | null;
  location: CodePoint;
}

export { CodePoint };
export default Token;
