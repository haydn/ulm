import { strict as assert } from "assert";
import toLatex from "./toLatex";

assert.equal(
  toLatex([
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
    {
      type: "RationalNumber",
      numerator: BigInt(10),
      denominator: BigInt(1)
    }
  ]),
  "12312 + \\frac{33}{100} = \\frac{1}{4}\\\\[16pt]10"
);
