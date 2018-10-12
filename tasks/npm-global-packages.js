const util = require('util');
const exec = util.promisify(require('child_process').exec);

const spinners = require('./spinners');
const ignoreDefaultPackages = require('./ignore-default-packages');

const npmGlobalPackages = async () => {
	const spinnerPckgs = spinners.globalPackages();
	spinnerPckgs.start();

	try {
		const {stdout} = await exec('npm list -g --depth 0 -json');
		const globalDependencies = await Object.keys(JSON.parse(stdout).dependencies);
		const noDefaultInstalledPackages = await ignoreDefaultPackages(globalDependencies);
		spinnerPckgs.succeed('Global dependencies listed');
		return noDefaultInstalledPackages;
	} catch (error) {
		spinnerPckgs.fail('Error with the list proccess');
		throw (error);
	}
};

module.exports = npmGlobalPackages;
