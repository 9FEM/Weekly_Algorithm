/*

입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
남은 문자만 출력한다.

*/

function solution(str) {
	let answer = "";
	let stack = [];
	let s = [];

	// 스택에 모든 문자열 추가
	for (let x of str) {
		stack.push(x);
	}

	// 스택에서 문자를 하나씩 꺼내며 괄호 안에 있는 문자열을 추출
	for(let i = 0; i < str.length; i++) {
		let bracket = stack.pop();

		if(bracket === '(') {
			while (s.pop() !== ')') {}
		} else {
			s.push(bracket)
		}
	}
	answer = s.reverse().join('');

	return answer;
}

const testA = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(testA)); // EFLM

const testB = ")H(EL))LO)";
console.log(solution(testB));  // )H)LO)

const testC = "))))))";
console.log(solution(testC));  // ))))))

const testD = "H(((())))I";
console.log(solution(testD));  // HI


// 접근 방법
// 1. 스택을 이용하여 문자열 str을 stack[] 배열에 넣어준다.
// 2. stack배열에서 하나씩 pop 하면서 str 배열에 넣어준다.
// 3. 만약 '(' 가 나오면 ')'까지 모두 삭제해야하므로 s 배열에서 닫는 괄호를 만날때까지 제거해준다. 
// 4. stack을 이용했기 때문에 반대로 들어가있으므로 마지막에 배열의 요소를 뒤집어 준다. 