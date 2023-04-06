//대문자찾기
//순회한다! -> 순회하는 함수
//해당 문자열에 알파벳대문자가 몇개 있는지가 포인트

function solution(str) {
  let answer = 0;

  for (let string of str) {
    //str의 요소
    if (string == string.toUpperCase()) {
      //대문자를 알아내는 함수
      answer += 1; // == answer++
    }
  }
  return answer;
}
const str = "KoreaTimeGood";
console.log(solution(str));
