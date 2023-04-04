/*
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
*/

function solution(str) {
	let answer = "";

	for (let x of str) {
		if (answer.indexOf(x) == -1)
			answer += x;
	}

	console.log(answer);
}

const testA = "ksekkset";
solution(testA); // 'kset'

const testB = "aaaaaaaa";
solution(testB); // 'a'

const testC = "hello world";
solution(testC); // 'helo wrd'

/*

1. split 과 join의 반복
-->
{
	let answer = "";
	while(str.length) {
		answer += str[0];
		str = str.split(str[0]).join('');
	}
	console.log(answer);
}

2. indexOf를 활용한 반복

3. 이중 반복문

*/