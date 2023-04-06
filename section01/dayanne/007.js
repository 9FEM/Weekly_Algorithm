// 자동차 10부제
// 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지
// 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다.

function solution(n, num_list) {
  let cnt = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 10 === n) {
      cnt++;
    }
  }
  return cnt;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
let arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr));
console.log(solution(0, arr2));
