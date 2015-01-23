// Tests aren't comprehensive because most functions are trivial

var op = require('./lib');
var tape = require('tape');

tape('simple operators', function(t) {
	t.equal([1,2,3].reduce(op['+']), 6, "+");
	t.equal(op['-'](3), -3, "unary -");
	t.equal(op['-'](3,4), -1, "binary -");
	t.end();
});

tape('weird operators', function(t) {
	t.equal(op['in']('a', {a:1}), true, "in");
	t.equal(op['in']('b', {a:1}), false, "in");

	t.equal(op['instanceof']([], Array), true, "instanceof");
	t.equal(op['instanceof']([], Date), false, "instanceof");

	t.equal(op['void'](0), undefined, "void");

	t.equal(op[','](1,2), 2, ",");

	t.end();
});
