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

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      answer += 1;
    } // 왼괄호과 나오면 = 1, 오른괄호 나오면 = 0
    else {
      answer -= 1;
    }

    if (answer < 0) {
      // break 넣어주기
      break;
    }
  }

  return answer === 0 ? true : false; // 0이나오면 () 완성, 다른 값이면 false
}

console.log(solution('()()')); // t
console.log(solution('(())()')); // t
console.log(solution(')()(')); // f
console.log(solution('(()(')); // f
