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

// 소수 구하는 함수
function isPrime(num) {
  // 2는 유일한 짝수 소수
  if (num === 2) return true;
  // 2보다 작거나 짝수인 경우 소수가 아님
  if (num < 2 || num % 2 === 0) return false;
  // 2로 나누어떨어지는 애들 제외하고, 3부터 2씩 더한 애들의 제곱근까지만 확인하면 됨
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true; // true인 애들만 반환.
}

function solution(N, numbers) {
  let arr = [];

  // 각 요소들 reverse로 뒤집어 숫자로 변환하여 arr에 push한 반복문
  for (el of numbers) {
    let reversed = el.toString().split("").reverse().join("");
    arr.push(parseInt(reversed));
  }
  // 소수 판별 함수를 filter에 넣어서 걸러주기
  let primes = arr.filter(isPrime);
  return primes;
}

const A = 9;
const testA = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(A, testA)); // [23, 2, 73, 2, 3]

const B = 7;
const testB = [30, 48, 72, 91, 82, 11, 46];
console.log(solution(B, testB)); // [3, 19, 11]

const C = 8;
const testC = [13, 14, 95, 62, 35, 85, 79, 39];
console.log(solution(C, testC)); // [31, 41, 59, 53, 97]

const D = 8;
const testD = [22, 48, 29, 17, 49, 47, 31, 37];
console.log(solution(D, testD)); // [71, 13, 73]
