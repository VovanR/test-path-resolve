const foo = {
	bar: 3,
	baz: () => new Promise(resolve => setTimeout(resolve, 100)),
	_qux: a => {
		if (a) {
			return 'quux';
		}
		return 'qux';
	}
};

export default foo;
