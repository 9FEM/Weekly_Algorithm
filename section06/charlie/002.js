/*

입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
남은 문자만 출력한다.

*/

function solution(str) { // 정상적인 Input만 들어온다고 가정하면 되는 코드
	let stack = 0;
	let answer = "";

	for (let x of str) {
		if (x === '(')
			stack++;
		else if (x === ')')
			stack--;
		else if (stack === 0)
			answer += x;
	}
	return answer;
}

function solution2(str) { // 비정상적인 Input도 처리가 가능한 코드
	let stack = [];
	let left = 0;

	for (const x of str) {
		if (x === ')' && left) {  // right, 닫는 괄호 나올때 (근데 그 전에 먼저 Left, 여는 괄호가 나와야 한다.)
			while (stack.pop() !== '(')  // 앞에 먼저 나온 여는 괄호까지 다 pop으로 버려준다.
				;
			left--;  // left, 여는 괄호 개수 - 1
		} else {
			if (x === '(')
				left++;  // left, 여는 괄호 개수 + 1
			stack.push(x);  // 닫는 괄호 나올때까지 모두 넣어준다.
		}
	}
	const answer = stack.join('');  // 남은것 다 return.
	return answer;
}

const testA = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution2(testA)); // EFLM

const testB = ")(HELLO)(";
console.log(solution2(testB)); // )(

const testC = "((((((";
console.log(solution2(testC)); // ((((((

const testD = "UP(UP(UP DOWN)DOWN)DOWN)))";
console.log(solution2(testD)); // UPDOWN)))

/*

단순히 정상적인 Input만 들어온다고 가정하면 쉽다.
(소괄호가 딱 딱 맞춰서 닫히는 경우)

다만, 문자에 대한 제한조건이 없으므로
비정상적인 소괄호가 등장할 수 있다.
이때는 닫힌 소괄호를 제외하고는 출력을 해야한다고 생각할 수 있다.
ex) ')(HELLO)(' --> ')('
ex) '))))))'    --> '))))))'

*/

// 이걸 해결하기 위해서는 조건문에 조건만 살짝 추가해주면 된다.
