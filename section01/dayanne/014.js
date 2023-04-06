// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력

// toUpperCase()

function solution(str) {
  let answer = '';
  for (let i of str) {
    if (i.length > answer.length) {
      answer = i;
    }
  }
  return answer;
}

let arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arr));
