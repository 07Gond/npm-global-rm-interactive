const test = require('ava');

const ignoreDefaultPackages = require('../tasks/ignore-default-packages');

test('Array filtered should not have an empty input property', t => {
	const error = t.throws(() => {
		ignoreDefaultPackages();
	});
	t.is(error.message, 'It should be a valid array');
});

test('Array filtered of default packages', t => {
	const arrayToTest = ['yarn', 'test'];
	const filterDependencies = ignoreDefaultPackages(arrayToTest);
	t.is(filterDependencies.toString(), ['test'].toString());
});
