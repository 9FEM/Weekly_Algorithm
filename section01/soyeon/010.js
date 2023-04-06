//문자 찾기

function solution(str, char) {
  let answer = str.split(char).length - 1;
  //   let answer = str.split(char); // string에서 R로 나눠주기["COMPUTE","P",'AMING']
  //   answer = answer.length - 1; // 길이 4에서 -1 해주기,그러면 3이 된다
  return answer;
}

const string = "COMPUTERPROGRAMMING";
const str = "R";
console.log(solution(string, str));
