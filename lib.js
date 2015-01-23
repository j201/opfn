module.exports = {
	'+': function(x, y) {
		return x + y;
	},
	'-': function(x, y) {
		// Have to deal with case of unary -
		return arguments.length === 1 ?
			-x :
			x - y;
	},
	'*': function(x, y) {
		return x * y;
	},
	'/': function(x, y) {
		return x / y;
	},
	'&': function(x, y) {
		return x & y;
	},
	'|': function(x, y) {
		return x | y;
	},
	'&&': function(x, y) {
		return x && y;
	},
	'||': function(x, y) {
		return x || y;
	},
	'^': function(x, y) {
		return x ^ y;
	},
	'%': function(x, y) {
		return x % y;
	},
	'==': function(x, y) {
		return x == y;
	},
	'===': function(x, y) {
		return x === y;
	},
	'!=': function(x, y) {
		return x != y;
	},
	'!==': function(x, y) {
		return x !== y;
	},
	'>': function(x, y) {
		return x > y;
	},
	'>=': function(x, y) {
		return x >= y;
	},
	'<': function(x, y) {
		return x < y;
	},
	'<=': function(x, y) {
		return x <= y;
	},
	'>>': function(x, y) {
		return x >> y;
	},
	'>>>': function(x, y) {
		return x >>> y;
	},
	'<<': function(x, y) {
		return x << y;
	},
	'in': function(x, y) {
		return x in y;
	},
	'instanceof': function(x, y) {
		return x instanceof y;
	},
	',': function(x, y) {
		return x , y;
	},
	'!': function(x) {
		return !x;
	},
	'~': function(x) {
		return ~x;
	},
	'void': function(x) {
		return void x;
	},
	'[]': function(x, y) {
		return x[y];
	}
};
