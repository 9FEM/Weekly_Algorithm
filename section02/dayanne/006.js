// 격자판 최대합
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19

// ▣ 출력예제 1
// 155

function solution(n, arr) {
  let colSum = new Array(n).fill(0);
  let rowSum = new Array(n).fill(0);
  let diagSum1 = 0;
  let diagSum2 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowSum[i] += arr[i][j]; // 가로 합
      colSum[i] += arr[j][i]; // 세로 합
    }
    diagSum1 += arr[i][i]; // 왼쪽위 - 오른쪽아래 대각선 합
    diagSum2 += arr[i][n - 1 - i]; // 왼쪽아래 - 오른쪽위 대각선 합
  }
  const max = Math.max(...rowSum, ...colSum, diagSum1, diagSum2);
  return max;
}

let bingo = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(5, bingo));
