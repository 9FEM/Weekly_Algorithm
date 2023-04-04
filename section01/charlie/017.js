/*
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.
*/


// arr이 배열로 들어오면 n은 쓸모가 없으므로 생략.
function solution(n, arr) {
	let answer = [];

	for (let x of arr) {
		if (answer.indexOf(x) == -1)
			answer.push(x);
	}

	console.log(answer);
}

const testA = ["good", "time", "good", "time", "student"];
solution(5, testA); // ["good", "time", "student"]

const testB = ["hello", "world", "hello", "world", "hello"];
solution(5, testB); // ["hello", "world"]

const testC = ["my", "name", "is", "charlie"];
solution(4, testC); // ["my", "name", "is", "charlie"]


/*

16번 문제는 string
17번 문제는 array

로직은 같다.

*/
