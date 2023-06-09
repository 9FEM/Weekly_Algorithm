/*

문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.


// 입력설명
첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

// 출력설명
첫 줄에 자연수를 출력합니다.

*/

function solution(str) {
  let answer = parseInt(str.replaceAll(/[^0-9]/g, ''));
  return answer;
}

const testA = 'g0en2T0s8eSoft';
console.log(solution(testA)); // 208

const testB = 'tge0a1h205er';
console.log(solution(testB)); // 1205

const testC = 'df1?sa"l3j5l6j7g.l';
console.log(solution(testC)); // 13567
