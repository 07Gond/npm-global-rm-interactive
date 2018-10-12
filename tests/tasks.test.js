const test = require('ava');
const tasks = require('../tasks/tasks');

test('Array filtered of default packages', t => {
	const arrayToTest = ['yarn', 'test'];
	const filterDependencies = tasks.ignoreDefaultPackages(arrayToTest);
	t.is(filterDependencies.toString(), ['test'].toString());
});

test('Packages to remove empty', async t => {
	const packages = await tasks.getPackagesToRemove();
	t.is(packages.length, 0);
});

test('Array filtered of default package2s', t => {
	const error = t.throws(() => {tasks.ignoreDefaultPackages()});
	t.is(error.message, 'It should be a valid array');
});

test('processList answers input should not be empty', async t => {
	const error = await t.throws(tasks.processList());
	t.is(error.message, `Cannot read property 'length' of undefined`);
});
