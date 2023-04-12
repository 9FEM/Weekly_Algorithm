// 보이는 학생
// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

// ▣ 입력설명
// 첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
// ▣ 출력설명
// 선생님이 볼 수 있는 최대학생수를 출력한다.
// ▣ 입력예제 1
// 8
// 130 135v 148v 140 145v 150v 150 153v
// ▣ 출력예제 1
// 5
//! 기존 초과하는 풀이
// function solution(teacher, students) {
//   let answer = 1;
//   let max = students[0]; // 맨 처음 친구

//   for (let i = 0; i < teacher; i++) {
//     // 가장 큰 친구가 앞에 온다고 가정하면 오류가 날 수 있기에 수정
//     if (students[i] < students[i + 1] && students[i + 1] > max) {
//       // 제일 큰 칭구
//       max = students[i + 1];
//       console.log(max);
//       answer++;
//     }
//   }
//   return answer;
// }

//* 다시 해보기
function solution(students) {
  let answer = 0;
  let max = 0;

  // max만 찾아서 비교
  for (let el of students) {
    if (max < el) {
      max = el;
      console.log(max); // [130, 135, 148, 150, 153] // 5
      answer++;
    }
  }
  return answer;
}

const teacher = 8;
const students = [130, 135, 148, 140, 145, 150, 150, 153];

const students2 = [170, 135, 148, 140, 145, 150, 150, 153]; // [170]  // 1
console.log(solution(students));
