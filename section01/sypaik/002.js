// # 삼각형 판별하기

// ## 깉이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고, 만들 수 없으면 "NO"를 출력

// ## 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대 길이가 주어진다.

function solution(a, b, c) {
  let long = Math.max(a, b, c);
  let sum = a + b + c;
  if (long < sum - long) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 삼각형 만드는 조건 : 가장 긴 변의 길이 < 다른 두 변 길이의 합
