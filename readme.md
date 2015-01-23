#opfn

JS operators as functions with their original names (e.g., `opfn['+']`). This is useful for use with higher order functions.

All unary and binary operators that don't mutate their operands are supported. No functions are variadic except for `opfn['-']`, which has a unary and a binary form.

###Example

```
var op = require('opfn');

[1, 2, 3].reduce(op['+']); // 6

[true, false, 'bingo!'].map(op['!']); // [false, true, false]
```

©2015 j201. Released under the [MIT licence](http://opensource.org/licenses/MIT).
