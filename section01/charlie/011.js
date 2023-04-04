/*
한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
*/

function solution(str) {
	let answer = 0;
	let regexp = /[A-Z]/;
	for (let x of str) {
		if (regexp.test(x))
			answer += 1;
	}
	console.log(answer);
}

const testA = "KoreaTimeGood";
solution(testA); // 3

const testB = "Hello World";
solution(testB); // 2

const testC = "I Love YOU,, SO MUCH";
solution(testC); // 11

const testD = "AAAAAA   bbbbbb";
solution(testD); // 6


{
	let aa = 10;
	console.log(aa);
}
console.log(aa);

/*

처음 생각한 것은 1번

1. 모두 대문자로 바꾼 후, 같은 문자가 몇개인지 count하는 방법

let upperSTR = str.toUpperCase();
for () {
	upperStr 과 str 비교
}
:: 단순반복이면 주어진 문자열에 ' ' 공백 혹은 ','등의 알파벳이 아닌 문자가 있을 경우 체크하지 못함.
--> 우선 해당 순서 문자가 알파벳인지 확인 필요
--> 알파벳인지 확인하는데 정규식 사용
--> 2번 풀이가 better


2. 정규식 사용

*/