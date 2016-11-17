const resolvePath = (path, base) => {
	// remove filename
	base = base.match(/.*\//)[0];

	// remove '../' and count it
	let c = 0;
	path = path.replace(/\.\.\//g, () => {
		c += 1;
		return '';
	});

	// remove './'
	if (/\.\//.test(path)) {
		path = path.split('./')[1];
	}

	// resolve '../'
	if (c) {
		while (c-- > 0) {
			base = base.replace(/[^/]+\/$/, '');
		}
	}

	return base + path;
};

export default resolvePath;
