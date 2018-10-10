'use strict';

const tasks = require('./tasks/tasks');

const main = async () => {
	const packages = await tasks.getPackagesToRemove();
	await tasks.processList(packages);
};

module.exports = main;
