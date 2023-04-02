/*
서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다.

날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
*/

function solution(num, cars) {
	let answer = 0;
	for (let x of cars) {
		if (num == (x % 10))
			answer++;
	}
	console.log(answer);
}

// TEST CODE
const numA = 3;
const carsA = [25, 23, 11, 47, 53, 17, 33];
solution(numA, carsA); // 3

const numB = 0;
const carsB = [12, 20, 54, 30, 87, 91, 30];
solution(numB, carsB); // 3

const numC = 5;
const carsC = [41, 25, 62, 55, 05, 25, 00];
solution(numC, carsC); // 4


/*

for 반복문의 종류

1. for
2. for in
3. for of

*/
