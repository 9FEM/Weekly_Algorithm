/*
7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
*/

function solution(nums) {
	const answer = Math.min(...nums);
	return (answer);
}

// TEST CODE
const testA = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(testA)); // Expected Answer: 2

const testB = [-1, -5, 10, 2, 0, 1, 2];
console.log(solution(testB)); // Expected Answer: -5

/*

배열 내에서 최솟값 찾기
1. sort 하는 방법
2. 반복문으로 확인하는 방법
3. 전개연산자(Spread Operator)를 이용해서 Math.min 사용하는 방법
4. 등

* 배열 요소 개수가 100만개 이상으로 클 경우 Math.min 오류가 날 수도 있다고 함.

*/