/*
	N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

	// 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

	// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
*/

function solution(n, numbers) {

}


const numA = 6;
const numbersA = [7, 3, 9, 5, 6, 12];
console.log(solution(numA, numbersA)); // [7, 9, 6, 12]

const numB = 10;
const numbersB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(numB, numbersB)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numC = 1;
const numbersC = [100];
console.log(solution(numC, numbersC)); // [100]