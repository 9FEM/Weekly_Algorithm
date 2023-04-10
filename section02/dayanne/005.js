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

  copyScores.sort((a, b) => b - a); // 복사한 배열을 내림차순 정렬 [100, 92, 89, 87, 76]

  for (let i = 0; i < n; i++) {
    const index = copyScores.indexOf(scores[i]); // scores 값이 내림차순 정렬된 상태의 위치(순위) 기억 (87 = 3, 89 = 2, 92 = 1, 100 = 0, 76 = 4)

    if (index > 0 && copyScores[index - 1] === scores[i]) {
      // 이전 인덱스의 성적 값과 동일할 때
      rank[i] = rank[i - 1]; // 순위를 그대로 유지
    } else {
      rank[i] += index; // index 값 더하기(현재 순위를 가져옴)
    }
  }

  return rank;
}
console.log(solution(5, [87, 89, 92, 100, 76])); // [ 4, 3, 2, 1, 5 ]
console.log(solution(5, [87, 100, 100, 100, 76])); // [ 4, 1, 1, 1, 5 ]
