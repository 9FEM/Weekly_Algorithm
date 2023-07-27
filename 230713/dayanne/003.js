/*
이상한 문자 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
// 제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
*/

function solution(s) {
  // 띄어쓰기(' ')로 문장을 한 단어 씩 분리
  // (1) 한 글자 씩 분리
  // (2) map 메서드로 짝수번째는 대문자로, 홀수번째는 소문자로
  // (3) 글자 합쳐서 다시 단어로
  // (4) 단어 합쳐서 다시 문장으로
  const answer = s
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((str, index) => {
          return index % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
        })
        .join('');
    })
    .join(' ');
  return answer;
}

const test1 = 'try hello world';
console.log(solution(test1)); // "TrY HeLlO WoRlD"
