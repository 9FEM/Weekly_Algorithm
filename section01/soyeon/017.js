// 중복단어제거

function solution(arr) {
  let answer;

  //행위
  //중복문자 제거 Set
  answer = [...new Set(arr)];
  answer = answer.filter((el) => typeof el !== "number"); //filter():순회하면서 필터
  return answer;
}
const arr = [5, "good", "time", "good", "time", "student"];
console.log(solution(arr));
