const test = require('ava');

const tasks = require('../tasks/tasks');

test('processList answers input should not be empty', async t => {
	const error = await t.throws(tasks.processList());
	t.is(error.message, 'Cannot read property \'length\' of undefined');
});
