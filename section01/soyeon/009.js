//A를 #으로
//동사를 !영어단어로 생각해보ㄱㅣ

function solution(str) {
  let answer = str.replaceAll(/A/g, "#");
  return answer;
}
const string = "BANANA";
console.log(solution(string));
