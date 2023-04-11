// 격자판 최대합
// 5*5 격자판에 아래와 같이 숫자가 적혀있습니다.
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
// ▣ 출력설명
// 최대합을 출력합니다.

// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제 1
// 155
function solution(n, grid) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let row = 0;
    let col = 0;

    for (let j = 0; j < n; j++) {
      row += Math.floor(grid[i][j]); // 행의 합
      col += Math.floor(grid[j][i]); // 열의 합
    }
    answer = Math.max(answer, row, col);
  }

  // 대각선 구하기
  let cross = 0;
  let recross = 0;
  for (let i = 0; i < n; i++) {
    cross += Math.floor(grid[i][i]);
    recross += Math.floor(grid[i][n - i - 1]);
  }
  answer = Math.max(answer, cross, recross);

  return answer;
}

const n = 5;
const grid = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(n, grid));
