// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력

// 홀수 = ~~() 사용하기 (= Math.floor())
function solution(str) {
  const mid = str.length / 2;
  if (str.length % 2 == 0) {
    return str.substring(mid - 1, mid + 1);
  } else return str[~~mid];
}

console.log(solution('study'));
console.log(solution('good'));
