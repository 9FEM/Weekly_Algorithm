/*
대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.
*/

function solution(str) {
	let answer = str.toUpperCase();
	console.log(answer);
}

const testA = "ItisTimeTOStudy";
solution(testA); // ITISTIMETOSTUDY

const testB = "I L0ve Y0u";
solution(testB); // I L0ve Y0U

const testC = "Hi, My name Is Charlie Kim";
solution(testC); // HI, MY NAME IS CHARLIE KIM


/*

string 대문자로 변환
String.prototype.toUpperCase();

string 소문자로 변환
String.prototype.toLowerCase();

*/