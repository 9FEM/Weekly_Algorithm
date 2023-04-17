/*

한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

// 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

*/

function solution(str, ch) {
  let answer = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      answer.push(0);
      continue;
    }
    let left = i; // --
    let right = i; // ++
    let distance = 0;

    while (left >= 0 || right < str.length) {
      if (left >= 0 && str[left] === ch) {
        answer.push(distance);
        break;
      }
      if (right < str.length && str[right] === ch) {
        answer.push(distance);
        break;
      }
      distance++;
      left--;
      right++;
    }
  }
  return answer;
}
const stringA = 'teachermode';
const charA = 'e';
console.log(solution(stringA, charA)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

const stringB = 'helloworld';
const charB = 'd';
console.log(solution(stringB, charB)); // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

const stringC = 'eeeeeeeeeee';
const charC = 'e';
console.log(solution(stringC, charC)); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
