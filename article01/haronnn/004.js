/**
 * 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
 */

// 필터해서 풀 수 있을 것 같지만 일단 나중에..
// function solution(answers) {
//     var answer = [];

//     let answerArr = [0,0,0];
//     // [1,2,3,4,5]
//     let one =  [1, 2, 3, 4, 5]; // => 그대로.Length
//     let two = [2, 1, 2, 3, 2, 4, 2, 5]; // => []
//     let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // []

//     let max = Math.max(one, two, three);

//   return answer;
// }

function solution(answers) {
  var answer = [];
  let arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // arr의 요소의 길이만큼 3번
    count = 0; // count 초기화
    for (let j = 0; j < answers.length; j++) {
      // answers의 길이만큼 예시기준 5번
      if (answers[j] === arr[i][j % arr[i].length]) {
        // 수포자가 패턴을 반복하기에 준 조건문
        count++;
      }
    }
    answer.push(count); // [5, 0, 0]
  }

  let max = 0;
  let answerArr = [];

  max = Math.max(...answer); // [5, 0, 0] => 5

  answer.forEach((el, idx) => {
    if (el === max) {
      answerArr.push(idx + 1); // answer의 요소중 max와 일치하는 값의 index+1 // [1]
    }
  });

  return answerArr;
}

const answers = [1, 2, 3, 4, 5];
console.log(solution(answers));
