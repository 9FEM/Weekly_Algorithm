/*
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

// 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

*/
// 문자열을 반복문으로 싹다 돌리는데 문자t를 따로 담아 놓는다.
//카운트를 사용해서 해당 문자가 나올때까지 +1? 근데 이러면 반대쪽에 있는 경우를 고려해야되는데
function solution(str, ch) {
  const answer = [];
  let count = 0;
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ch) {
      count = 0;
      answer.push(count);
    } else {
      count++;
      answer.push(count);
    }
  }
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] === ch) {
      count = 0;
    } else {
      count++;
      answer[i] = Math.min(answer[i], count);
    }
  }

  return answer;
}

const stringA = "teachermode";
const charA = "e";
console.log(solution(stringA, charA)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

const stringB = "bananaapple";
const charB = "a";
console.log(solution(stringB, charB));
// [
//   1, 0, 1, 0, 1,
//   0, 0, 1, 2, 3,
//   4
// ]

// const stringC = "";
// const charC = "";
// console.log(solution(stringC, charC)); //
