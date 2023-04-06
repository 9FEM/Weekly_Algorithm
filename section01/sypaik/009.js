// # A는 #으로

// ## 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램 작성

function solution(str) {
  let answer = str;
  return answer.replaceAll("A", "#");
}
