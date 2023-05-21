/*
큰 수 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/42883

// 문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// 제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
*/

function solution(number, k) {
	// 값을 비교하면서 최댓값을 찾고, 해당 최댓값의 위치부터 다음 비교를 시작하며 반복

	let answer = '';
	let currIndex = 0;

	while (answer.length < number.length - k) {
		let max = 0;
		for (let i = currIndex; i <= k + answer.length; i++) {
			//k + answer.length교 범위를 k만큼 넓어진 범위로 제한
			const num = parseInt(number[i]);
			if (num === 9) {
				// 예외처리 - num을 9까지로 제한
				max = num;
				currIndex = i + 1;
				break;
			}
			if (num > max) {
				max = num;
				currIndex = i + 1;
			}
		}
		answer += max; // max값 answer에 저장
	}
	return answer;
}

console.log(solution('1924', 2)); // 94
console.log(solution('1231234', 3)); // 3234
console.log(solution('4177252841', 4)); // 775841
