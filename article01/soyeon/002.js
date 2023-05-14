// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  //모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes
  var answer = 0;
  let width = [];
  let height = [];

  for (let i = 0; i < sizes.length; i++) {
    let widthMax = Math.max(sizes[i][0], sizes[i][1]); //가로, 세로 중 큰 값을 가로
    let heightMin = Math.min(sizes[i][0], sizes[i][1]); //가로, 세로 중 작은 값을 세로
    width.push(widthMax);
    height.push(heightMin);
  }
  width = Math.max(...width);
  height = Math.max(...height);
  answer = width * height;

  return answer;
}
