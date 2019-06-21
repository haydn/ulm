# RationalNumber

RationalNumber ::
  - Sign? 0
  - Sign? LeadingDigit Digit*
  - Sign? 0 . TrueDigit Digit*
  - Sign? LeadingDigit Digit* . TrueDigit Digit*
  - Sign? 0 `/` LeadingDigit Digit*
  - Sign? LeadingDigit Digit* `/` LeadingDigit Digit*
