/*
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
*/

function solution(str) {
	let answer;
	const index = parseInt(str.length / 2);

	if (str.length % 2 == 0)
		answer = str[index - 1] + str[index];
	else
		answer = str[index];
	
	console.log(answer);
}

const testA = "study";
solution(testA); // 'u'

const testB = "good";
solution(testB); // 'oo'

const testC = "hello worlde";
solution(testC); // ' w'

const testD = "A";
solution(testD); // 'A'

const testE = "AB";
solution(testE); // 'AB'
