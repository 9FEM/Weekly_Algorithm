/*

소수 찾기
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
입출력 예
numbers	return
"17"	3
"011"	2
입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.

--> https://school.programmers.co.kr/learn/courses/30/lessons/42839

*/

let answer = 0;
const storage = [];

function isPrime(num) { // 소수 판단
	if (storage.includes(num) || num < 2)
		return 0;

	for (let i = 2; i <= Math.sqrt(num); i++) {  // 제곱근까지 나눠지는 수 판단 (등호 안 넣고 < 하면 안됩니다.)
		if (num % i == 0)
			return 0;
	}
	storage.push(num);
	return 1;
}

function recursive(num, numbers, len) {
	if (len === 0) {
		if (num == '')
			return ;
		answer += isPrime(parseInt(num));
	}
	else {
		for (let i = 0; i < numbers.length; i++) {
			let newNumbers = numbers.slice();
			for (let j = 0; j < i; j++)
				newNumbers.push(newNumbers.shift());
			let newNum = num + newNumbers.shift();
			recursive(newNum, newNumbers, len - 1);
		}
	}
}

function solution(numbers) {
	const len = numbers.length;
    numbers = numbers.split('');

	for (let i = 1; i <= len; i++)
		numbers.push('');

	recursive('', numbers, len);
	return answer;
}

console.log(solution("011"));  // 2
console.log(solution("17"));  // 3

