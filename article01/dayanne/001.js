/*
https://school.programmers.co.kr/learn/courses/30/lessons/120880

정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numList와 정수 n이 주어질 때 numList의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

* 입출력 예
- numList = [1, 2, 3, 4, 5, 6]
  n = 4
- numList = [-3,-2,-1,0,1,2]
  n = 30
*/

function solution(numList, n) {
  const answer = [];
  // 각 숫자를 n만큼 뺀 후 n의 절대값을 기준으로 오름차순 정렬
  const numArr = numList.map((num) => num - n).sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = 1; i < numArr.length; i++) {
    if (Math.abs(numArr[i]) === Math.abs(numArr[i - 1]) && numArr[i] > numArr[i - 1]) {
      // 두 숫자의 절대값이 같고 && 각각 n을 더했을 때 'numArr[i] + n'이 더 큰 경우
      // 두 숫자의 순서를 바꾼다.
      const prevNum = numArr[i];
      numArr[i] = numArr[i - 1];
      numArr[i - 1] = prevNum;
    }
    answer.push(numArr[i - 1] + n);
  }
  // 마지막에 위치한 숫자까지 push
  answer.push(numArr[numArr.length - 1] + n);
  return answer;
}

// 원래 풀고 싶었던 방법 (다른 풀이 참고)
// numList.sort((a, b) => b - a).sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
// numList.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

const testA = [1, 2, 3, 4, 5, 6];
const testB = [10000, 20, 36, 47, 40, 6, 10, 7000];
console.log(solution(testA, 4));
console.log(solution(testB, 30));
