
var moduleOs = require('os');
process.stdin.setEncoding('utf-8');

console.log("Hi! This app give you some information.");
console.log('');
console.log("PC press: 1 | DETAIL press: 2 | EXIT press: 3");
process.stdin.on('readable', function() {
	var someDataFromAdam = process.stdin.read();
	if (someDataFromAdam !== null) {
		var instruction = someDataFromAdam.toString().trim();
		switch (instruction) {
			case '2':
				console.log(process.env);
				navigation();
				break;
			case '3':
				process.stdout.write("...turning off the program!\n");
				process.exit();
				break;


			case '1': 
				pcInformation();
				navigation();
				break;
				
			default:
				process.stderr.write("!!! You writing wrong information !!!\n");
				process.stderr.write('\n');
		};
	};
	



	function navigation() {
		console.log('\n');
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
});