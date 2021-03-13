# Tokens

## Separator

Separator :: SeparatorChar+

## Reserved

Reserved ::
  - `TRUE`
  - `FALSE`

## Punctuation

LeftParen :: (
RightParen :: )
LeftCurly :: {
RightCurly :: }
Colon :: :

## NaturalNumberLiteral

NaturalNumberLiteral :: LeadingDigit Digit* `n`

A positive integer (`1`, `2`, `3` etc).

An natural number literal must always have an `n` suffix:

```example
1n
```

```example
34n
```

Underscores may be used to make large numbers easier to read:

```example
6_935n
```

Zero is not a natural number:

```counter-example
0n
```

Natural number literals cannot have leading underscores:

```counter-example
_42n
```

## IntegerNumberLiteral

IntegerNumberLiteral ::
  - Sign? 0 `i`
  - Sign? LeadingDigit Digit* `i`

An integer number literal must always have an `i` suffix:

```example
0i
```

```example
52i
```

```example
500i
```

Underscores may be used to make large numbers easier to read:

```example
5_000i
```

A `+` or `-` sign can be optionally preffixed:

```example
+14i
```

```example
-6i
```

The `i` suffix must be included:

```counter-example
-2
```

Integer number literals cannot have leading zeros or underscores:

```counter-example
042i
```

```counter-example
-042i
```

```counter-example
_42i
```

## RationalNumberLiteral

RationalNumberLiteral ::
  - Sign? `0`
  - Sign? LeadingDigit Digit*
  - Sign? `0` `.` TrueDigit Digit*
  - Sign? LeadingDigit Digit* `.` TrueDigit Digit*
  - Sign? `0` `/` LeadingDigit Digit*
  - Sign? LeadingDigit Digit* `/` LeadingDigit Digit*

```ulm example
0
```

```ulm example
12
```

```ulm example
0.4
```

```ulm example
0.50
```

```ulm example
40.145
```

```ulm example
5_542.1_11
```

```ulm example
0/1
```

```ulm counter-example
1/0
```

```ulm example
0/1_000
```

```ulm example
1/1
```

```ulm example
1_243/1000
```

```ulm example
-0
```

```ulm example
-12
```

```ulm example
-0.4
```

```ulm example
-0.50
```

```ulm example
-40.145
```

```ulm example
-5_542.1_11
```

```ulm example
-0/1
```

```ulm example
-0/1_000
```

```ulm example
-1/1
```

```ulm example
-1_243/1000
```

```ulm example
+0
```

```ulm example
+12
```

```ulm example
+0.4
```

```ulm example
+0.50
```

```ulm example
+40.145
```

```ulm example
+5_542.1_11
```

```ulm example
+0/1
```

```ulm example
+0/1_000
```

```ulm example
+1/1
```

```ulm example
+1_243/1000
```

## StringLiteral

StringLiteral :: `"` StringChar* `"`

```ulm example
"This is a string. 🚀"
```

```ulm example
"A \"quote\" in a string."
```

## Identifier

Identifier ::
  - Sign
  - Sign Sign IdentifierChar*
  - Sign? LeadingIdentifierChar IdentifierChar* but not Reserved

Note: The `TRUE` and `FALSE` identifiers are not currently used in the language,
but have been reserved to represent boolean literals in the future.

```ulm example
+
```

```ulm example
++
```

```ulm example
++
```

```ulm example
^
```

```ulm example
**
```

```ulm example
atan2
```

```ulm example
PascalCase
```

```ulm example
snake_case
```

```ulm example
-kebab-case-
```

```ulm example
__this_is_valid!__
```

This is not a comment because there is no separator between `foo` and `//`:

```ulm example
foo//bar
```

## Comment

Comment :: // CommentChar*

```example
// This is a comment! 😃
```

This is invaild because there's no space between the `a` and the first `/`:

```counter-example
a// A comment?
```
