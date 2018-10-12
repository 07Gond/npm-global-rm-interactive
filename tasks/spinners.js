const ora = require('ora');

const spinerDefaults = {
	spinner: 'dots8'
};

const spinners = {
	globalPackages: () => ora({
		...spinerDefaults,
		text: 'Loading global dependencies'
	}),
	proccessingPackages: () => ora({
		...spinerDefaults,
		text: 'Processing dependencies list'
	}),
	removingPackages: () => ora({
		...spinerDefaults,
		text: 'Removing global packages'
	})
};

module.exports = spinners;
