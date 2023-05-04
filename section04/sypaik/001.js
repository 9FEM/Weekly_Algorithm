/*

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// 입력 설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.

// 출력 설명
자릿수의 합이 최대인 자연수를 출력한다.

*/

function solution(numbers) {
  let max,
    maxNum = Number.MIN_SAFE_INTEGER; // 원래 숫자의 최댓값
  for (let num of numbers) {
    let sum = num
      .toString()
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0);
    if (sum > maxNum) {
      maxNum = sum;
      max = num;
    } else if (sum === maxNum && num > max) {
      max = num;
    }
  }
  return max;
}

const A = 7;
const testA = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(testA)); // 137

const B = 4;
const testB = [123, 9, 5678, 99, 1234];
console.log(solution(testB)); // 5678

const C = 4;
const testC = [21, 11, 34, 80];
console.log(solution(testC)); // 80

const D = 9;
const testD = [79, 90, 42, 110, 450, 210, 40, 99, 10];
console.log(solution(testD)); // 99
