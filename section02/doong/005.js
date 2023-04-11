// 등수구하기
// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 
// 프로그램을 작성하세요.

function solution(arr) {
  let answer = [];
  let descending = [...arr].sort((a, b) => b - a);  // 내림차순 정렬

  for (let i = 0; i < descending.length; i++) {
    answer.push(descending.indexOf(arr[i])+ 1);
  }
  return answer.join(' ');
}

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// ▣ 입력예제 1 
// 5
// 87 89 92 100 76
// ▣ 출력예제 1
// 4 3 2 1 5