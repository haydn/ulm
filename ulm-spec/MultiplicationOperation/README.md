# MultiplicationOperation

A binary operation that multiplies two numeric values together.

## Definition

```ts
interface MultiplicationOperation {
  type: "MultiplicationOperation";
  operands: [NumericExpression, NumericExpression];
  presentation?: {
    style?: "dot" | "times"; // default = "times"
    layout?: "vertical" | "inline"; // default = "inline"
  };
}
```

## Examples

```yaml
# 4 × 7
type: MultiplicationOperation
presentation:
  style: dot
operands:
  - type: NumericLiteral
    numerator: 4
  - type: NumericLiteral
    numerator: 7
```

```yaml
# 4 × 7
type: MultiplicationOperation
operands:
  - type: NumericLiteral
    numerator: 9999
    denominator: 100
  - type: NumericLiteral
    numerator: 7
```

```yaml
# 0.1 • 5
type: MultiplicationOperation
presentation:
  style: dot
operands:
  - type: NumericLiteral
    numerator: 1
    denominator: 10
  - type: NumericLiteral
    numerator: 5
```
