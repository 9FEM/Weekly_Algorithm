// # 1부터 N까지 합 출력하기

// ## 자연수 N이 입력되면 1부터 N까지의 합을 출력

// ## 첫 번째 줄에 20이하의 자연수 N이 입력

// ## 첫 번째 줄에 1부터 N까지의 합을 출력

function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
