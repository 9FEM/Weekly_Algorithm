/*

한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

// 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

*/

// 반례 const stringD = "zzzzzzza"; [1, 2, 3, 4, 3, 2, 1, 0] 오답,
// function solution(str, ch) {
//   const answer = [];
//   let distance = 0;

//   for (let i = 0; i < str.length; i++) {
//     // str를 순회하다가 ch를 만나면
//     if (str[i] === ch) {
//       distance = 0; // 0으로 초기화
//       answer.push(distance); // push
//     } else {
//       distance++; // 그게 아니면 +1씩 더해줌
//       answer.push(distance); // 더해준 값을 추가
//     }
//   }

//   // 여기까지는
//   // [ 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0]이런식으로 출력 되었음.

//   // 거꾸로 탐색하기
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === ch) {
//       distance = 0; // 동일하게 ch를 만나면 0으로 초기화
//       answer[i] = distance; // answer 배열의 i위치의 요소를 distance의 값으로 바꿔주기
//     } else {
//       distance++; // ch를 못만나면 또 쁠쁠
//       answer[i] = Math.min(answer[i], distance); // 기존의 구한 거리 값과 비교하여 더 작은 값을 결과 배열의 i번째 값으로 바꿔주기 (최소거리 값을 찾는!)
//     }
//   }

//   return answer;
// }

//! 다시 풀자
//! 최소 거리는 gpt 도움을 받음 이해를 해야함 일단 다시..

function solution(str, ch) {
  const answer = [];

  // ch를 만나는 위치를 저장하기
  const positions = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      positions.push(i);
    }
  }

  // 각 문자와 ch와의 최소 거리를 계산하기
  for (let i = 0; i < str.length; i++) {
    let minDist = Infinity;
    for (let j = 0; j < positions.length; j++) {
      const dist = Math.abs(i - positions[j]);
      if (dist < minDist) {
        minDist = dist;
      }
    }
    answer.push(minDist);
  }

  return answer;
}

const stringA = "teachermode";
const charA = "e";
console.log(solution(stringA, charA)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]
// 오른쪽 한칸, 본인이기에 0, a에서는 한칸
const stringB = "bananaapple";
const charB = "a";
console.log(solution(stringB, charB)); // [1, 0, 1, 0, 1, 0, 0, 1, 2, 3, 4]

const stringC = "takitakabangbang";
const charC = "a";
console.log(solution(stringC, charC)); // [1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2]

// 반례친구
const stringD = "zzzzzzza";
const charD = "a";
console.log(solution(stringD, charD)); // [ 7, 6, 5, 4, 3, 2, 1, 0]
