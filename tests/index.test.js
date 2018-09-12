const test = require('ava');
const {ignoreDefaultPackages} = require('../tasks/tasks');

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});

test('Array filtered', async t => {
	const arrayToTest = ['yarn', 'test'];
	const filterDependencies = await ignoreDefaultPackages(arrayToTest);
	t.is(await filterDependencies.toString(), ['test'].toString());
});
