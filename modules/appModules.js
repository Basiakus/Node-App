var moduleOs = require('os');



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

	exports.pcInformation = pcInformation;
	exports.navigation = navigation;