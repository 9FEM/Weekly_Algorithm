/*

5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19


N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

// 최대합을 출력합니다.

*/

function solution(board) {
	let max = 0;

	// 행 열
	for (let i = 0; i < board.length; i++) {
		let rowSum = 0;
		let columnSum = 0;
		for (let j = 0; j < board.length; j++) {
			rowSum += parseInt(board[i][j]);  // 행
			columnSum += parseInt(board[j][i]);  // 열
		}
		max = Math.max(max, rowSum, columnSum);
	}

	// 대각선
	let crossSum = 0;
	let reverseCrossSum = 0;
	for (let i = 0; i < board.length; i++) {
		crossSum += parseInt(board[i][i]);  // 좌 상단 우 하단 대각선
		reverseCrossSum += parseInt(board[i][board.length - i - 1]);  // 좌 하단 우 상단 대각선
	}
	max = Math.max(max, crossSum, reverseCrossSum);

	return max;
}



const boardA = [[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11], 
[11, 25, 50, 53, 15], 
[19, 27, 29, 37, 27], 
[19, 13, 30, 13, 19]];
console.log(solution(boardA)); // 155

const boardB = [[1, 2, 3, 4, 5], 
[2, 3, 4, 5, 6], 
[3, 4, 5, 6, 7], 
[4, 5, 6, 7, 8], 
[5, 6, 7, 8, 9]];
console.log(solution(boardB)); // 35

const boardC = [[10, 10, 10, 10, 10], 
[10, 10, 10, 10, 10], 
[10, 10, 11, 10, 10], 
[10, 10, 10, 11, 10], 
[10, 10, 10, 10, 11]];
console.log(solution(boardC)); // 53


/*
	결국 전부 탐색을 해야하는 문제 아닐까.
*/
