'use strict';

const tasks = require('./tasks/tasks');

const main = async () => {
	const packages = await tasks.listToRemove();
	await tasks.removeBatch(packages);
};

module.exports = main;
