// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solutionA(num, total) {
  let answer = [];
  let mid = total / num;
  if (mid % 1 === 0) {
    answer.push(mid);
  }

  let cnt = 1;

  while (answer.length < num) {
    answer.unshift(Math.ceil(mid - cnt)); // num이 짝수 && mid가 실수일 경우 고려해 올림
    answer.push(Math.floor(mid + cnt)); // num이 짝수 && mid가 실수일 경우 고려해 내림
    cnt++;
  }
  return answer;
}

function solutionB(num, total) {}

console.log(solutionB(3, 12)); // [3, 4, 5]
console.log(solutionB(5, 15)); // [1, 2, 3, 4, 5]
console.log(solutionB(4, 14)); // [2, 3, 4, 5]
console.log(solutionB(5, 5)); // [-1, 0, 1, 2, 3]
