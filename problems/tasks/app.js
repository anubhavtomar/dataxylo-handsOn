_input = '';

process.stdin.resume();

process.stdin.setEncoding("ascii");

process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
	processData();
});

/*     
-----------------------------------------------------------------------------
PROBLEM 1
-----------------------------------------------------------------------------
*/

function processData () {
	_input = _input.split('\n');
	var len = _input[0];
	for(var i = 0 ; i < len ; i++){
		process.stdout.write(eval(_input[i+1]) + ' \n');
	}
}

/*     
-----------------------------------------------------------------------------
PROBLEM 2
-----------------------------------------------------------------------------
*/

function processData () {
	_input = _input.split('\n');
	var len = _input[0];
	for(var i = 0 ; i < len ; i++){
		process.stdout.write(eval(_input[i+1]) + ' \n');
	}
}

/*     
-----------------------------------------------------------------------------
PROBLEM 3 and 4
-----------------------------------------------------------------------------
*/

String.prototype.XyloHack = function (n) {
	if(n % 2)
		return this.toLowerCase();

	return this.toUpperCase();
};


function add(x, y){
	if(!y){
		return function(y){
			return x + y;
		}
	}
	return x + y;
}

function processData () {
	_input = _input.split('\n');
	var len = _input[0];
	for(var i = 0 ; i < len ; i++){
		process.stdout.write(eval(_input[i+1]) + ' \n');
	}
}