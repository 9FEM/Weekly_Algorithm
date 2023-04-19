/*
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략합니다.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 줄에 압축된 문자열을 출력한다.
*/

function solution(str) {
  let answer = "";
  let count = 1;
  str = str + " "; //마지막 인덱스 비교용

  for (let i = 0; i < str.length - 1; i++) {
    //추가한 공백 -1로 빼주기
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if (count > 1) {
        //반복횟수가 1보다 클 경우만 반복횟수 표기
        answer += String(count); //count를 문자열로 변환
        count = 1; //count 초기화
      }
    }
  }
  return answer;
}

const testA = "KKHSSSSSSSE";
console.log(solution(testA)); // K2HS7E

const testB = "SSSOOY";
console.log(solution(testB)); //S3O2Y
//
