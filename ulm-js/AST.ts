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

type NaturalNumber = number;

type IntegerNumber = number;

interface RationalNumber {
  type: "RationalNumber";
  numerator: IntegerNumber;
  denominator: NaturalNumber;
}

type NumericExpression = RationalNumber | NumericOperation;

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
  isExpression,
  isNumericExpression,
  isNumericOperation,
  isNumericRelation
};
export default AST;
