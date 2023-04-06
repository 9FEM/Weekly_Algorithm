// 한 개의 문자열 & 특정 문자를 입력받는다.
// 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내기

// filter로 구해보자.
// 특정 문자만 배열에 집어넣은 후 배열개수 구하기
// split('')으로 배열을 만들고 filter()로 배열 집어넣기

function solution(str, alphabet) {
  let answer = str.split('').filter((word) => word === alphabet);
  return answer.length;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
