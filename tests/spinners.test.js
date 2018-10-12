const test = require('ava');

const spinners = require('../tasks/spinners');

test('spinner for globalPackages  should match text', t => {
	t.is(spinners.globalPackages().text, 'Loading global dependencies');
});

test('spinner for proccessingPackages  should match text', t => {
	t.is(spinners.proccessingPackages().text, 'Processing dependencies list');
});

test('spinner for removingPackages should match text', t => {
	t.is(spinners.removingPackages().text, 'Removing global packages');
});
