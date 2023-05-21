/*
팩토리얼

// 문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
정수 n이 n팩토리얼(n!)을 return 하도록 solution 함수를 완성해주세요.

*/

// 반복문
function solutionA(n) {
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer *= i;
  }
  return answer;
}

//재귀
function solutionB(n) {
  if (n === 1) {
    return 1;
  }
  return n * solutionB(n - 1);
}

console.log(solutionA(5)); // 120
console.log(solutionB(5)); // 120
console.log(solutionA(10)); // 3628800
console.log(solutionB(10)); // 3628800
