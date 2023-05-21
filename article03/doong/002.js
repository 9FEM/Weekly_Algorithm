/*
큰 수 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/42883

// 문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// 제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
*/

function solution(number, k) {
	let arr = [];
	for(let i = 0; i < number.length; i++) {
			while(arr[arr.length - 1] < number[i] && k > 0) {
					k--;
					arr.pop();
			}
			arr.push(number[i]);
	}
	// k가 0이 되기전에 종료되었을 경우 k개의 요소를 제거하기위해
	// 예) number ="999" k = 1일 경우 "999"가 나오는데 이 부분이 있으면 "99"가 나오게 된다. 그 이유는 9보다 작은 수는 없기때문에 push만 일어나기때문
	arr.splice(number.length - k, k);
	return arr.join('');
}

// 스택을 이용한 방법 "1924"
// 1. k = 2 일때, 1을 스택에 push
// 2. k = 2 일때, 9와 스택의 마지막 값인 1과 비교했을 때 스택의 마지막 값이 작으므로 pop한 후 9를 push, k의 값을 -1 시킨다.
// 3. k = 1 일때, 2와 스택의 마지막 값인 9와 비교했을 때 스택의 마지막 값이 크므로 push
// 4. k = 1 일때, 4와 스택의 마지막 값인 2와 비교했을 때 스택의 마지막 값이 작으므로 pop한 후 4를 push, k의 값을 -1 
// 5. k = 0 이므로 종료된다. 이제 스택 값을 문자열로 만들어주면 된다. 



// 흐음.. 테스트 케이스 10(시간초과), 12번 실패
/* 
function solution(number, k) {
	let i = 0;
	let numbers = number.split('');
	
	while(i < numbers.length && k > 0) {
			if(numbers[i] < numbers[i + 1]) {
					numbers.splice(i, 1);
					k--;
					if(i !== 0) {
							i--;
					}
			} else {
					i++;
			}
	}
	
	return numbers.join('');
} 

앞의 값과 비교했을 때 자기가 크면 살아남고 작으면 삭제
k만큼 삭제된 경우 종료
*/

let number1 = "1924";
let k1 = 2;
console.log(solution(number1, k1)); // 94

let number2 = "1231234";
let k2 = 3;
console.log(solution(number2, k2)); // 3234

let number3 = "4177252841";
let k3 = 4;
console.log(solution(number3, k3)); // 775841

let number4 = "999";
let k4 = 1;
console.log(solution(number4, k4)); // 99
