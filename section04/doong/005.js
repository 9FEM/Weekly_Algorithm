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
	let answer = 0;
  let card = new Set();  // Set을 이용해서 중복을 제거하고 합을 저장

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        card.add(numbers[i] + numbers[j] + numbers[k]);  // i, j, k번째 수의 합을 card에 추가
      }
    }
  }
  let a = Array.from(card).sort((a, b) => b - a);  // Set을 Array로 변환하고, 내림차순으로 정렬 (k번째로 큰 값을 찾기 위해)
  answer = a[K - 1];  // 배열의 인덱스는 0부터 시작하므로, K에서 1을 뺀 값이 a에서의 인덱스가 됨

  return answer;
}

const N = 10
const K = 3
const testA = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(N, K, testA)); // 143   // 152 - 144 - 143 - 140

const NN = 0
const KK = 0
const testB = [];
console.log(solution(NN, KK, testB)); // 
