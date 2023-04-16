/*

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.


// 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// 출력설명
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

*/

//? [처음코드] 알파벳 이외에는 무시해야하기에 다시 작성해보자!
// function solution(str) {
//   const str1 = str.toLowerCase();
//  // 문자열을 쪼개서 뒤집은 후에, join으로 합쳐주고, 소문자로 다 바꿔주기
//   const str2 = str1.split("").reverse().join("").toLowerCase();

//   return str1 == str2 ? "YES" : "NO";
// }

//! 무시하는 코드를 추가, 정규표현식을 사용해보자.
function solution(str) {
  const regex = /[a-z]/gi; // 알파벳만 찾아봅시다.
  const str1 = str.match(regex).join("").toLowerCase(); // match로 먼저 찾기
  const str2 = str1.split("").reverse().join("");

  return str1 === str2 ? "YES" : "NO";
}

const testA = "found7,time:study;Yduts;emit,7Dnuof";
console.log(solution(testA)); // YES

const testB = "hello,world";
console.log(solution(testB)); // NO

const testC = "hello,world;dlrow,olleh";
console.log(solution(testC)); // YES

//? match() 메소드는 문자열에서 정규 표현식과 일치하는 부분을 찾아 배열로 반환. String 객체에서 사용할 수 있고, 인수로는 정규 표현식 또는 문자열이 들어간다.정규 표현식과 일치하는 모든 문자열을 배열로 반환하며, 대소문자를 구분하지 않고 일치하는 경우에는 i 플래그를 사용할 수 있다.
