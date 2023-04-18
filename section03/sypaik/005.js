// # 문자열 압축

// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하세요

function solution(str) {
  let answer = "";
  let count = 1; // 기본으로 count
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if (count > 1) {
        answer += count;
      }
      count = 1; // 초기화
    }
  }
  return answer;
}

// 접근방법
// 1. for문을 돌면서 count 해야한다 ==> 연속적이기 때문에! ==> 바로 뒤 값과 비교
// 2. 뒤 값과 같지 않으면 그대로 문자만 출력

// test1 = "KKHSSSSSSSE" ==> "K2HS7E"
// test2 = "PPPPAIIIKK" ==> "P4AI3K2"
