import { strict as assert } from "assert";

import "./tokenize.test";
import "./parse.test";
import "./toLatex.test";

import tokenize from "./tokenize";
import parse from "./parse";
import toLatex from "./toLatex";

// End-to-end test

assert.equal(
  toLatex(
    parse(
      tokenize(
        "NumericEqualRelation(NumericAdditionOperation(12_312, 0.33), 1/4), 10"
      )
    )
  ),
  "12312 + \\frac{33}{100} = \\frac{1}{4}\\\\[16pt]10"
);
