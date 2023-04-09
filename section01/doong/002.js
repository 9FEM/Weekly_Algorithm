// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
// 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1 
// 6 7 11
// ▣ 출력예제 1
// YES
// ▣ 입력예제 1 
// 13 33 17
// ▣ 출력예제 1
// NO


// 세 변의 길이를 줬을 때 길이가 가장 긴 변의 길이는 다른 두변 길이의 합보다 작아야 삼각형을 그릴 수 있다. 
function solution (a, b, c) {
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  if (sum - max > max) {
    return "Yes";
  } else {
    return "No";
  }
}
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));