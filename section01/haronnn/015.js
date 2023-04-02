// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.

function solution(str) {
  let answer = "";
  let middle = Math.floor(str.length / 2); // 가운데 문자 인덱스 구하기
  if (str.length % 2 == 0) {
    answer = str[middle - 1] + str[middle]; // 짝수의 경우 가운데 인덱스 - 1, 가운데 인덱스 출력
  } else {
    answer = str[middle]; // 홀수의 경우 가운데 인덱스만 출력
  }
  return answer;
}

const str = "study";
const str2 = "good";
console.log(solution(str2));

// TODO:
// 처음 짝수의 경우 인덱스 2개를 출력할 때,
// str[middle - 1][middle] 방식으로 출력하려고 하니 undefined가 출력
// String이기 때문에 + 로 이어줄 수 있도록 수정
