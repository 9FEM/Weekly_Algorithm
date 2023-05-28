/*
회의실 배정

한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들 려고 한다.
각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

// 입력설명
첫째 줄에 회의의 수 n(1<=n<=100,000)이 주어진다.
둘째 줄부터 n+1 줄까지 각 회의의 정 보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다.
회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.

// 출력설명
첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라.

*/

function solution(N, arr) {
	arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]); // 끝시간 정렬한 뒤 시작시간 정렬
	const currArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (currArr.length === 0) {
			currArr.push(arr[i]);
		} else {
			if (currArr[currArr.length - 1][1] <= arr[i][0]) {
				currArr.push(arr[i]);
			}
		}
	}

	return currArr.length;
}

let numA = 5;
let testA = [
	[1, 4],
	[2, 3],
	[3, 5],
	[4, 6],
	[5, 7],
];
//(2,3), (3,5), (5,7)이 회의실을 이용할 수 있다.

let numB = 3;
let testB = [
	[3, 3],
	[1, 3],
	[2, 3],
];
//(1,3), (3,3) 혹은 (2,3), (3,3) 회의실 이용 가능

let numC = 10;
let testC = [
	[2, 10],
	[3, 5],
	[4, 8],
	[7, 15],
	[1, 5],
	[6, 8],
	[10, 11],
	[11, 15],
	[5, 7],
	[9, 12],
];
//(1,5),(6,8),(10,11),(11,15) 등

let numD = 7;
let testD = [
	[4, 6],
	[2, 4],
	[3, 5],
	[2, 6],
	[4, 5],
	[5, 7],
	[1, 4],
];
//(1,4), (4,5), (5,7) 혹은 (2,4), (4,5), (5,7)

let numE = 7;
let testE = [
	[2, 2],
	[3, 3],
	[1, 3],
	[2, 3],
	[5, 7],
	[6, 7],
	[3, 6],
];
//(2,2), (2,3), (3,3), (3,6), (6,7)

console.log(solution(numA, testA)); // 3
console.log(solution(numB, testB)); // 2
console.log(solution(numC, testC)); // 4
console.log(solution(numD, testD)); // 3
console.log(solution(numE, testE)); // 5
