/*
모음 사전
https://school.programmers.co.kr/learn/courses/30/lessons/84512

// 문제 설명
사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다. 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.

단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
word의 길이는 1 이상 5 이하입니다.
word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.

*/

function solution(n) {
	let count = 1;
	const compare = ['A'];
	const alpha = ['A', 'E', 'I', 'O', 'U'];

	// 같은 것은 반드시 나오니, 계속 반복한다.
	while (true) {
		if (n === compare.join(''))  // 찾았다! 여기까지~ 해산!
			return count;

		if (compare.length < 5) {	// A다음은 AA, AE 다음도 AEA, 길이가 5미만이면 반드시 뒤에 A가 추가된다.
			compare.push('A');
		}
		else if (compare[compare.length - 1] === 'U') {
			while(compare[compare.length - 1] === 'U')  // 가장 오른쪽이 U면 U는 빼준다. // AAAAU -> AAAA || AAUUU -> AA
				compare.pop();
			
			compare.push(alpha[alpha.indexOf(compare.pop()) + 1]);  // 그 뒤에 끝을 바꿔준다. // AAAA -> AAAE || AA -> AE
		}
		else {
			compare.push(alpha[alpha.indexOf(compare.pop()) + 1]);  // 그 외의 경우는 끝만 바꿔준다. // AAAA -> AAAE || AA -> AE
		}
		count++;
	}
}

// 끝만 바꿔주는 방식은 pop() 한 것을 alpha 배열에서 index 찾고 그 다음 index의 값을 push() 해주는 것. 

console.log(solution('A')); // 1
console.log(solution('AA')); // 2
console.log(solution('AAAAE')); // 6
console.log(solution('AAAAU')); // 9
console.log(solution('AAAE')); // 10
console.log(solution('I')); // 1563
console.log(solution('EIO')); //1189
console.log(solution('UUUUU')); //3905

/*

A
AA
AAA
AAAA
AAAAA
AAAAE
AAAAI
AAAAO
AAAAU
AAAE
AAAEA
AAAEE
...
AUUUU
E
EA
EAA
EAAA
EAAAA
EAAAE
EAAAI
EAAAO
EAAAU
EAAE
EAAEA

*/