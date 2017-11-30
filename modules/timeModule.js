var nodeModuleOs = require('os');

function changeTime() {

	var sec = nodeModuleOs.uptime();

	//below 3600s
	var hour = Math.floor(sec / 3600);
	var min = Math.floor(sec / 60);
	var second = (sec % 3600) % 60;

	//under 3600s
	var hours = Math.floor(sec / 3600);
	var mins = Math.floor((sec % 3600) / 60);
	var seconds = Math.floor((sec % 3600) % 60);

	if (sec >= 3600) {
		console.log('Aktualny czas działania systemu:');
		console.log('');
		console.log(hours + 'h ' + mins + 'm ' + seconds + 's');
	} else if (sec >= 60) {
		console.log('Aktualny czas działania systemu:');
		console.log('');
		console.log(min + 'm ' + second + 's');
	} else {
		console.log('Aktualny czas działania systemu:');
		console.log('');
		console.log(second + 's ');
	};
};
exports.changeTime = changeTime;