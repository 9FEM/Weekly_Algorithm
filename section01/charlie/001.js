/*
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)
*/

function solution(a, b, c) {
	if (a <= b && a <= c)
		return a;
	else if (b <= a && b <= c)
		return b;
	else
		return c;
}

console.log(solution(6, 5, 11)); // Expected Answer: 5
console.log(solution(1, 100, 50)); // Expected Answer: 1
console.log(solution(5, 5, 10)); // Expected Answer: 5