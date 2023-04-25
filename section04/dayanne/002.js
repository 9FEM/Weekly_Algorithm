/*

N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 
예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// 입력 설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 100,000를 넘지 않는다.

// 출력 설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

*/

// 소수인지 구별하는 함수
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(N, numbers) {
  let arr = numbers.map((num) => parseInt(num.toString().split('').reverse().join('')));
  // number로 변환(문자열 변환 - 문자열 분리 - reverse() - 다시 합치기)
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) result.push(arr[i]);
  }

  return result;
}

const A = 9;
const testA = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(A, testA)); // [23, 2, 73, 2, 3]

const B = 0;
const testB = [];
console.log(solution(B, testB)); //

const C = 0;
const testC = [];
console.log(solution(C, testC)); //

const D = 0;
const testD = [];
console.log(solution(D, testD)); //
