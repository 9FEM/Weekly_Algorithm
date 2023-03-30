/*
연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
*/

function solution(N)
{
	return (Math.ceil(N / 12));
}

console.log(solution(25)); // Expected Answer: 3
console.log(solution(178)); // Expected Answer: 15
console.log(solution(100)); // Expected Answer: 9
console.log(solution(30)); // Expected Answer: 3
console.log(solution(5)); // Expected Answer: 1

/*
	Math.ceil() : 소수점 이하를 올림한다.
	Math.floor() : 소수점 이하를 버림한다.
	Math.round() : 소수점 이하를 반올림한다.
*/