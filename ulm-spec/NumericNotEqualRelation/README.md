# NumericNotEqualRelation

Not equal.

## Definition

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
  - type: NumericLiteral
    numerator: 4
  - type: NumericLiteral
    numerator: 25
```

```yaml
# 0.1 + 0.2 <> 0.30000000000000004
type: NumericNotEqualRelation
presentation:
  style: angleBrackets
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
    numerator: 30_000_000_000_000_004
    denominator: 100_000_000_000_000_000
```
