/*
선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요.
(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

// 첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.

// 선생님이 볼 수 있는 최대학생수를 출력한다.
*/

function solution(n, numbers) {
	let tallest = 0;
	let answer = 0;

	for (let x of numbers)
	{
		if (x > tallest) {
			answer++;
			tallest = x; // 앞을 가리는 가장 큰 아이만 업데이트
		}
	}
	return answer;
}


const numA = 8;
const numbersA = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(numA, numbersA)); // 5

const numB = 10;
const numbersB = [10, 10, 11, 20, 15, 10, 30, 50, 55, 60];
console.log(solution(numB, numbersB)); // 7

const numC = 8;
const numbersC = [130, 130, 130, 130, 130, 130, 130, 130];
console.log(solution(numC, numbersC)); // 1

