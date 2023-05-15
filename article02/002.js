/*
연속된 수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/120923

// 문제 설명
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

*/

function solution(num, total) {
  let answer = [];
  let middle = Math.floor(total / num); // 중간값 4, 3 , 3
  let number = Math.ceil(num / 2); // 2, 3, 2
  let start = middle + 1 - number; // 초기값

  for (let i = 0; i < num; i++) {
    answer.push(start++);
  }

  return answer;
}

// 배열의 가운데 숫자는 total / num 임 (12 / 3 = 4)
// 짝수일 경우를 따로 고려하는가?
// 처음 시작하는 초기값을 어떻게 구하지?
// num의 길이만큼의 배열을 만들어서 초기값부터 넣어주면 되는데..

//* 배열의 중간값을 활용해서 앞의 수를 출력, 뒤의 수를 출력하는 방법으로도 풀 수 있음. 추후에 다시 해보자.

const num = 3;
const total = 12;

console.log(solution(num, total)); // [3, 4, 5]
