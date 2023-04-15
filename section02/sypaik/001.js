// # 큰 수 출력하기

// ## N(1 <= N <= 100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요

function solution(N, numbers) {
  let answer = [];
  answer.push(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      answer.push(numbers[i]);
    }
  }
  return answer;
}

// test용
// N = 6, arr = [7, 3, 9, 5, 6, 12]
// N = 3, arr = [1, 5, 8]
