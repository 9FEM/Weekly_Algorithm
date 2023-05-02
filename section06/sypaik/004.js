/*

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// 입력 설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// 출력 설명
연산한 결과를 출력합니다.

*/

function solution(str) {
	const stack = [];
	const operators = ["+", "-", "*", "/"];

	for(let x of str) {
		if(!operators.includes(x)) {
		// 숫자인 경우 스택에 넣음
		stack.push(parseInt(x)); // 문자열이니까 parseInt
	} else {
		const operand1 =  stack.pop();
		const operand2 = stack.pop();

		switch(x) {
			case "+":
				stack.push(operand2 + operand1);
				// 오류 : 후위표기식의 계산 순서는 연산자를 만났을 때, 스택에서 꺼낸 두 수에 해당 연산자 적용
				// operand1 +-*/ operand2 가 아닌 바꿔줘야함
			break;
			case "-":
				stack.push(operand2 - operand1);
			break;
			case "*":
				stack.push(operand2 * operand1);
			break;
			case "/":
				stack.push(operand2 / operand1);
			break;
		}
	}
}
return stack.pop();
}
const testA = "352+*9-";
console.log(solution(testA)); // 12

const testB = "23+68+*"; // (2+3)*(6+8)
console.log(solution(testB)); // 70

const testC = "135*+"; // 1+3*5
console.log(solution(testC)); // 16