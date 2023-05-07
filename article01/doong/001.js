// 특이한 정렬

// 문제 설명
/* 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요. */

//제한사항
/* 1 ≤ n ≤ 10,000
1 ≤ numlist의 원소 ≤ 10,000
1 ≤ numlist의 길이 ≤ 100
numlist는 중복된 원소를 갖지 않습니다. */


function solution(numlist, n) {
  let answer = [];
  for (let i = 0; i < numlist.length; i++) {
    answer.push({value : Math.abs(numlist[i] - n), index: i})
  }
  // answer 배열을 value와 index의 순서로 정렬, 
  // 단, value가 같으면 numlist의 원래 인덱스의 원소 값을 비교해서 정렬
  answer.sort(function(a, b) {
    if(a.value === b.value) {
      return numlist[b.index] - numlist[a.index];
    } else {
      return a.value - b.value;
    }
  });
  // 정렬된 answer 배열에서 원래 인덱스에 해당하는 numlist의 원소만 추출해서 배열로 반환
  answer = answer.map(function(item) {
    return numlist[item.index];
  });
  return answer;
}

let testA = [1, 2, 3, 4, 5, 6];
let testB = 4
console.log(solution(testA, testB)); // [4, 5, 3, 6, 2, 1]

let testC = [10000,20,36,47,40,6,10,7000];
let testD = 30;
console.log(solution(testC, testD)); // [36, 40, 20, 47, 10, 6, 7000, 10000]


// 접근방법
// 1. numlist 배열 안 숫자 하나하나에 n을 뺌
// 2. abs처리하고 그 수가 제일 작은 순서로 정렬하기
// 2.1. 만약 값이 같다면 큰 값이 먼저 출력

