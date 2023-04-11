// 격자판 최대합
// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다. 
//     0  1  2  3  4
// 0  10 13 10 12 15
// 1  12 39 30 23 11
// 2  11 25 50 53 15
// 3  19 27 29 37 27
// 4  19 13 30 13 19
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
// 니다.

function solution(num, arr) {
  const answer = [];
  let toright = 0;
  let toleft = 0;
  for (let i = 0; i < num; i++) {
    //행의 총합
    const rowSum = arr[i].reduce((a, b) => a + b, 0);
    answer.push(rowSum);
    
    //열의 총합
    const columnSum = arr.reduce((a, _, idx) => a + arr[i][idx],0);
    answer.push(columnSum);

    //오른쪽 아래로 향하는 대각선의 합
    toright += arr[i][i];

    //왼쪽 아래로 향하는 대각선의 합
    toleft += arr[i][num - 1 - i];

    answer.push(toright, toleft);
  }
  return Math.max(...answer);
}


const num = 5;
const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];

console.log(solution(num, arr));

// ▣ 입력예제 1 
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제 1
// 155