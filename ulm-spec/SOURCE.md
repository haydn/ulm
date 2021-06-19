# Source

SourceChar ::: /[\u0009\u000A\u000D\u0020-\uFFFF]/

UnicodeBOM ::: "Byte Order Mark (U+FEFF)"

WhiteSpace :::
  - "Horizontal Tab (U+0009)"
  - "Space (U+0020)"

LineTerminator :::
  - "New Line (U+000A)"
  - "Carriage Return (U+000D)" [ lookahead ! "New Line (U+000A)" ]
  - "Carriage Return (U+000D)" "New Line (U+000A)"

SeparatorChar :::
  - UnicodeBOM
  - WhiteSpace
  - LineTerminator
  - ,
  - ;

Sign ::: one of - +

Digit ::: one of 0 1 2 3 4 5 6 7 8 9 _

TrueDigit ::: Digit but not _

LeadingDigit ::: TrueDigit but not 0

IdentifierChar ::: SourceChar but not one of LineTerminator, SeparatorChar, :, {, }, (, ), [, ]

Note: Square brackets (`[` and `]`) are not currently used in the language, but have
been reserved to represent lists in the future.

LeadingIdentifierChar ::: IdentifierChar but not TrueDigit or Sign

EscapedUnicode ::: /[0-9A-Fa-f]{4}/

EscapedChar ::: one of `"` \ `/` b f n r t

StringChar :::
  - SourceChar but not `"` or \ or LineTerminator
  - \u EscapedUnicode
  - \ EscapedChar

CommentChar ::: SourceChar but not LineTerminator
