# WholeNumber

WholeNumber ::
  - 0 w
  - LeadingDigit Digit* w

A positive integer or zero. `{ 0, 1, 2, … }`

## Definition

TypeScript:

```ts
type WholeNumber = bigint;
```

## Examples

### ULMScript

```
1w
```
