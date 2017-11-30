var moduleOs = require('os');
var colors = require('colors');


function navigation() {
		console.log('');
		process.stdout.write("PC press: 1 | DETAIL press: 2 | Adam's Module press: 3 | EXIT press: x\n");
};

function pcInformation() {
	var type = moduleOs.type();
	var release = moduleOs.release();
	if(type === 'Darwin') {
		type = 'Masz Mac\'a';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	};
		
	var cpu = moduleOs.cpus()[0].model;
	var time = moduleOs.uptime();
	var user = moduleOs.userInfo(); 
	console.log('System:'.grey, type.white.bgBlack);
	console.log('Release:'.red, release.white.bgBlack);
	console.log('Processor model:'.blue, cpu.white.bgBlack);
	console.log('System uptime:'.green, (time/60).toFixed(0).white.bgBlack, 'min'.white.bgBlack);
	console.log('User name:'.yellow, user.username.white.bgBlack);
	console.log('Home address:', user.homedir.white.bgBlack);
};

exports.pcInformation = pcInformation;
exports.navigation = navigation;