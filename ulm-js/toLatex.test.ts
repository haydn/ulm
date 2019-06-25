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
              numerator: 12312,
              denominator: 1
            },
            {
              type: "RationalNumber",
              numerator: 33,
              denominator: 100
            }
          ]
        },
        { type: "RationalNumber", numerator: 1, denominator: 4 }
      ]
    },
    {
      type: "RationalNumber",
      numerator: 10,
      denominator: 1
    }
  ]),
  "12312 + \\frac{33}{100} = \\frac{1}{4}\\\\[16pt]10"
);
