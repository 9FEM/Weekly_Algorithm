// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(a) {
  let answer = Math.min(...a);
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

// Math.min() 숫자들 중 가장 작은 숫자를 반환
// Math.max() 숫자들 중 가장 큰 숫자를 반환
