// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력

function solution(str) {
  return str.replaceAll('A', '#');
}

console.log(solution('BANANA'));
