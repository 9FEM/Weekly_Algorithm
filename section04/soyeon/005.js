/*

현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다.
같은 숫자의 카드가 여러장 있을 수 있습니다.
현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다.
3장을 뽑을 수 있는 모든 경우를 기록합니다.
기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.

// 입력 설명
첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력 된다.

// 출력 설명
첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.

*/

function solution(N, K, numbers) {
  //1부터 100사이의 자연수가 적힌 N장의 카드,기록한 값 중 K번째로 큰 수, 카드의 숫자(배열)
  let answer = 0; //기록한 값 중 K번째로 큰 수
  let tmp = new Set();

  // 3장 고르고 합한 값의 모든 경우의 수
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        tmp.add(numbers[i] + numbers[j] + numbers[k]);
      }
    }
  }

  let a = Array.from(tmp).sort((a, b) => b - a); // 새로운 Array 객체를 만드는 메서드(Array.from())
  answer = a[K - 1];

  return answer;
}

const N = 10;
const K = 3;
const testA = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(N, K, testA)); // 143

const NN = 5;
const KK = 2;
const testB = [1, 2, 3, 4, 5];
console.log(solution(NN, KK, testB)); //11
