// 보이는 학생
// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에
// 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그
// 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
// ▣ 입력설명
// 첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
// ▣ 출력설명
// 선생님이 볼 수 있는 최대학생수를 출력한다.
// ▣ 입력예제 1
// 8
// 130 135 148 140 145 150 150 153
// ▣ 출력예제 1
// 5

// function solution(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       count++;
//       console.log(arr[i]);
//     }
//   }
//   console.log(count);
// }
// 잘못된 풀이 ㅠ

function solution(n, arr) {
  //  첫번째 친구
  let count = 1;
  let result = arr[0];

  for (let i = 0; i < n; i++) {
    // 바로 앞과 뒤 친구를 비교하고 앞에서 제일 컷던 친구와도 비교하여 카운트.
    if (arr[i] < arr[i + 1] && arr[i + 1] > result) {
      result = arr[i + 1];
      count++;
    }
  }
  console.log(count);
}
const arr = [130, 135, 138, 140, 145, 150, 150, 153];
solution(8, arr);
