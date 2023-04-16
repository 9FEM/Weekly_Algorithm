/*

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

*/

function solution(str) {
  // 아예 소문자로 바꿔서 비교하기
  const first = str.charAt(0).toLowerCase(); // 첫번째 친구
  const last = str.charAt(str.length - 1).toLowerCase(); // 마지막 친구

  return first === last ? "YES" : "NO";
}

const testA = "gooG";
console.log(solution(testA)); // YES

const testB = "Tomatot";
console.log(solution(testB)); // YES

const testC = "banana";
console.log(solution(testC)); // NO

// const regex = new RegExp(`^${strA}(?i).*${strA}$`); 정규표현식은 어렵네..
