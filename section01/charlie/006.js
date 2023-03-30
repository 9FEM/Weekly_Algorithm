/*
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
*/

function solution(nums) {
	const odds = nums.filter((element) => {
		if (element % 2 == 0)
			return false;
		return true;
	})

	let sum = odds.reduce((acc, cur, idx) => (acc += cur), 0);
	console.log(sum);

	console.log(Math.min(...odds));
}

// TEST CODE
const testA = [12, 77, 38, 41, 53, 92, 85]; // Expected Answer: 256 41
solution(testA);

const testB = [1, 2, 3, 4, 5, 6, 7]; // Expected Answer:  
solution(testB);


/*

배열 내에서 특정 조건을 만족하는 요소들만 뽑아서 새로운 배열을 만든다.
-> Array.filter() 사용

배열 내에서 특정 조건을 만족하는 요소들만의 합이나, 다른 무언가를 만든다.
-> Array.reduce() 사용

*/