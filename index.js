/**
 * @param {string} path
 * @param {string} base
 *
 * @returns {string}
 */
const resolvePath = (path, base) => {
	// Remove filename
	base = base.match(/.*\//)[0];

	// Remove '../' and count it
	let c = 0;
	path = path.replace(/\.\.\//g, () => {
		c += 1;
		return '';
	});

	// Remove './'
	if (/\.\//.test(path)) {
		path = path.split('./')[1];
	}

	// Resolve '../'
	if (c) {
		while (c-- > 0) {
			base = base.replace(/[^/]+\/$/, '');
		}
	}

	return base + path;
};

export default resolvePath;
