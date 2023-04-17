/*

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 줄에 압축된 문자열을 출력한다.

*/

function solution(str) {
	let answer = [];
	answer.push(str[0])
	
	let count = 0;
	for (const x of str) {
		if (answer[answer.length - 1] === x) // 반복하면서 같은 문자면 count + 1
			count++;
		else { // 다른 문자가 나오면 그때 지금까지 쌓아온 count 와 새로운 문자를 넣어준다.
			answer.push(count);
			answer.push(x);
			count = 1;
		}
	}
	answer.push(count); // 마지막 문자는 숫자가 안들어가기 때문에 넣어줘야 한다.

	answer = answer.filter((el) => (el !== 1)).join(''); // 배열을 문자열로 바꿔주는 동시에 1이 있다면 지워준다.
	return answer;
}


const testA = "KKHSSSSSSSE";
console.log(solution(testA)); // K2HS7E

const testB = "ABCDEFFFFFFF";
console.log(solution(testB)); // ABCDEF7

const testC = "AABBAABBAA";
console.log(solution(testC)); // A2B2A2B2A2
