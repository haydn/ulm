
```json
{
  "type": "Operator",
  "kind": "AmbiguousEqualRelation",
  "operands": [
    {
      "type": "Operator",
      "kind": "AmbiguousAdditionOperation",
      "operands": [
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        }
      ]
    },
    {
      "type": "Value",
      "kind": "RationalNumberLiteral",
      "numerator": 10,
      "denominator": 1
    }
  ]
}
```

```json
{
  "type": "Operator",
  "kind": "AmbiguousEqualRelation",
  "operands": [
    {
      "type": "Operator",
      "kind": "AmbiguousAdditionOperation",
      "operands": [
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        }
      ],
      "presentation": {
        "color": "red"
      }
    },
    {
      "type": "Value",
      "kind": "RationalNumberLiteral",
      "numerator": 10,
      "denominator": 1
    }
  ]
}
```

```json
{
  "type": "Operator",
  "kind": "AmbiguousEqualRelation",
  "presentation": {
    "display": "base-ten-blocks",
    "color": "green"
  },
  "operands": [
    {
      "type": "Operator",
      "kind": "AmbiguousAdditionOperation",
      "operands": [
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        }
      ],
      "presentation": {
        "color": "red"
      }
    },
    {
      "type": "Value",
      "kind": "RationalNumberLiteral",
      "numerator": 10,
      "denominator": 1
    }
  ]
}
```

```json
{
  "type": "Operator",
  "kind": "AmbiguousMultiplicationOperation",
  "operands": [
    {
      "type": "Value",
      "kind": "MatrixLiteral",
      "operands": [
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 1,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 2,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 3,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 4,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 6,
          "denominator": 1
        }
      ],
      "properties": {
        "width": {
          "type": "Value",
          "kind": "NaturalNumberLiteral",
          "value": 2
        },
        "height": {
          "type": "Value",
          "kind": "NaturalNumberLiteral",
          "value": 3
        }
      }
    },
    {
      "type": "Value",
      "kind": "MatrixLiteral",
      "operands": [
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 6,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 5,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 4,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 3,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 2,
          "denominator": 1
        },
        {
          "type": "Value",
          "kind": "RationalNumberLiteral",
          "numerator": 1,
          "denominator": 1
        }
      ],
      "properties": {
        "width": {
          "type": "Value",
          "kind": "NaturalNumberLiteral",
          "value": 2
        },
        "height": {
          "type": "Value",
          "kind": "NaturalNumberLiteral",
          "value": 3
        }
      }
    }
  ]
}
```

```ulm
AmbiguousEqualRelation( // 5 + 5 = 10
  AmbiguousAdditionOperation( // 5 + 5
    RationalNumber(5i, 1n), // 5
    RationalNumber(5i, 1n) // 5
  ),
  RationalNumber(10i, 1n) // 10
)
```

```json
{
  "type": "Operator",
  "kind": "AmbiguousEqualRelation",
  "operands": [
    {
      "type": "Operator",
      "kind": "AmbiguousAdditionOperation",
      "operands": [
        {
          "type": "Operator",
          "kind": "RationalNumber",
          "operands": [
            {
              "type": "Value",
              "kind": "IntegerNumberLiteral",
              "value": 5
            },
            {
              "type": "Value",
              "kind": "NaturalNumberLiteral",
              "value": 1
            }
          ]
        },
        {
          "type": "Operator",
          "kind": "RationalNumber",
          "operands": [
            {
              "type": "Value",
              "kind": "IntegerNumberLiteral",
              "value": 5
            },
            {
              "type": "Value",
              "kind": "NaturalNumberLiteral",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "type": "Operator",
      "kind": "RationalNumber",
      "operands": [
        {
          "type": "Value",
          "kind": "IntegerNumberLiteral",
          "value": 10
        },
        {
          "type": "Value",
          "kind": "NaturalNumberLiteral",
          "value": 1
        }
      ]
    }
  ]
}
```



```ulm
AmbiguousEqualRelation( // 5 + 5 = 10
  AmbiguousAdditionOperation( // 5 + 5
    RationalNumber(5i, 1n), // 5
    RationalNumber(5i, 1n) // 5
  ),
  RationalNumber(10i, 1n, { color: "red"; style: "graphical"; }) // 10 (coloured red)
)
```