/*
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
*/

function solution(a, b, c) {
	if (a + b > c && a + c > b && b + c > a)
		return "YES";
	return "NO";
}

console.log(solution(6, 7, 11)); // Expected Answer: YES
console.log(solution(4, 5, 10)); // Expected Answer: NO
console.log(solution(6, 10, 15)); // Expected Answer: YES
console.log(solution(2, 3, 5)); // Expected Answer: NO


/*
	## 삼각형을 만들 수 있는 조건
	[ 가장 긴 변의 길이 < 다른 두 변의 길이의 합 ]
*/