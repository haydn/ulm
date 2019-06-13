# NumericEqualRelation

Equal.

## Definition

```ts
interface NumericEqualRelation = {
  type: "NumericEqualRelation";
  operands: [NumericExpression, NumericExpression];
};
```

## Examples

```yaml
# 4 = 4
type: NumericEqualRelation
operands:
  - type: NumericLiteral
    numerator: 4
  - type: NumericLiteral
    numerator: 4
```

```yaml
# 0.1 + 0.2 = 0.3
type: NumericEqualRelation
operands:
  - type: AdditionOperation
    operands:
      - type: NumericLiteral
        numerator: 1
        denominator: 10
      - type: NumericLiteral
        numerator: 2
        denominator: 10
  - type: NumericLiteral
    numerator: 3
    denominator: 10
```
