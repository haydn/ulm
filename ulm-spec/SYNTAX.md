# Syntax

## Ignored

Ignored :
  - Comment
  - Separator

Comment:

```ulm example
// Hello, this is a comment.
```

Separator:

```ulm example
,
  ;
```

## Value

Value :
  - NaturalNumberLiteral
  - IntegerNumberLiteral
  - RationalNumberLiteral
  - StringLiteral

```ulm example
5n
```

```ulm example
-48i
```

```ulm example
-48/7
```

```ulm example
0.53
```

```ulm example
"Hello"
```

## NamedValue

NamedValue : Identifier Ignored* Colon Ignored* Value

NamedValue_list :
  - NamedValue_list Ignored* NamedValue
  - NamedValue

```ulm example
foo:5n
```

```ulm example
foo : 5n
```

## Operand

Operand :
  - Value
  - Expression

Operand_list :
  - Operand_list Ignored* Operand
  - Operand

```ulm example
5n
```

```ulm example
foo()
```

## PresentationRule

PresentationRule : LeftCurly Ignored* NamedValue_list? Ignored* RightCurly

```ulm example
{ color: "red" }
```

```ulm example
{ color: "red"; number-format: "fraction"; }
```

## Expression

ExpressionArgs : Operand_list? Ignored* NamedValue_list? Ignored* PresentationRule?

Expression : Identifier Ignored* LeftParen Ignored* ExpressionArgs Ignored* RightParen

```ulm example
foo()
```

```ulm example
foo(bar())
```

```ulm example
foo(bar() abc:"xyz")
```

```ulm example
foo(bar() abc:"xyz" {color:"red"})
```

```ulm example
foo ( bar() abc:"xyz" {color:"red"} )
```

```ulm example
foo(1, 2, a: 1, b: 2, { color: "red" })
```

```ulm example
foo(1, a: 1, { color: "red" })
```

```ulm example
foo(a: 1, { color: "red" })
```

```ulm example
foo({ color: "red" })
```

## Selection

???

## Document

DocPart :
  - Expression
  - Ignored

Document :
  - Document DocPart
  - DocPart

```ulm example
// Foo
foo()

// Bar
bar()
```
