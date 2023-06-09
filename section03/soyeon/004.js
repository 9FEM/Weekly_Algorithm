/*
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

// 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
*/
function solution(str, ch) {
  const answer = [];
  let p = 100; //문자열의 길이를 큰 수로 초기화

  for (let x of str) {
    if (x === ch) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 100; //다시 초기화

  for (let i = str.length - 1; i >= 0; i--) {
    //오른쪽부터 순회
    if (str[i] === ch) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p); //두번 순회한 것 중 최솟값 반환
    }
  }

  return answer;
}

const stringA = "teachermode";
const charA = "e";
console.log(solution(stringA, charA)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

const stringB = "tomato";
const charB = "t";
console.log(solution(stringB, charB)); //
