// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성

// 1)
// Math.min()으로 구하는 방법
// return Math.min(a.b.c);

// 2)
function solution(a, b, c) {
  // return Math.min(a.b.c);
  let min = 0;
  if (a <= b && a <= c) {
    min = a;
  } else if (b <= a && b <= c) {
    min = b;
  } else {
    min = c;
  }
  return min;
}
console.log(solution(6, 5, 11));

// <가 맞는지, <=가 맞는지?
