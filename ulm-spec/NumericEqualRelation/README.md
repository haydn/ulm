# NumericEqualRelation

Equal.

## Definition

TypeScript:

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
  - type: RationalNumber
    numerator: 4
  - type: RationalNumber
    numerator: 4
```

```yaml
# 0.1 + 0.2 = 0.3
type: NumericEqualRelation
operands:
  - type: NumericAdditionOperation
    operands:
      - type: RationalNumber
        numerator: 1
        denominator: 10
      - type: RationalNumber
        numerator: 2
        denominator: 10
  - type: RationalNumber
    numerator: 3
    denominator: 10
```
