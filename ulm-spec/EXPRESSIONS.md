# Expressions

## Group

A group has no semantic meaning, but can be used to apply presentation rules to
expressions or values.

```ulm example
Group(25, +(1, 16))
```

```ulm example
g(25, +(1, 16), { color: "red" })
```

## AmbiguousSymbol

```ulm example
AmbiguousSymbol("x")
```

```ulm example
$("x")
```

```ulm example
=($("x"), 25) // x = 25
```

## AmbiguousPlaceholder

```ulm example
AmbiguousPlaceholder()
```

```ulm example
?({ color: "red" })
```

## AmbiguousAdditionOperation

```ulm example
AmbiguousAdditionOperation(11, 31)
```

```ulm example
+(5, 5, { color: "red" })
```

## AmbiguousSubtractionOperation

## AmbiguousMultiplicationOperation

## AmbiguousDivisionOperation

## AmbiguousEqualRelation

## AmbiguousNotEqualRelation

## NumericAdditionOperation

## NumericSubtractionOperation

## NumericMultiplicationOperation

## NumericDivisionOperation

## NumericEqualRelation

## NumericNotEqualRelation
