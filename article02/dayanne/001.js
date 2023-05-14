// https://school.programmers.co.kr/learn/courses/30/lessons/120848

// 반복문
function solution(n) {
  let answer = 1;
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    answer *= i;
    if (answer > n) {
      break;
    }
    count++;
  }
  return count;
}

// 일반
function solutionB(n) {
  let num = 1;
  let fac = 1;
  function factorial(n, fac, num) {
    if (fac > n) {
      return num - 1;
    }
    return factorial(n, fac * (num + 1), num + 1);
  }
  return factorial(n, fac, num);
}
const numA = 3628800;
const numB = 7;

console.log(solutionB(numA)); // 10
console.log(solutionB(numB)); // 3
