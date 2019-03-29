# Universal Language for Mathematics

Project to define a spec for a univeral [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST) for mathematical expressions.

Something like this:

```yaml
type: root
value:
  type: multiply
  left:
    type: int
    value: 4
  right:
    type: int
    value: 7
```

Which, by default, might be presented like this:

```
4 × 7
```

But we could also layer over some information to explicitly define how it should be presented:

```yaml
type: root
value:
  type: multiply
  style: dot
  left:
    type: int
    value: 4
  right:
    type: int
    value: 7
```

Which might be presented like this:

```
4 • 7
```

Or maybe we'd want to respresnt it as words:

```
four multiplied by seven
```

Or in another language:

```

cuatro multiplicados por siete
```

Or maybe graphically:

```
🦄🦄🦄🦄
🦄🦄🦄🦄
🦄🦄🦄🦄
🦄🦄🦄🦄
🦄🦄🦄🦄
🦄🦄🦄🦄
🦄🦄🦄🦄
```

You get the idea.

A well defined AST means we'd also be able to do transformations (such as evaulating it):

```yaml
type: root
value:
  type: multiply
  style: dot
  left:
    type: int
    value: 4
  right:
    type: int
    value: 7
```

Becomes:

```yaml
type: root
value:
  type: int
  value: 28
```
