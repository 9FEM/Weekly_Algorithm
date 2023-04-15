// # 격차판 최대합

// ## N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

// 행과 열이 모두 N개 ==> 배열을 행과 열로 표현
// 각 행의 합
// 각 열의 합
// 대각선의 합

function solution(n, grid) {
  let maxSum = 0;

  // 행의 합 중 가장 큰 합 구하기
  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += grid[i][j];
    }
    maxSum = Math.max(maxSum, rowSum);
  }

  // 열의 합 중 가장 큰 합 구하기
  for (let i = 0; i < n; i++) {
    let colSum = 0;
    for (let j = 0; j < n; j++) {
      colSum += grid[j][i];
    }
    maxSum = Math.max(maxSum, colSum);
  }

  // 왼쪽 대각선의 합 구하기
  let leftDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    leftDiagonalSum += grid[i][i];
  }
  maxSum = Math.max(maxSum, leftDiagonalSum);

  // 오른쪽 대각선의 합 구하기
  let rightDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    rightDiagonalSum += grid[i][n - 1 - i];
  }
  maxSum = Math.max(maxSum, rightDiagonalSum);

  return maxSum;
}

// test용
// n = 5, test1 = [10, 13, 12, 39] ==> 2 * 2의 격자판 표현
// n = 3, test2 = [10, 13, 10, 12, 39, 30, 11, 25, 50] ==> 3 * 3의 격자판 표현
