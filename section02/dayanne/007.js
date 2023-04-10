// 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
// 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.

// ▣ 입력예제 1
// 5
// 5 3 7 2 3
// 3 7 1 6 1
// 7 2 5 3 4
// 4 3 6 4 1
// 8 7 3 5 2
// ▣ 출력예제 1
// 10

function solution(n, arr) {
  let cntPeak = 0;
  let copyArr = arr.slice();
  const x = [0, 0, -1, 1];
  const y = [1, -1, 0, 0];

  for (let i = 0; i < n; i++) {
    //y축
    for (let j = 0; j < n; j++) {
      //x축
      let isPeak = true;
      for (let k = 0; k < n; k++) {
        let ny = i + y[k]; // 주변 y좌표
        let nx = j + x[k]; // 주변 x좌표
        if (0 <= ny && ny < n && 0 <= nx && nx < n) {
          // 주변 좌표가 인덱스 범위 내에 있는지 확인(벗어난 경우에는 isPeak를 판별하지 않음)
          if (copyArr[ny][nx] >= copyArr[i][j]) {
            isPeak = false; // 주변 좌표의 값과 현재 값을 비교해 isPeak가 false인 경우를 걸러내고 break
            break;
          }
        }
      }
      if (isPeak === true) {
        cntPeak++;
      }
    }
  }
  return cntPeak;
}

let num = 5;
let num_list = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(num, num_list));

let num2 = 3;
let num_list2 = [
  [5, 3, 3],
  [3, 7, 1],
  [7, 2, 4],
];
console.log(solution(num2, num_list2));
