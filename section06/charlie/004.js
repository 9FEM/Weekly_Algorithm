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
	const operator = ['+', '-', '*', '/'];  // if많이 안 쓰고 indexOf로 처리하기 위해서

	for (const x of str) {
		const oper = operator.indexOf(x);  // operator 입니까 숫자 입니까
		if (oper === -1) // 숫자면 그냥 넣고 지나가세요
			stack.push(x);
		else {
			let secondNum = stack.pop();  // 나중에 넣은 숫자 == 첫번째 빼는 숫자 (A * B 에서 B)
			let firstNum = stack.pop();  // 먼저 넣은 숫자 == 두번째 빼는 숫자 (A * B 에서 A)

			const temp = 'return ' + firstNum + ' ' + operator[oper] + ' ' + secondNum;  // return 을 넣는게 중요하구나!
			const result = new Function(temp)();  // 저도 new Function 써봤습니다. eval() 쓰지말고 쓰라고 권장되는 new Function(str) --> str에 들어있는 문자열을 자바스크립트 코드로 인식해 실행합니다.

			stack.push(result);
		}
	}
	const answer = stack.pop();
	return answer;
}

// 3 * (5 + 2) - 9
const testA = "352+*9-";
console.log(solution(testA)); // 12

// 5 + 5 + 5 + 5 + 5
const testB = "55555++++";
console.log(solution(testB)); // 25

// 5 + 5 + 6 * 5 + 8 / 4 - 5
const testC = "5565*++84/+5-";
console.log(solution(testC)); // 37


/*

*** new Function 참고 ***

const result = new Function(str)(); 하면 실행 결과 return


const result = new Function(str); 하면
result(); 해야 결과 return

*/