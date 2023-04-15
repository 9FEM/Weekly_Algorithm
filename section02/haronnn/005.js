// 등수구하기
// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력
// 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데
// 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
// ▣ 출력설명
// 입력된 순서대로 등수를 출력한다.
// ▣ 입력예제 1
// 5
// 87 89 92 100 76
// ▣ 출력예제 1
// 4 3 2 1 5
function solution(students, scores) {
  let answer = [];

  const sorted = scores.slice().sort((a, b) => b - a); // slice를 사용하여 원래 scores 배열에 차순 변화를 주지 않는다. 새로운 배열로 반환하기에.
  console.log(sorted); // [ 100, 92, 89, 87, 76 ] 내림차순으로 정렬됐음

  answer = scores.map((score) => sorted.indexOf(score) + 1); // 원래 배열인 scores 배열에 map으로 순회하여 sorted된 배열에서의 index + 1값으로 만들어준다.

  return answer;
}

const students = 5;
const scores = [87, 89, 92, 100, 76];

const students2 = 5;
const scores2 = [87, 89, 92, 100, 100];

console.log(solution(students, scores));
