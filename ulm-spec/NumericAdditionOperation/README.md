# NumericAdditionOperation

A binary operation that adds two numeric values together.

## Definition

TypeScript:

```ts
interface NumericAdditionOperation {
  type: "NumericAdditionOperation";
  operands: [NumericExpression, NumericExpression];
  presentation?: {
    layout?: "vertical" | "inline"; // default = "inline"
  };
}
```

## Examples

### AST

```yaml
# 1 + 2
type: NumericAdditionOperation
operands:
  - type: RationalNumber
    numerator: 1
  - type: RationalNumber
    numerator: 2
```

```yaml
#   0.1
# + 5.0
type: NumericAdditionOperation
presentation:
  layout: vertical
operands:
  - type: RationalNumber
    numerator: 1
    denominator: 10
  - type: RationalNumber
    numerator: 5
```

### ULMScript

```
+(1, 3)
```

```
NumericAdditionOperation(10, 456)
```
