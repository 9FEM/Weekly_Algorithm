// # 가운데 문자 출력

// ## 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요 (단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력)

function solution(str) {
  let answer = "";
  if (str.length % 2 == 1) {
    answer += str[Math.round(str.length / 2 - 1)];
  } else {
    answer += str[str.length / 2 - 1] + str[str.length / 2];
  }
  return answer;
}

// 길이가 홀수인 경우와 짝수인 경우를 나누어 생각
// 홀수일 경우 반올림
// 짝수일 경우 2개의 값 출력
