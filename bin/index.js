#!/usr/bin/env node

'use strict';

const main = require('..');

main()
	.catch(error => {
		console.error(new Error(error));
	});
