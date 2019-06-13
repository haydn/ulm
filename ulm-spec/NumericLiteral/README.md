# NumericLiteral

A number.

TODO: Discreet types for natural, whole, integer, rational etc and unions to represent sets? Are there use cases where it's important?

TODO: How should negative numbers be handled?

TODO: Handle truncating or rounding in presentation?

## Definition

```ts
interface NumericLiteral {
  type: "NumericLiteral";
  numerator: wholeNumber;
  denominator?: naturalNumber; // default = 1
  presentation?: {
    style?: "number" | "fraction"; // default = "number"
    base?: naturalNumber; // default = 10
    precision?: wholeNumber | null; // default = null
  };
}
```

## Examples

```yaml
# 10
type: NumericLiteral
numerator: 10
```

```yaml
# 0.5
type: NumericLiteral
numerator: 1
denominator: 2
```

```yaml
# 0xff
type: NumericLiteral
numerator: 255
denominator: 1
presentation:
  base: 16
```

```yaml
# 0.33
type: NumericLiteral
numerator: 1
denominator: 3
presentation:
  precision: 2
```

```yaml
# ¼
type: NumericLiteral
numerator: 1
denominator: 4
presentation:
  style: fraction
```
