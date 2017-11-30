var nodeModuleOs = require('os');
var colors = require('colors');

var sec = nodeModuleOs.uptime();

function changeTime() {

	//below 3600s
	var hour = Math.floor(sec / 3600);
	var min = Math.floor(sec / 60);
	var second = (sec % 3600) % 60;

	//under 3600s
	var hours = Math.floor(sec / 3600);
	var mins = Math.floor((sec % 3600) / 60);
	var seconds = Math.floor((sec % 3600) % 60);

	if (sec >= 3600) {
		return console.log(hours + 'h ' + mins + 'm ' + seconds + 's');
	} else if (sec >= 60) {
		return console.log(min + 'm ' + second + 's');
	} else {
		return console.log(second + 's ');
	};
};

exports.changeTime = changeTime;