const ignoreDefaultPackages = array => {
	if (!array) {
		throw new Error('It should be a valid array');
	}
	const itemsToRemove = ['npm', 'yarn', 'npm-global-rm-interactive'];
	return array.filter(item => !itemsToRemove.includes(item));
};

module.exports = ignoreDefaultPackages;
