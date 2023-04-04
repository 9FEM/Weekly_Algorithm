/*
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
*/

function solution(str) {
	let answer = "";
	const upperStr = str.toUpperCase();
	const lowerStr = str.toLowerCase();

	for (let i = 0; i < str.length; i++) {
		if (str[i] == upperStr[i])
			answer += lowerStr[i];
		else
			answer += upperStr[i];
	}

	console.log(answer);
}

const testA = "StuDY";
solution(testA); // sTUdy

const testB = "Hello World";
solution(testB); // hELLO wORLD

const testC = "MY name IS charlie";
solution(testC); // my NAME is CHARLIE
