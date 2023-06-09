// 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
// 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 
// 있는 지 알아내는 프로그램을 작성하세요. 
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
//   0 1 2 3 4 5              행 열
// 0 5 3 7 2 3 0       // arr[1][2] 가 봉우리인지 판별            
// 1 3 7 1 6 1 0       // 상 = arr[0][2] = arr[1-1][2]           x = i-1, y = j
// 2 7 2 5 3 4 0       // 하 = arr[2][2] = arr[1+1][2]           x = i+1, y = j
// 3 4 3 6 4 1 0       // 좌 = arr[1][1] = arr[1][2-1]           x = i,   y= j-1
// 4 8 7 3 5 2 0       // 우 = arr[1][3] = arr[1][2+1]           x = i,   y=j+1
// 5 0 0 0 0 0 0


function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 1, 0, 0];  // 행
  let dy = [0, 0, -1, 1];  // 열
  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      let flag = 1;         // flag는 봉우리인지 아닌지 체크, flag가 0이면 answer카운팅 안되고, 1이면 카운팅
      for(let k=0; k<4; k++) { // 4방향이라서 4번돌도록 맞춤
        let nx = i+dx[k];       // 가려고하는 방향 행 좌표
        let ny = j+dy[k];       // 가려고하는 방향 열 좌표
        if (nx >= 0 && nx < n && ny>=0 && ny<n && arr[nx][ny] >= arr[i][j]) {    // arr[nx][ny]상하좌우좌표 >= 현재지점좌표 arr[i][j]
        // nx>=0 && nx<n && ny>=0 && ny<n는 
        // 내 상하좌우가 네방향으로 존재하지 않는 경우도 있으니 그 경우는 제외하는 조건
        // 현재지점 좌표보다 큰게 있으면 봉우리가 아니다. 이걸 확인하기 위해서 flag변수 작성해준 것
          flag = 0;
          break;        // k for문 멈춤
        }
      }
      if (flag) answer++;  // 상하좌우 다 돌고 나와서 flag가 그대로이면 answer++ 해준다  0이면 거짓, 1이면 합
    }
  }
  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];

console.log(solution(arr));


// ▣ 입력예제 1 
// 5
// 5 3 7 2 3
// 3 7 1 6 1
// 7 2 5 3 4
// 4 3 6 4 1
// 8 7 3 5 2
// ▣ 출력예제 1
// 10
