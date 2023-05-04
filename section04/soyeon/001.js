/*

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// 입력 설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.

// 출력 설명
자릿수의 합이 최대인 자연수를 출력한다.

*/

function solution(N, numbers) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i++) {
    //각 자연수의 자릿수의 합을 구하고
    let sum = numbers[i]
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum; //그 합이 최대인 자연수를 출력
      answer = numbers[i];
    } else if (sum === max) {
      //자릿수의 합이 같은 경우 원래 숫자가 큰 숫자
      if (numbers[i] > answer) {
        answer = numbers[i];
      }
    }
  }
  return answer;
}

const A = 7;
const testA = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(A, testA)); // 137

const B = 3;
const testB = [11, 233, 435, 48, 57];
console.log(solution(B, testB)); //435
