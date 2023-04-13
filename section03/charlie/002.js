/*

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.


// 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// 출력설명
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

*/

// NOTE
// 어떤 글에서 면접에서 펠린드롬 관련 문제가 나왔는데,
// 조건이 'reverse() 사용 불가' 이었다고 한다.
// 여유가 된다면 'reverse()' 사용 없이 풀어보자.


function solution(str) {
  alpha = str.split('').filter((e) => /[a-zA-Z]/.test(e)).join(('')).toUpperCase();
	// array로 만들어서, filter로 알파벳만 남기고, 다시 string으로 만들어주고, 대문자로 바꿔준다.
	const reverseAlpha = alpha.split('').reverse().join('');
	// array로 만들어서, 뒤집고, 다시 string으로 만들어준다.

	if (alpha === reverseAlpha)
		return "YES";
	return "NO";
}


// REVIEW
// // 'reverse()' 사용 안한 버전
// function solution(str) {
// 	alpha = str.split('').filter((e) => /[a-zA-Z]/.test(e)).join(('')).toUpperCase();
	
// 	for (let i = 0, j = alpha.length - 1; i <= j; i++, j--) {
// 		if (alpha[i] !== alpha[j])
// 			return "NO";
// 	}
// 	return "YES";
// }


const testA = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(testA)); // YES

const testB = "A-123-B456A"
console.log(solution(testB)); // YES

const testC = "Hell0000o1111oLL++E3H";
console.log(solution(testC)); // YES

const testD = "a123456789b";
console.log(solution(testD)); // NO

/*

*입력 조건에서 '공백이 없는' 조건이 불필요하다고 생각합니다. (어차피 알파벳 이외의 문자는 무시하므로)

1. 알파벳만 쏙 뽑아서 새로운 문자열(혹은 배열)을 만든다.
	- 만든 새로운 문자열을 뒤집어 비교한다.

2. 양 끝에서 하나씩 훑어가며 반복한다.

*/