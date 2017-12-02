var appModules = require('./modules/appModules');
var timeModule = require('./modules/timeModule');
var colors = require('colors');
var nodeModuleOs = require('os');
var sec = nodeModuleOs.uptime();

var event = require('events');
var EventEmitter = event.EventEmitter; // = require('evens').EventEmitter;
var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
	console.log('YOU PRESSED: '.magenta + instruction);
	console.log(' ...SENDING'.magenta);
	console.log('');
});
emitter.on('afterCommand', function() {
	console.log('ACTION FINISHED '.magenta);
	console.log('');
});

process.stdin.setEncoding('utf-8');

console.log("Hi! This app give you some information.");
console.log('');
console.log("PC press: 1 | DETAIL press: 2 | Adam's Module press: 3 | EXIT press: x");
process.stdin.on('readable', function() {
	var someDataFromAdam = process.stdin.read();
	if (someDataFromAdam !== null) {

		var instruction = someDataFromAdam.toString().trim();
		emitter.emit('beforeCommand', instruction); // odpalanie zdarzenia beforeCommand (z parametrem)

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
				process.stdout.write("Czas od rozpoczecia pracy Systemu: ".red);
				console.log(timeModule.changeTime(sec));
				process.stdout.write("\n");
				appModules.navigation();
				break;

			default:
				process.stderr.write("!!! You writing wrong information !!!\n");
				process.stdout.write('\n');
		};
		emitter.emit('afterCommand'); // emitowanie zdarzenia afterCommand (bez parametru)
	}

});