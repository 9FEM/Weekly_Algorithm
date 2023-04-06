// # 10부제

// ## 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행 금지
// ## 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력

function solution(day, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 == day) {
      count += 1;
    }
  }
  return count;
}

// 일의 자리 숫자는 나머지 연산을 이용하여 구할 수 있다.
