// # 유효한 팰린드롬

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다. 해당 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하는 프로그램을 작성하세요 (대소문자 구문 X, 알파벳 이외의 문자들은 무시, 알파벳만 가지고!)

function solution(str) {
  let answer = "";
  const reg = /[^a-zA-Z0-9ㄱ-힣]/g;
  str = str.toLowerCase().replace(reg, "");
  strReverse = str.split("").reverse().join("");
  if (str == strReverse) {
    answer += "YES";
  } else {
    answer += "NO";
  }
  return answer;
}

// 접근방법
// 1. 대소문자는 구분하지 않기 때문에 소문자로 통일
// 2. 알파벳 외의 :, ; 는 무시 ==> 정규표현식 사용!
// 3. 문자열 뒤집기

// test1 = "found7, time: study; Yduts; emit, 7Dnuof" ==> "YES"
// test2 = "syPaik, ddeoKbOk, kObKoedd, kiaPyy" ==> "NO"
