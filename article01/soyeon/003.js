// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]); //연속적이지 않으면 push
    }
  }
  answer.push(arr[arr.length - 1]); //마지막 요소는 비교하지 않으므로 추가

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); //[ 1, 3, 0, 1 ]
