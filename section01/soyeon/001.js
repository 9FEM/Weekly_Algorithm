//세 수 중 최솟값

function solution(A, B, C) {
  let min;
  if (A < B) {
    min = A;
  } else {
    min = B;
  }
  if (C < min) {
    min = C;
  }
  return min;
}

console.log(solution(6, 5, 11));
