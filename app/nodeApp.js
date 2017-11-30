var appModules = require('../modules/appModules');
var timeModule = require('../modules/timeModule')

process.stdin.setEncoding('utf-8');

console.log("Hi! This app give you some information.");
console.log('');
console.log("PC press: 1 | DETAIL press: 2 | Adam's Module press: 3 | EXIT press: x");
process.stdin.on('readable', function() {
	var someDataFromAdam = process.stdin.read();
	if (someDataFromAdam !== null) {
		var instruction = someDataFromAdam.toString().trim();
		switch (instruction) {

			case '2':
				console.log(process.env);
				appModules.navigation();
				break;

			case 'x':
				process.stdout.write("...turning off the program!\n");
				process.exit();
				break;

			case '1': 
				appModules.pcInformation();
				appModules.navigation();
				break;

			case '3':
				timeModule.changeTime();
				appModules.navigation();
				break;
				
			default:
				process.stderr.write("!!! You writing wrong information !!!\n");
				process.stdout.write('\n');
		};
	};

	// code below is in appModule.js as separate file

	/*
	function navigation() {
		console.log('');
		process.stdout.write("PC press: 1 | DETAIL press: 2 | EXIT press: 3\n");
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
		console.log('System:', type);
		console.log('Release:', release);
		console.log('Processor model:', cpu);
		console.log('System uptime:', (time/60).toFixed(0), 'min');
		console.log('User name:', user.username);
		console.log('Home address:', user.homedir);
	};
	*/
});