/**
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 */

function solution(s) {
  let sArr = s.split(' '); // 공백 기준으로 나눠서 배열 만들기

  const answer = sArr.map((word) => {
    let newWord = [...word].map((each, index) => {
      // index가 0이고 짝수번째면은 대문자로
      if (index === 0 || index % 2 === 0) {
        return each.toUpperCase();
      } else {
        return each.toLowerCase();
      }
    });

    return newWord.join('');
  });

  return answer.join(' ');
}

const s = 'try hello world';
console.log(solution(s));

const s2 = 'so happy now';
console.log(solution(s2));

const s3 = 'work hard play hard';
console.log(solution(s3));
