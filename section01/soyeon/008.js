//일곱 난쟁이

function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
