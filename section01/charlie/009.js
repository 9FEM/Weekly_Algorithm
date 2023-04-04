/*
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
*/

function solution(str) {
	console.log(str.replace(/A/g, '#'));
}


// TEST CODE
const testA = "BANANA";
solution(testA); // B#N#N#

const testB = "AAAAAA";
solution(testB); // ######

const testC = "APPLEA";
solution(testC); // #PPLE#

/*

정규표현식 사용할때마다 구글링하지말고 기억하기.

*/Charlie: Solved, S01 008 - 009 누락된 문제 해결
