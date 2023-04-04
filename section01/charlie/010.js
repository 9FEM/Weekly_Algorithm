/*
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.
*/

function solution(str, ch) {
	let answer = str.split(ch);
	
	console.log(answer.length - 1);
}

const testA = "COMPUTERPROGRAMMING";
const A = "R"
solution(testA, A); // 3

const testB = "ILOVEYOUSOMUCH";
const B = "U";
solution(testB, B); // 2

const testC = "HELLOWORLD";
const C = "A";
solution(testC, C); // 0

const testD = "ZZZZZZZZZ";
const D = "Z";
solution(testD, D); // 9

/*

생각나는 방법
1. 반복문으로 하나씩 count

2. 반복문 + indexOf 활용
Array.prototype.indexOf()
: 배열에서 지정되 요소를 찾을 수 있는 첫 번재 인덱스 반환, 존재하지 않으면 -1을 반환
-> arr.indexOf(searchElement[, fromIndex])
찾을때마다 fromIndex 바꿔주면서 count.

3. split 활용
String.prototype.split()
: string을 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다. [string -> array]
-> 지정된 문자를 기준으로 문자열을 잘라서 배열로 만듬
-> 만들어진 배열의 길이 반환.

*/