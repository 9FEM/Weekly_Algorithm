// 연필 1 다스는 12자루
/*학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수
 를 입력하면 필요한 연필의 다스 수를 계산*/
function solution(n) {
  let cnt = 0;
  while (cnt * 12 < n) {
    cnt++;
  }
  return cnt;
}
console.log(solution(25));
console.log(solution(178));

// 올림해서 구하는 방법은?
/* function solution(n) {
 return Math.ceil(n / 12);} */
