function solution(str) {
  let answer = "";
  let middle = Math.floor(str.length / 2); //버리는 함수 :Math.floor

  if (str.length % 2 == 0) {
    //짝수면 ?
    answer = str[middle - 1] + str[middle];
  } else {
    //홀수
    answer = str[middle]; //
  }
  return answer;
}

const str = "study";
const str2 = "good";

console.log(solution(str2));
