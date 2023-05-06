/*

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// 입력 설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// 출력 설명
연산한 결과를 출력합니다.

*/

function solution(string) {
	let answer = 0;
	const stack = [];

	for(let x of string) {
		if (!isNaN(x)) {
			stack.push(Number(x));
		} else {
			let fv = stack.pop();   
			let sv = stack.pop();   

			if (x === "+")  stack.push(sv + fv);
			else if (x === "-") stack.push(sv - fv);
			else if (x === "*") stack.push(sv * fv);
			else if (x === "/") stack.push(sv / fv);
		}
		answer = stack[0];
	}
	return answer;
}

const testA = "352+*9-";  // (9-2-5) * 3
console.log(solution(testA)); // 12

const testB = "234*+";
console.log(solution(testB));  // 14

// 접근방법
// 1. for문을 돌며 해당 값이 숫자인지 아닌지 검사 => isNaN() 함수 이용
// 2. 숫자라면 스택에 해당 값을 숫자로 변환해서 넣어준다 => Number 이용
// 3. 연산자라면 스택에서 자료를 꺼내 각각 fv(첫번째 값), sv(두번째 값) 변수에 저장한 후 조건에 따라 연산을 한 결과를 스택에 저장
// 4. for문이 끝나면 스택의 첫 번째 인덱스에 해당하는 값이 연산 결과