ULM.js
------

⚠️ WIP ⚠️

A JavaScript library for working with a ULM AST.

```js
import { toLatex } from "ulm-js";

toLatex({
  type: 'root',
  value: {
    type: 'add',
    left: {
      type: 'int',
      value: 2,
    },
    right: {
      type: 'int',
      value: 3,
    }
  }
});

// 2 + 3
```
