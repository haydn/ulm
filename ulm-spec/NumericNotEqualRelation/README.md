# NumericNotEqualRelation

Not equal.

## Definition

TypeScript:

```ts
interface NumericNotEqualRelation {
  type: "NumericNotEqualRelation";
  operands: [NumericExpression, NumericExpression];
}
```

## Examples

```yaml
# 4 ≠ 25
type: NumericNotEqualRelation
operands:
  - type: RationalNumber
    numerator: 4
  - type: RationalNumber
    numerator: 25
```

```yaml
# 0.1 + 0.2 <> 0.30000000000000004
type: NumericNotEqualRelation
presentation:
  style: angleBrackets
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
    numerator: 30_000_000_000_000_004
    denominator: 100_000_000_000_000_000
```
