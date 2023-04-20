/*

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 줄에 압축된 문자열을 출력한다.

*/

// While
function solution1(str) {
  let answer = '';
  let i = 0;

  while (i < str.length) {
    let j = i + 1;
    while (j < str.length && str[i] === str[j]) {
      j++;
    }
    if (i === j - 1) {
      answer += str[i];
    } else {
      answer += str[i] + (j - i);
    }
    i = j;
  }

  return answer;
}

const testA = 'KKHSSSSSSSE';
console.log(solution1(testA)); // K2HS7E

const testB = 'KKKKKKKKKKKK9';
console.log(solution1(testB)); // K129

const testC = 'AABBAABBAA';
console.log(solution1(testC)); // A2B2A2B2A2
