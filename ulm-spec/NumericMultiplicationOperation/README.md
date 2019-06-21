# NumericMultiplicationOperation

A binary operation that multiplies two numeric values together.

## Definition

TypeScript:

```ts
interface NumericMultiplicationOperation {
  type: "NumericMultiplicationOperation";
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
type: NumericMultiplicationOperation
presentation:
  style: dot
operands:
  - type: RationalNumber
    numerator: 4
  - type: RationalNumber
    numerator: 7
```

```yaml
# 4 × 7
type: NumericMultiplicationOperation
operands:
  - type: RationalNumber
    numerator: 9999
    denominator: 100
  - type: RationalNumber
    numerator: 7
```

```yaml
# 0.1 • 5
type: NumericMultiplicationOperation
presentation:
  style: dot
operands:
  - type: RationalNumber
    numerator: 1
    denominator: 10
  - type: RationalNumber
    numerator: 5
```
