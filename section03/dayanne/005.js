/*

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 줄에 압축된 문자열을 출력한다.

*/

// 정규표현식과 While
function solution(str) {
  let answer = '';
  let copyStr = str.slice();
  let i = 0;

  while (i < copyStr.length) {
    const reg = new RegExp(str[i], 'g');
    const count = copyStr.match(reg).length;
    if (count > 1) {
      answer += str[i] + count;
      i += count;
    } else {
      answer += str[i];
      i++;
    }
  }
  return answer;
}

const testA = 'KKHSSSSSSSE';
console.log(solution(testA)); // K2HS7E

const testB = 'KKKKKKKKKKKK9';
console.log(solution(testB)); // K129

const testC = 'ABCDEFG';
console.log(solution(testC)); // ABCDEFG
