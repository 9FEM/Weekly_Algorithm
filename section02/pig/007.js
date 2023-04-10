// 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
// 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개
// 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
// 0 0 0 0 0 0 0
// 0 5 3 7 2 3 0
// 0 3 7 1 6 1 0
// 0 7 2 5 3 4 0
// 0 4 3 6 4 1 0
// 0 8 7 3 5 2 0
// 0 0 0 0 0 0 0
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
// 다.
// ▣ 출력설명
// 봉우리의 개수를 출력하세요.
// ▣ 입력예제 1
// 5
// 5 3 7 2 3
// 3 7 1 6 1
// 7 2 5 3 4
// 4 3 6 4 1
// 8 7 3 5 2
// ▣ 출력예제 1
// 10
// function solution(map) {
//   let count = 0;
//   for (let i = 0; i < map.length; i++) {
//     for (let j = 0; j < map.length; j++) {
//       if (i > 0 && map[i][j] <= map[i - 1][j])
//         // 상
//         continue;
//       if (i + 1 < map.length && map[i][j] <= map[i + 1][j])
//         // 하
//         continue;
//       if (j > 0 && map[i][j] <= map[i][j - 1])
//         // 좌
//         continue;
//       if (j + 1 < map.length && map[i][j] <= map[i][j + 1])
//         // 우
//         continue;
//       count += 1;
//     }
//   }
//   return console.log(count);
// }
function solution(n, grid) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const curr = grid[i][j];
      let isPeak = true;

      if (i > 0 && curr <= grid[i - 1][j]) {
        isPeak = false;
      }
      if (j > 0 && curr <= grid[i][j - 1]) {
        isPeak = false;
      }
      if (i < n - 1 && curr <= grid[i + 1][j]) {
        isPeak = false;
      }
      if (j < n - 1 && curr <= grid[i][j + 1]) {
        isPeak = false;
      }

      if (isPeak) {
        count++;
      }
    }
  }

  return console.log(count);
}
const map = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
solution(5, map); //10

const mapB = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 2, 3, 4, 5],
];
solution(5, mapB); // 5

const mapD = [
  [20, 10, 20, 10, 20],
  [10, 20, 10, 20, 10],
  [20, 10, 20, 10, 20],
  [10, 20, 10, 20, 10],
  [20, 10, 20, 10, 20],
];
solution(5, mapD); // 13

// 도경님 코드와 GPT가 가져다준 코드로 푸는 방식에 대한 이해를 도왔습니다. 감사합니다.
// 맑은 정신으로 더 많이많이 생각했다면 떠올랐을 것 같기도 하네요ㅜ
