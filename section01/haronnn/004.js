// 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

function solution(n) {
  let answer = 0;
  // 0부터 n까지 i의 값을 answer에 더함을 반복,
  for (let i = 0; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));
