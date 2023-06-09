/*
가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

// 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

*/

function solution(str, ch) {
  const answer = [];
  // 이곳은 검은영역입니다....
  let count = 0;
  for (let x of str) {
    if (x === ch) {
      answer.push(count);
    } else {
      count++;
      answer.push(count);
    }
  }
	return answer;
}


const stringA = "teachermode";
const charA = "e";
console.log(solution(stringA, charA)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

const stringB = "";
const charB = "";
console.log(solution(stringB, charB)); // 

const stringC = "";
const charC = "";
console.log(solution(stringC, charC)); // 