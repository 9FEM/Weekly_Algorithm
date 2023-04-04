/*
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
*/

function solution(arr) {
	arr.sort((a, b) => (b.length - a.length));
	console.log(arr[0]);
}

const testA = ["teacher", "time", "student", "beautiful", "good"];
solution(testA); // beautiful

const testB = ["Hii", "mmmmy", "name", "is", "charlie"];
solution(testB); // charlie

const testC = ["Hello", "worlld"];
solution(testC); // worlld

/*

1. 반복문으로 전체 탐색
for(let x of arr) {
	let answer 두고 가장 긴 단어로 업데이트
}

2. sort 사용

*/