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
PROBLEM 1 (Uncomment the code below to run the solution)
-----------------------------------------------------------------------------
*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function processData () {
	_input = _input.split('\n');
	var len = _input.length , fileName = _input[0].split('.')[0] , 
		ext = _input[0].split('.')[1] , fileContent = [] , readingFileContent = true;
	console.log(_input);
	for(var i = 1 ; i < len ; i++){
		if(readingFileContent){
			if(_input[i] == '' && _input[i+2] == ''){
				if(i+2 == len-1)
					break;
				readingFileContent = false;
			}
			else {
				_input[i] = _input[i].replace(/[$]/g, '');
				fileContent.push(_input[i]);
			}
		}
		else if(_input[i]){
			fileName += capitalizeFirstLetter(_input[i].split('.')[0]);
			readingFileContent = true;
		}
	}		
	process.stdout.write(fileName + '.' + ext + ' \n');
	len = fileContent.length
	for(var i = 0 ; i < len ; i++)
		process.stdout.write(fileContent[i] + ' \n');
}

/*     
-----------------------------------------------------------------------------
PROBLEM 2 (Uncomment the code below to run solution)
-----------------------------------------------------------------------------
*/

// function getCardType(number) {
// 	var visaRegex = new RegExp('^4[0-9]{0,}$');
// 	var masterRegex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$');
// 	var discoverRegex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
// 	var amExRegex = new RegExp('^3[47][0-9]{0,}$');
// 	number = number.replace(/ /g ,"");

// 	if(amExRegex.test(number))
// 		return 'American Express';
// 	else if(visaRegex.test(number))
// 		return 'Visa';
// 	else if(masterRegex.test(number))
// 		return 'Mastercard';
// 	else if(discoverRegex.test(number))
// 		return 'Discover';
// 	else
// 		return 'Invalid';
// }

// function processData () {
// 	_input = _input.split('\n');
// 	var len = _input[0];
// 	for(var i = 0 ; i < len ; i++){
// 		process.stdout.write(getCardType(_input[i+1]+'') + ' \n');
// 	}
// }

/*     
-----------------------------------------------------------------------------
PROBLEM 3 and 4 (Uncomment the code below to run both the problems)
-----------------------------------------------------------------------------
*/

// String.prototype.XyloHack = function (n) {
// 	if(n % 2)
// 		return this.toLowerCase();

// 	return this.toUpperCase();
// };


// function add(x, y){
// 	if(!y){
// 		return function(y){
// 			return x + y;
// 		}
// 	}
// 	return x + y;
// }

// function processData () {
// 	_input = _input.split('\n');
// 	var len = _input[0];
// 	for(var i = 0 ; i < len ; i++){
// 		process.stdout.write(eval(_input[i+1]) + ' \n');
// 	}
// }