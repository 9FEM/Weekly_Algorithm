/*

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략합니다.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 줄에 압축된 문자열을 출력한다.

*/

function solution(str) {
  let answer = "";
  let count = 1; // 1부터 세봅시다

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++; // i번째와 i옆번째가 같다면 count 증가
    } else {
      // 현재 문자랑 다음 문자가 다르면은 현재 문자와 count를 추가
      answer += str[i] + (count > 1 ? count : ""); // count가 1이면 숫자를 붙이지 않음
      count = 1; // count는 초기화
    }
  }

  return answer;
}

const testA = "KKHSSSSSSSE";
console.log(solution(testA)); // K2HS7E

const testB = "HHHEEEKKKLLL";
console.log(solution(testB)); // H3E3K3L3

const testC = "SSSSSEEKKKLLL";
console.log(solution(testC)); // S5E2K3L3
