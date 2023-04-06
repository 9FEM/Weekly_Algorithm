//1부터 N까지 합 출력하기

function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(6));
console.log(solution(10));
