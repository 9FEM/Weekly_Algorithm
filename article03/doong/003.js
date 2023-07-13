/*
카펫
https://school.programmers.co.kr/learn/courses/30/lessons/42842


// 문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
*/

function solution(brown, yellow) {
	let answer = [];
	for(let i = 3; i <= (brown + yellow) / i; i++) {
			let x = Math.floor((brown + yellow) / i);
			if((x - 2) * (i - 2) === yellow) {
					answer.push(x);
					answer.push(i);
					break;
			}
	}
	return answer;
}

// 카펫의 가로 세로 최소 길이는 3이란 것을 알 수 있음
// 가로 세로의 합 = (brown / 2) + 2
// x(가로) * y(세로)
// (brown + yellow) / y = x
// (x - 2) * (y - 2) === yellow

let brown1 = 10;
let yellow1 = 2;
console.log(solution(brown1, yellow1)); // [4, 3]

let brown2 = 8;
let yellow2 = 1;
console.log(solution(brown2, yellow2)); // [3, 3]

let brown3 = 24;
let yellow3 = 24;
console.log(solution(brown3, yellow3)); // [8, 6]