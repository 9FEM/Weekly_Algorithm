/*
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
// 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

// 입력된 순서대로 등수를 출력한다.

*/

function solution(n, scores) {
	const answer = [];
	let rank = scores.slice();
	rank.sort((a,b) => (b - a));

	for (const x of scores) {
		answer.push(rank.indexOf(x) + 1);
	}

	return answer;
}


const numA = 5;
const scoreA = [87, 89, 92, 100, 76];
console.log(solution(numA, scoreA)); // [4, 3, 2, 1, 5]

const numB = 10;
const scoreB = [100, 100, 100, 60, 80, 80, 60, 10, 20, 30];
console.log(solution(numB, scoreB)); // [1, 1, 1, 6, 4, 4, 6, 10, 9, 8]

const numC = 8;
const scoreC = [10, 10, 20, 20, 30, 30, 50, 60];
console.log(solution(numC, scoreC)); // [7, 7, 5, 5, 3, 3, 2, 1]


/*

Array.prototype.indexOf()
: indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

첫 번째 인덱스 인점 확인 및 활용.

*/