/*
괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

▣ 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다. 

▣ 출력설명
첫 번째 줄에 YES, NO를 출력한다. 
*/

function solution(s) {
  let cnt = 0;
  // s[0]이 이미 ')'이거나 s의 길이가 1이라면 "NO" 반환
  if (s[0] === ')' || s.length === 1) {
    return 'NO';
  }
  for (let x of s) {
    if (x === '(') {
      cnt++;
    } else {
      // 현재 x가 ')'일 때,
      // 이전에 cnt++이 이뤄지지 않았으면
      // (=>앞에 '('가 없었다면) "NO" 반환
      if (cnt === 0) {
        return 'NO';
      }
      cnt--;
    }
  }

  return cnt === 0 ? 'YES' : 'NO';
}

const A = '()()';
const B = '(())()';
const C = ')()(';
const D = '(()(';

console.log(solution(A)); // YES
console.log(solution(B)); // YES
console.log(solution(C)); // NO
console.log(solution(D)); // NO
