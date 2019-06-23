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
    }
  ]
);
