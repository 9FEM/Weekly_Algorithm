// # 중복단어제거

// ## N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// ## 출력하는 문자열은 원래의 입력순서를 유지합니다.

// ## 첫 줄에 자연수 N이 주어진다 (3 <= N <= 30)
// ## 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

function solution(str) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      answer.push(str[i]);
    }
  }
  return answer;
}
