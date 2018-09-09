#!/usr/bin/env node

'use strict';

const main = require('../index');

main()
	.catch((error) => {
		console.error(Error(error));
	});
