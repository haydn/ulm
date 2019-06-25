import { strict as assert } from "assert";
import compile from "./compile";

assert.deepEqual(
  compile("NumericEqualRelation(NumericAdditionOperation(12312, 0.33), 1/4)"),
  [
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
    }
  ]
);
