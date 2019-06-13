# AdditionOperation

A binary operation that adds two numeric values together.

## Definition

```ts
interface AdditionOperation {
  type: "AdditionOperation";
  operands: [NumericExpression, NumericExpression];
  presentation?: {
    layout?: "vertical" | "inline"; // default = "inline"
  };
}
```

## Examples

```yaml
# 1 + 2
type: AdditionOperation
operands:
  - type: NumericLiteral
    numerator: 1
  - type: NumericLiteral
    numerator: 2
```

```yaml
#   0.1
# + 5.0
type: AdditionOperation
presentation:
  layout: vertical
operands:
  - type: NumericLiteral
    numerator: 1
    denominator: 10
  - type: NumericLiteral
    numerator: 5
```
