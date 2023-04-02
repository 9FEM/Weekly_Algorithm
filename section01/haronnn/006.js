// 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53,
// 85이므로 그 합은
// 77 + 41 + 53 + 85 = 256 이 되고,
// 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다

function solution(n) {
  let answer = [];
  let arr = n.filter((e) => e % 2 != 0); // [77, 41, 53, 85]
  let max = arr.reduce((a, b) => a + b, 0); // 변수 arr 배열의 합

  answer.push(max);
  answer.push(Math.min(...arr));
  return answer;
}

let num = [12, 77, 8, 41, 53, 92, 85];
console.log(solution(num));

// filter() 는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// reduce() 는 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환.
//리듀서 함수는 아래의 네 개의 인자를 가진다.
// 누산기 (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)
// 리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 된다.

// arr.reduce((acc, cur) => acc + cur, idx)
