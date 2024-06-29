#!/usr/bin/env node
/**
 * LocknPic
 * An image encryption tool made on NodeJS cli
 * 
 * @author Richa-9
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const encrypt = require('./utils/encrypt');
const decrypt = require('./utils/decrypt');

const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
	init({ clear });

	input.includes(`help`) && cli.showHelp(0);
	if (flags.encrypt) {
		await encrypt(flags);
	} else if (flags.decrypt) {
		await decrypt(flags);
	}

	const chalk = (await import(`chalk`)).default;

	console.log(
		chalk.bgMagenta(` Give it a star on Gitub: `) +
			chalk.bold(` https://github.com/Richa-9/LocknPic `)
	);
})();
