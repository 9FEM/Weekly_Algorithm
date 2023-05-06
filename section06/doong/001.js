/*

괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

// 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.

// 출력설명
첫 번째 줄에 YES, NO를 출력한다.

--> Programmers 에서 풀이
 // https://school.programmers.co.kr/learn/courses/30/lessons/12909

*/

function solution(s){
	let stack = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack += 1;
		} else if (s[i] === ')') {
			stack -= 1;
		}
		if (stack < 0) {
			return "No";
		}
	}
	return stack === 0 ? "Yes" : "No";
}


const str1 = "()()"
console.log(solution(str1));

const str2 = ")()("
console.log(solution(str2));

const str3 = "(((()))))"
console.log(solution(str3));