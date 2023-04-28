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
	const sums = [];

	for (let i = 0; i < N - 2; i++) {
		for (let j = i + 1; j < N - 1; j++) {
			for (let k = j + 1; k < N; k++) {
				sums.push(numbers[i] + numbers[j] + numbers[k]);
			}
		}
	}

	const arr = [...(new Set(sums))]; //중복된 숫자를 없애기 위해서 array -> set -> array
	arr.sort((a,b) => (b - a)); // 큰 순으로 정렬

	return(arr[K - 1]); // K번째 == K - 1 인덱스
}

const N = 10
const K = 3
const testA = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(N, K, testA)); // 143

const NN = 10
const KK = 8
const testB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(NN, KK, testB)); // 20
