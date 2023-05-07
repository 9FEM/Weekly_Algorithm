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
    let stack = []; // 새로운 배열 생성 
    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length-1] === "(" && s[i] === ")") { // stack의 마지막 요소와 s의 요소가 맞으면 () ==> 올바른 괄호쌍
            stack.pop(); // pop() ==> 빼낸다
        } else {
            stack.push(s[i]); // 처음엔 배열의 항목 추가
        }
    }
	return (!stack.length) // 배열에 아무 것도 없으면 0 (true), 그렇지 않으면 (false)
}

const testA = "()()"
const result1 = true;
console.log(solution(testA));

const testB = ")()(";
const result2 = false;
console.log(solution(testB));

const testC = "))((";
const result3 = false;
console.log(solution(testC));