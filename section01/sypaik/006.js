// # 홀수

// ## 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성

// ## 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.

// ## 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

function solution(numbers) {
  let answer = [];
  let sum = 0;
  let min = 100;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
      sum += numbers[i];
      if (min > numbers[i]) {
        min = numbers[i];
      }
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

// 임의의 값 min을 주어 비교
// ## 수정사항
// for문에서 종료값을 length로 바꿈
