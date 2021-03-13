# ULM.js

⚠️ WIP ⚠️

A JavaScript library for working with ULM.

```typescript
import {
  AST,
  Token,
  tokenize,
  parse,
  toLatex,
  compile,
  disambiguate
} from "ulm-js";

const ulm: string = "+(2, 12/3)";
const tokens: Token[] = tokenize(ulm);
const ast: AST = parse(tokens);
const latex: string = toLatex(ast);

// Prints:
// [
//   {
//     type: "Identifier",
//     value: "+",
//     location: {
//       index: 0,
//       line: 1,
//       column: 1
//     }
//   },
//   {
//     type: "LeftParen",
//     value: "(",
//     location: {
//       index: 1,
//       line: 1,
//       column: 2
//     }
//   },
//   {
//     type: "RationalNumberLiteral",
//     value: "2",
//     location: {
//       index: 2,
//       line: 1,
//       column: 3
//     }
//   },
//   {
//     type: "RationalNumberLiteral",
//     value: "12/3",
//     location: {
//       index: 4,
//       line: 1,
//       column: 5
//     }
//   },
//   {
//     type: "RightParen",
//     value: ")",
//     location: {
//       index: 7,
//       line: 1,
//       column: 8
//     }
//   }
// ]
console.log(tokens);

// Prints:
// [
//   {
//     type: "NumericAdditionOperation",
//     operands: [
//       {
//         type: "RationalNumberLiteral",
//         numerator: 2,
//         denominator: 1
//       },
//       {
//         type: "RationalNumberLiteral",
//         numerator: 12,
//         denominator: 3,
//         presentation: {
//           display: "fraction"
//         }
//       }
//     ]
//   }
// ]
console.log(ast);

// Prints: "2 + \frac{12}{3}"
console.log(latex);

// Prints: "2 + \frac{12}{3}"
console.log(toLatex(compile(ulm)));

// Prints:
// [
//   {
//     type: "NumericAdditionOperation",
//     operands: [
//       {
//         type: "RationalNumberLiteral",
//         numerator: 1,
//         denominator: 1
//       },
//       {
//         type: "RationalNumberLiteral",
//         numerator: 2,
//         denominator: 1
//       }
//     ]
//   }
// ]
console.log(disambiguate(compile("AmbiguousAdditionOperation(1,2)")));
```
