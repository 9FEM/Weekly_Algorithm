//홀수

function solution(a) {
  let sum = 0;
  let answer = [];
  min = Number.MAX_SAFE_INTEGER;
  for (let x of a) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
