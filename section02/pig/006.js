// 격자판 최대합
// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
// 니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
// 다.
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
// n * n의 배열이고 각 행의 합은 ij, 각 열의 합은 ji 대각선은 ii,i-n-1?
function solution(n, arr) {
  let row_sum = (col_sum = dia_sum1 = dia_sum2 = 0);
  let result = 0;
  for (let i = 0; i < n; i++) {
    row_sum = col_sum = 0;

    for (let j = 0; j < n; j++) {
      row_sum += arr[i][j];
      col_sum += arr[j][i];
    }
    if (row_sum > result) {
      result = row_sum;
    }
    if (col_sum > result) {
      result = col_sum;
    }
  }
  for (let i = 0; i < n; i++) {
    dia_sum1 += arr[i][i];
    dia_sum2 += arr[i][n - i - 1];
  }
  if (dia_sum1 > result) {
    result = dia_sum1;
  }
  if (dia_sum2 > result) {
    result = dia_sum2;
  }
  console.log(result);
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
solution(5, arr);
