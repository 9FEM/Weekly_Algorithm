/*
팩토리얼

// 문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
정수 n이 n팩토리얼(n!)을 return 하도록 solution 함수를 완성해주세요.

*/

// 1. 반복문 이용
function solution(n) {
	let answer = 1;
	while(n >= 1) {
		answer *= n;
		n--;
	}
	return answer;
}

// 2. 재귀함수 이용
function solution(n) {
	function recursive(n) {
		/* 1은 그대로 1 반환 */
		if(n == 1) return 1 
		return n * recursive(n - 1); 
	}
	return recursive(n); //
}

console.log(solution(5)); // 120
console.log(solution(10)); // 3628800
 