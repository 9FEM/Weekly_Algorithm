//한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내기

// toUpperCase()를 사용했을 때 그대로인 문자열들을 반환

function solution(str) {
  let answer = str.split('').filter((word) => word.toUpperCase() === word);
  return answer.length;
}

console.log(solution('KoreaTimeGood'));
