/*
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
*/

function solution(N) {
	let answer = 0;
	if (N % 2 == 1) {
		answer += N;
		N -= 1;
	}

	answer += (parseInt(N / 2) * (N + 1));
	return answer;
}

// TEST CODE
console.log(solution(6)); //Expected Answer: 21
console.log(solution(10)); //Expected Answer: 55
console.log(solution(11)); //Expected Answer: 66
console.log(solution(19)); //Expected Answer: 190


/*
단순 반복문으로 1부터 천천히 더할 수 있다.

하지만 만약 Input이 20 이하의 자연수가 아니라
2147483647 이하의 자연수라면?

물론 실제로 그런 문제를 만났을때 고민해도 늦지 않다.
*/