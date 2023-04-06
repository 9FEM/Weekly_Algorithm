// # 가장 긴 문자열

// ## N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램

function solution(str) {
  let answer = "";
  let maxLength = 0;
  for (let x of str) {
    if (maxLength < x.length) {
      maxLength = x.length;
      answer = x;
    }
  }
  return answer;
}
