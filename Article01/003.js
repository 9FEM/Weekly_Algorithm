// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      //연속적이지 않으면 push
      answer.push(arr[i]);
    }
  }

  return answer;
}
