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

const ulmScript: string = "+(2, 12/3)";
const tokens: Token[] = tokenize(ulmScript);
const ast: AST = parse(tokens);
const latex: string = toLatex(ast);

// Prints:
// [
//   {
//     type:"NumericAdditionOperation",
//     operands: [
//       {
//         type: "RationalNumberLiteral",
//         numerator: 2n,
//         denominator: 1n
//       },
//       {
//         type: "RationalNumberLiteral",
//         numerator: 12n,
//         denominator: 3n,
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
console.log(toLatex(compile(ulmScript)));

// Prints:
// [
//   {
//     type: "NumericAdditionOperation",
//     operands: [
//       {
//         type: "RationalNumberLiteral",
//         numerator: 1n,
//         denominator: 1n,
//       },
//       {
//         type: "RationalNumberLiteral",
//         numerator: 2n,
//         denominator: 1n,
//       }
//     ]
//   }
// ]
console.log(disambiguate(compile("AmbiguousAdditionOperation(1,2)")));
```
