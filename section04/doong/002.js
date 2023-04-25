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


function isPrime(num) {
  if(num === 1){
    return false;   // 1은 소수가 아니므로 false 리턴
  }

  // 2부터 num의 제곱근까지의 모든 숫자를 나누어서
  // 나누어 떨어지는 수가 있는지 확인하여 소수인지 판별
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 주어진 숫자 num을 뒤집은 값을 리턴하는 함수
function reverseNum(num) {
  let reversed = 0;
  while (num > 0) {  // 주어진 숫자 num이 0보다 클 때까지
    reversed = reversed * 10 + (num % 10);  // num의 일의 자리 수를 reversed 변수에 추가
    num = Math.floor(num / 10); // num의 일의 자리 수를 제외한 나머지 수를 num에 저장
  }
  return reversed;
}

function solution(N, numbers) {
  let answer = [];
  for (let i = 0; i < N; i++) {
    let num = numbers[i];
    let reversed = reverseNum(num); // num을 뒤집은 값을 저장
    if (isPrime(reversed)) { // 뒤집은 값이 소수인지 확인
      answer.push(reversed);  // 소수이면 answer 배열에 추가
    }
  }
  return answer;
}

const A = 9
const testA = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(A, testA)); // [23, 2, 73, 2, 3]

const B = 0
const testB = [];
console.log(solution(B, testB)); // 

const C = 0
const testC = [];
console.log(solution(C, testC)); // 

const D = 0
const testD = [];
console.log(solution(D, testD)); // 
