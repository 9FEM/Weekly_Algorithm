/*

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

*/

// 1) for문 탐색
function solution1(str) {
  let copyStr = str.toLowerCase();
  let mid = (str.length - 1) / 2;
  let palindrome = true;
  for (let i = 0; i < mid; i++) {
    if (copyStr[i] !== copyStr[str.length - 1 - i]) {
      palindrome = false;
    }
  }
  return palindrome === true ? 'YES' : 'NO';
}

// 2) 메소드 활용
function solution2(str) {
  let copyStr = str.toLowerCase();
  let reversedStr = copyStr.split('').reverse().join('');
  return copyStr === reversedStr ? 'YES' : 'NO';
}

const testA = 'gooG';
console.log(solution1(testA)); // YES
console.log(solution2(testA)); // YES

const testB = 'Madam';
console.log(solution1(testB)); // YES
console.log(solution2(testB)); // YES

const testC = 'MMMMMM';
console.log(solution1(testC)); // YES
console.log(solution2(testC)); // YES
