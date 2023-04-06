/*길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 
이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력*/

function solution(a, b, c) {
  // // 1)
  // return a + b <= c || a + c <= b || b + c <= a ? 'No' : 'Yes';
  // 2)
  return a + b > c && a + c > b && b + c > a ? 'Yes' : 'No';
}
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

// 가장 긴 막대의 길이가 나머지 두 막대길이들의 합보다 작아야 한다.
