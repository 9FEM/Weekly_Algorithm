/*
https://school.programmers.co.kr/learn/courses/30/lessons/42840

수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

* 제한 조건
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/

function solution(answers) {
  let math1 = [1, 2, 3, 4, 5];
  let math2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    // 'i % math.length' 로 설정하여, 계속해서 math 배열을 순환하며 판별하게 함
    if (math1[i % math1.length] === answers[i]) count[0]++;
    if (math2[i % math2.length] === answers[i]) count[1]++;
    if (math3[i % math3.length] === answers[i]) count[2]++;
  }
  let max = Math.max(...count);
  let answer = [];

  // max와 같은 값의 index+1를 push
  count.forEach((cnt, idx) => {
    if (cnt === max) {
      answer.push(idx + 1);
    }
  });

  return answer;
}

const testA = [1, 2, 3, 4, 5];
const testB = [1, 3, 2, 4, 2];
console.log(solution(testA)); // [1]
console.log(solution(testB)); // [1, 2, 3]
