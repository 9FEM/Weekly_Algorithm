// # 문자 찾기

// ## 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램
// ## 문자열의 길이는 100을 넘지 않는다.

function solution(str, n) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == n) {
      count += 1;
    }
  }
  return count;
}
