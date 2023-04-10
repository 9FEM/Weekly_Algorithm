// 등수구하기
// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

// ▣ 입력예제 1
// 5
// 87 89 92 100 76
// ▣ 출력예제 1
// 4 3 2 1 5
function solution(n, scores) {
  const rank = new Array(n).fill(1);
  const copyScores = scores.slice();

  copyScores.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    const index = copyScores.indexOf(scores[i]);

    if (index > 0 && copyScores[index - 1] === scores[i]) {
      rank[i] = rank[i - 1];
    } else {
      rank[i] += index;
    }
  }

  return rank;
}
console.log(solution(5, [87, 89, 92, 100, 76])); // [ 4, 3, 2, 1, 5 ]
console.log(solution(5, [87, 100, 100, 100, 76])); // [ 4, 1, 1, 1, 5 ]
