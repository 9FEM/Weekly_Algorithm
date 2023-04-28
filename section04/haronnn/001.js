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

// 각 자릿수의 합계 구하는 함수 만들기
function getDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10; // 일의 자리 숫자 더하기
    n = Math.floor(n / 10); // 다음 자릿수로 이동하기
  }
  return sum;
}

function solution(N, numbers) {
  let maxSum = 0;
  let maxNum = 0;

  // numbers의 요소들을 순회하기
  for (let num of numbers) {
    // 요소들을 getDigits에 넣어서 요소의 합계 구한 값이 sum
    let sum = getDigits(num);

    if (sum > maxSum || (sum === maxSum && num > maxNum)) {
      // 자릿수의 합이 더 큰경우나, 자릿수의 합이 같지만 숫자가 더 큰경우
      maxSum = sum;
      maxNum = num;
    }
  }
  return maxNum;
}
const A = 7;
const testA = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(A, testA)); // 137

const B = 6;
const testB = [208, 301, 512, 456, 333, 307];
console.log(solution(B, testB)); // 456

const C = 7;
const testC = [181, 171, 206, 701, 902, 157, 248];
console.log(solution(C, testC)); // 248

const D = 4;
const testD = [404, 307, 507, 370];
console.log(solution(D, testD)); // 507

// function solution(N, numbers) {
//   let answer = "";
//   let sum = 0;
//   let curr = 0;
//   for (let el of numbers) {
//     let arr = [];
//     arr.push(el.toString().split("")); // 요소 하나씩 string으로 바꾸어 array로 만들기 ['1', '2', '8']
//     arr.reduce((a, b) => parseInt(a) + parseInt(b)); // 나눈 array의 요소를 다시 숫자로 바꿔 더한 값을 curr에 저장하기 // 11;
//     if (sum < curr) {
//       sum = curr;
//     }
//   }
// }

//* 처음에는 numbers의 요소를 쪼개서 더한값을 구한 다음에, 다시 반복시켜 reduce해서 같은 값을 찾으려고 했지만, 굉장히 비효율적인데다가 찾기가 어려웠다. 위에는 적다가만 코드..ㅋㅋㅋㅋ
