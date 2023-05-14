/**
 * 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.


 */

//* 제발 기억하기
// 이 i - 1과 i + 1로 비교할 경우 undefined가 출력될 수 있으므로 피해야함
// function solution(arr) {
//   var answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i - 1] !== arr[i]) {
//       answer.push(arr[i]);
//     }
//   }

//   return answer;
// }

function solution(arr) {
  let answer = [arr[0]]; // 첫번째 원소 저장

  // for문은 두 번째 원소부터 마지막 원소까지 반복
  // 이렇게 하면 undefined가 출력될 일이 없다고 하는데..
  for (let i = 1; i < arr.length; i++) {
    // 현재 원소와 바로 이전 원소를 비교하여 같지 않을 때만 answer 배열에 추가
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(arr)); // [ 1, 3, 0, 1 ]
