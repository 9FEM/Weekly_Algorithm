/*
팩토리얼

// 문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
정수 n이 n팩토리얼(n!)을 return 하도록 solution 함수를 완성해주세요.

*/

// for문
function solution(n) {
	answer = 1;	
	for(let i = 1; i <= n; i++) {
		answer = answer * i;
	}
	return answer;
}

// 재귀함수
function solution(n) {
	answer = 0;
	if(n < 1) {
		return 1;
	} else {
	return n * solution(n - 1);
	}
}

console.log(solution(5)); // 120
console.log(solution(10)); // 3628800
