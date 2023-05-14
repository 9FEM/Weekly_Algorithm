// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  var answer = [];
  const std1 = [1, 2, 3, 4, 5];
  const std2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var score1 = 0,
    score2 = 0,
    score3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (std1[i % 5] === answers[i]) {
      score1++;
    }
    if (std2[i % 8] === answers[i]) {
      score2++;
    }
    if (std3[i % 10] === answers[i]) {
      score3++;
    }
  }
  var max = Math.max(score1, score2, score3);

  if (max == score1) answer.push(1);
  if (max == score2) answer.push(2);
  if (max == score3) answer.push(3);

  return answer;
}
