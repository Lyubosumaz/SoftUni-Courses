function solve() {
	// let input = document.getElementById("input").value;
	// let result = document.getElementById("resultOutput");
	// let number = getSum(input);

	// function getSum(input) {
	// 	let sumAllCh = 0;
	// 	let result = input;
	// 	while (result.length > 1) {
	// 		for (let i = 0; i < result.length; i++) {
	// 			let chValue = Number(result[i]);
	// 			sumAllCh += chValue;
	// 		}
	// 		result = sumAllCh.toString();
	// 		sumAllCh = 0;
	// 	}
	// 	return Number(result);
	// }
	// let cutInput = input.substring(number, input.length - number);
	// function convertBinaryInChar(binary) {
	// 	let decimal = parseInt(binary, 2);
	// 	let char = String.fromCharCode(decimal);
	// 	return char;
	// }
	// let output = cutInput.split(/([\d]{8})/g)
	// 	.filter(el => el !== "")
	// 	.map(el => convertBinaryInChar(el))
	// 	.filter(el => /[a-zA-Z ]+/g.test(el))
	// 	.join("");
	// result.textContent = output;

	let input = document.getElementById("input").value;

	let sumAllOnes = 0;
	for (let i = 0; i < input.length; i++) {
		const chValue = Number(input[i]);
		if (chValue === 1) {
			sumAllOnes += chValue;
		}
	}
	let number = 0;
	let parts = sumAllOnes.toString().split('');
	for (let i = 0; i < parts.length; i++) {
		number += Number(parts[i]);
	}
	while (number > 10) {
		let partsNumber = number.toString().split('');
		number = 0;
		for (let i = 0; i < partsNumber.length; i++) {
			number += Number(partsNumber[i]);
		}
	}
	let cutInput = input.substring(number, input.length - number);
	let arr = [];
	for (let i = 0; i < cutInput.length; i++) {
		const eightBits = cutInput.substring(0, 8);
		cutInput = cutInput.substring(8);
		arr.push(eightBits);
		if (cutInput.length === 8) {
			arr.push(cutInput);
		}
	}

	let output = "";
	for (let i = 0; i < arr.length; i++) {
		let convertValue = parseInt(arr[i], 2);
		if ((convertValue >= 65 && convertValue <= 90) || (convertValue >= 97 && convertValue <= 122) || convertValue === 32) {
			output += String.fromCharCode(convertValue);
		}
	}
	document.getElementById("resultOutput").textContent = output;
	// let p = document.createElement("p");
	// p.innerHTML = output;
	// result.appendChild(p);
}