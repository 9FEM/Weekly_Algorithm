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

function solution(N, numbers) {
  let answer = [];
  for (let num of numbers) {
    let reverseNum = parseInt(num.toString().split("").reverse().join(""));
    if (isPrime(reverseNum)) answer.push(reverseNum);
  }
  return answer;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    // [반례]: num이 4라면, true를 반환하고 소수로 판단! ==> 등호를 추가해야한다
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

/* 접근방법 */
// 1. 배열에서 각 num의 reverseNum을 구한다.
// 2. 문자열에서 정수형으로 변환하는 parseInt를 써야한다. ==> 첫자리부터 연속된 0 무시
// 3. 소수는 1이 아닌 자기 자신과 1을 약수로 갖는 수이다.
// 4. for 반복문에서 num 사이의 모든 수로 나누어 떨어지는지 확인하는건 비효율적

const A = 9;
const testA = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(A, testA)); // [23, 2, 73, 2, 3]

const B = 4;
const testB = [34, 83, 90, 11, 23];
console.log(solution(B, testB)); // [43, 9, 11]

const C = 6;
const testC = [10, 40, 50, 30, 98, 45];
console.log(solution(C, testC)); // [4, 5, 3, 89]

const D = 4;
const testD = [21, 34, 76, 53];
console.log(solution(D, testD)); // [43, 67, 35]
