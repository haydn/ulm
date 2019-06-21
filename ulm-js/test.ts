import { strict as assert } from "assert";
import { tokenize } from "./";

// Whitespace & Ignored

assert.deepEqual(tokenize(""), []);

assert.deepEqual(tokenize("\r\n\n\t ,;"), []);

assert.throws(() => {
  tokenize("\r");
});

assert.throws(() => {
  tokenize("\r\t");
});

// Puncuation

assert.deepEqual(tokenize("("), [
  {
    type: "LeftParenthesis",
    value: "(",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize(")"), [
  {
    type: "RightParenthesis",
    value: ")",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("{"), [
  {
    type: "LeftBracket",
    value: "{",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("}"), [
  {
    type: "RightBracket",
    value: "}",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize(":"), [
  {
    type: "Colon",
    value: ":",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

// Numbers

assert.deepEqual(tokenize("0"), [
  {
    type: "RationalNumberLiteral",
    value: "0",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1"), [
  {
    type: "RationalNumberLiteral",
    value: "1",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1234567890"), [
  {
    type: "RationalNumberLiteral",
    value: "1234567890",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1_234_567_890"), [
  {
    type: "RationalNumberLiteral",
    value: "1_234_567_890",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1___0_"), [
  {
    type: "RationalNumberLiteral",
    value: "1___0_",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("0.0"), [
  {
    type: "RationalNumberLiteral",
    value: "0.0",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("0.01"), [
  {
    type: "RationalNumberLiteral",
    value: "0.01",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1.1"), [
  {
    type: "RationalNumberLiteral",
    value: "1.1",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1_0.0_1"), [
  {
    type: "RationalNumberLiteral",
    value: "1_0.0_1",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.throws(() => {
  tokenize("0.");
});

assert.throws(() => {
  tokenize("1.");
});

assert.throws(() => {
  tokenize("_.");
});

assert.throws(() => {
  tokenize(".1");
});

assert.throws(() => {
  tokenize(".0");
});

assert.throws(() => {
  tokenize("._");
});

assert.deepEqual(tokenize("0/1"), [
  {
    type: "RationalNumberLiteral",
    value: "0/1",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("0/123"), [
  {
    type: "RationalNumberLiteral",
    value: "0/123",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("0/1_000"), [
  {
    type: "RationalNumberLiteral",
    value: "0/1_000",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("10/1"), [
  {
    type: "RationalNumberLiteral",
    value: "10/1",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1_2_3_4_/1"), [
  {
    type: "RationalNumberLiteral",
    value: "1_2_3_4_/1",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.throws(() => {
  tokenize("1/0");
});

assert.throws(() => {
  tokenize("1/+1");
});

assert.throws(() => {
  tokenize("1/-1");
});

assert.deepEqual(tokenize("1n"), [
  {
    type: "NaturalNumberLiteral",
    value: "1n",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1234567890n"), [
  {
    type: "NaturalNumberLiteral",
    value: "1234567890n",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1_2__3_n"), [
  {
    type: "NaturalNumberLiteral",
    value: "1_2__3_n",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("0w"), [
  {
    type: "WholeNumberLiteral",
    value: "0w",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1w"), [
  {
    type: "WholeNumberLiteral",
    value: "1w",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1234567890w"), [
  {
    type: "WholeNumberLiteral",
    value: "1234567890w",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1_2__3_w"), [
  {
    type: "WholeNumberLiteral",
    value: "1_2__3_w",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("0i"), [
  {
    type: "IntegerNumberLiteral",
    value: "0i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1i"), [
  {
    type: "IntegerNumberLiteral",
    value: "1i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1234567890i"), [
  {
    type: "IntegerNumberLiteral",
    value: "1234567890i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("1_2__3_i"), [
  {
    type: "IntegerNumberLiteral",
    value: "1_2__3_i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("+0i"), [
  {
    type: "IntegerNumberLiteral",
    value: "+0i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("-0i"), [
  {
    type: "IntegerNumberLiteral",
    value: "-0i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("+1i"), [
  {
    type: "IntegerNumberLiteral",
    value: "+1i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("-1i"), [
  {
    type: "IntegerNumberLiteral",
    value: "-1i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("+9_99_i"), [
  {
    type: "IntegerNumberLiteral",
    value: "+9_99_i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

assert.deepEqual(tokenize("-9_99_i"), [
  {
    type: "IntegerNumberLiteral",
    value: "-9_99_i",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  }
]);

// Combined

assert.deepEqual(tokenize("=(25, +(20n, 5w))"), [
  {
    type: "Operator",
    value: "=",
    file: null,
    location: {
      index: 0,
      column: 1,
      line: 1
    }
  },
  {
    type: "LeftParenthesis",
    value: "(",
    file: null,
    location: {
      index: 1,
      column: 2,
      line: 1
    }
  },
  {
    type: "RationalNumberLiteral",
    value: "25",
    file: null,
    location: {
      index: 2,
      column: 3,
      line: 1
    }
  },
  {
    type: "Operator",
    value: "+",
    file: null,
    location: {
      index: 6,
      column: 7,
      line: 1
    }
  },
  {
    type: "LeftParenthesis",
    value: "(",
    file: null,
    location: {
      index: 7,
      column: 8,
      line: 1
    }
  },
  {
    type: "NaturalNumberLiteral",
    value: "20n",
    file: null,
    location: {
      index: 8,
      column: 9,
      line: 1
    }
  },
  {
    type: "WholeNumberLiteral",
    value: "5w",
    file: null,
    location: {
      index: 13,
      column: 14,
      line: 1
    }
  },
  {
    type: "RightParenthesis",
    value: ")",
    file: null,
    location: {
      index: 15,
      column: 16,
      line: 1
    }
  },
  {
    type: "RightParenthesis",
    value: ")",
    file: null,
    location: {
      index: 16,
      column: 17,
      line: 1
    }
  }
]);
