#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk').default;
const fs = require('fs');
const path = require('path');

const lines = [
	`${chalk.white.bold('Simon Golms')} / ${chalk.hex('#0094C6')('@simongolms')}`,
	`${chalk.hex('#d4d4d4')('App & Website Developer')}`,
	'',
	`${chalk.white.bold('Web')}        ${chalk.hex('#0094C6').underline('https://gol.ms')}`,
	`${chalk.white.bold('GitHub')}     ${chalk.hex('#0094C6').underline('https://github.com/simongolms')}`,
	`${chalk.white.bold('LinkedIn')}   ${chalk.hex('#0094C6').underline('https://linkedin.com/in/simongolms/')}`
];

const output = boxen(lines.join('\n'), {
	backgroundColor: '#141414',
	borderColor: '#d4d4d4',
	borderStyle: 'single',
	margin: 1,
	padding: 1
});

fs.writeFileSync(path.join(__dirname, 'bin/output'), output);
