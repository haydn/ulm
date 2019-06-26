interface NumericNotEqualRelation {
  type: "NumericNotEqualRelation";
  operands: [NumericExpression, NumericExpression];
}

interface NumericEqualRelation {
  type: "NumericEqualRelation";
  operands: [NumericExpression, NumericExpression];
}

type NumericRelation = NumericEqualRelation | NumericNotEqualRelation;

interface NumericMultiplicationOperation {
  type: "NumericMultiplicationOperation";
  operands: [NumericExpression, NumericExpression];
}

interface NumericAdditionOperation {
  type: "NumericAdditionOperation";
  operands: [NumericExpression, NumericExpression];
}

type NumericOperation =
  | NumericAdditionOperation
  | NumericMultiplicationOperation;

interface NaturalNumber {
  type: "NaturalNumber";
  value: number;
}

interface WholeNumber {
  type: "WholeNumber";
  value: number;
}

interface IntegerNumber {
  type: "IntegerNumber";
  value: number;
}

interface RationalNumber {
  type: "RationalNumber";
  numerator: number;
  denominator: number;
}

type Number = RationalNumber | IntegerNumber | WholeNumber | NaturalNumber;

type NumericExpression = Number | NumericOperation;

type Expression = NumericExpression | NumericRelation;

type AST = Expression[];

const isNumericRelation = (e: Expression): e is NumericRelation =>
  e.type === "NumericEqualRelation" || e.type === "NumericNotEqualRelation";

const isNumericOperation = (e: Expression): e is NumericOperation =>
  e.type === "NumericAdditionOperation" ||
  e.type === "NumericMultiplicationOperation";

const isNumericExpression = (e: Expression): e is NumericExpression =>
  e.type === "RationalNumber" || isNumericOperation(e);

const isExpression = (e: AST | Expression): e is Expression =>
  e.hasOwnProperty("type");

export {
  Expression,
  RationalNumber,
  IntegerNumber,
  WholeNumber,
  NaturalNumber,
  NumericMultiplicationOperation,
  NumericAdditionOperation,
  NumericNotEqualRelation,
  NumericEqualRelation,
  isExpression,
  isNumericExpression,
  isNumericOperation,
  isNumericRelation
};
export default AST;
