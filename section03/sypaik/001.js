// # 회문 문자열

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다. 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 "NO"출력

function solution(str) {
  str = str.toLowerCase(); // 문자열을 소문자로 통일
  strReverse = str.split("").reverse().join("");
  return str === strReverse ? "YES" : "NO";
}

// 접근방법
// 1. 대소문자를 구분하지 않기 때문에 문자열을 소문자로 통일
// 2. 문자열을 역순으로 뒤집고
// 3. 기존의 문자열과 역순의 문자열 비교

// test1 = "gooG"; ==> "YES"
// test2 = "SyPaik" ==> "NO"
// test3 = "level" ==> "NO"
