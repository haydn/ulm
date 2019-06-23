import { strict as assert } from "assert";
import parse from "./parse";
import Token from "./Token";

const tokens: Token[] = [
  {
    type: "OperatorName",
    value: "NumericEqualRelation",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "LeftParenthesis",
    value: "(",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "OperatorName",
    value: "NumericAdditionOperation",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "LeftParenthesis",
    value: "(",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "12312",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "0.33",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RightParenthesis",
    value: ")",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "1/4",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RightParenthesis",
    value: ")",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "0.33",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "1/3",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "-2",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "+23/5",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "5.5_8",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "NaturalNumberLiteral",
    value: "1_3n",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "WholeNumberLiteral",
    value: "3w",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "WholeNumberLiteral",
    value: "0w",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "IntegerNumberLiteral",
    value: "-34i",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "IntegerNumberLiteral",
    value: "2i",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "IntegerNumberLiteral",
    value: "33i",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "1",
    file: null,
    location: {
      index: 0,
      line: 0,
      column: 0
    }
  }
];

assert.deepEqual(parse(tokens), [
  {
    type: "NumericEqualRelation",
    operands: [
      {
        type: "NumericAdditionOperation",
        operands: [
          {
            type: "RationalNumber",
            numerator: BigInt(12312),
            denominator: BigInt(1)
          },
          {
            type: "RationalNumber",
            numerator: BigInt(33),
            denominator: BigInt(100)
          }
        ]
      },
      { type: "RationalNumber", numerator: BigInt(1), denominator: BigInt(4) }
    ]
  },
  { type: "RationalNumber", numerator: BigInt(33), denominator: BigInt(100) },
  { type: "RationalNumber", numerator: BigInt(1), denominator: BigInt(3) },
  { type: "RationalNumber", numerator: BigInt(-2), denominator: BigInt(1) },
  { type: "RationalNumber", numerator: BigInt(23), denominator: BigInt(5) },
  { type: "RationalNumber", numerator: BigInt(558), denominator: BigInt(100) },
  { type: "RationalNumber", numerator: BigInt(13), denominator: BigInt(1) },
  { type: "RationalNumber", numerator: BigInt(3), denominator: BigInt(1) },
  { type: "RationalNumber", numerator: BigInt(0), denominator: BigInt(1) },
  { type: "RationalNumber", numerator: BigInt(-34), denominator: BigInt(1) },
  { type: "RationalNumber", numerator: BigInt(2), denominator: BigInt(1) },
  { type: "RationalNumber", numerator: BigInt(33), denominator: BigInt(1) },
  { type: "RationalNumber", numerator: BigInt(1), denominator: BigInt(1) }
]);
