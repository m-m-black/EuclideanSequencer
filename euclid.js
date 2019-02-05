inlets = 1;
outlets = 2;

var sequence;
var currentStep = 0;

function generate(a, b, c) {
	sequence = euclid(a, b, c);
	outlet(0, sequence);
}

function step() {
	outlet(1, sequence[currentStep]);
	if (currentStep < sequence.length-1) {
		currentStep++;
	} else {
		currentStep = 0;
	}
}

function reset() {
	currentStep = 0;
}

function euclid(steps, pulses, rotation) {
	var storedRhythm = new Array();
	var bucket = 0;
	
	for (var i = 0; i < steps; i++) {
		bucket += pulses;
		if (bucket >= steps) {
			bucket -= steps;
			storedRhythm.push(1);
		} else {
			storedRhythm.push(0);
		}
	}
	
	return rotate(storedRhythm, rotation + 1);
}

function rotate(seq, rotation) {
	var output = new Array();
	var val = seq.length - rotation;
	
	for (var i = 0; i < seq.length; i++) {
		output.push(seq[Math.abs((i + val) % seq.length )]);
	}
	
	return output;
}