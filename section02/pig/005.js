// 등수구하기
// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.
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

// function solution(arr) {
//   let rank = [...arr].sort((a, b) => b - a);
//   let result = arr.map((x) => rank.indexOf(x) + 1);
//   //   x에다가 정렬된 rank의 indexOf로 각 요소의 인덱스를 찾고 1을 더해줌.
//   //   indexOf는 각 요소의 첫 번째의 위치를 찾기때문에 동일등수 처리가 가능함.
//   console.log(result);
// }

function solution(n, scores) {
  const rank = new Array(n).fill(1);
  const copyScores = scores.slice();

  copyScores.sort((a, b) => b - a); // 복사한 배열을 내림차순 정렬 [100, 92, 89, 87, 76]

  for (let i = 0; i < n; i++) {
    const index = copyScores.indexOf(scores[i]); // scores 값이 내림차순 정렬된 상태의 위치(순위) 기억 (87 = 3, 89 = 2, 92 = 1, 100 = 0, 76 = 4)
    // console.log(index);
    if (index > 0 && copyScores[index - 1] === scores[i]) {
      // 이전 인덱스의 성적 값과 동일할 때
      rank[i] = rank[i - 1]; // 순위를 그대로 유지
      console.log(copyScores[index - 1]);
    } else {
      rank[i] += index; // index 값 더하기(현재 순위를 가져옴)
    }
  }

  return rank;
}
console.log(solution(5, [87, 89, 92, 100, 76])); // [ 4, 3, 2, 1, 5 ]
console.log(solution(5, [87, 100, 100, 100, 76])); // [ 4, 1, 1, 1, 5 ]

// const num = 5;
// const score = [70, 96, 92, 100, 7];

// console.log(solution(num, score));
