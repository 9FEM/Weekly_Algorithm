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
  let max = Number.MIN_SAFE_INTEGER;  // 최대 자릿수 합 초기값 설정

  // 각 자연수의 자릿수의 합 
  for(let x of numbers) {
    x = x.toString().split('');  // 각 요소를 문자열로 변환한 후, split() 메서드를 사용하여 각 자리의 숫자를 배열에 저장
    let sum = x.reduce((a,b) => a + parseInt(b), 0);  // 배열 내의 요소들을 더한 후 sum에 저장

     // 최대 자릿수 합보다 큰 값이 나온 경우
    if(sum > max) {
      max = sum;   // 최대 자릿수 합 갱신
      answer = x.join('');  //현재 수를 문자열로 변환 join() 메서드를 사용하여 문자열로 합친 값을 answer에 저장

      // 최대 자릿수 합과 같은 경우
    } else if(sum === max) {
      if(x.join('') > answer) { //현재 수를 문자열로 변환한 후 join() 메서드를 사용하여 문자열로 합친 값과 answer와 크기를 비교하여 더 큰 값을 answer에 저장
        answer = x.join('');
      }
  }
}
  return answer;
}

const A = 7
const testA = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(A, testA)); // 137

const B = 0
const testB = [];
console.log(solution(B, testB)); // 

const C = 0
const testC = [];
console.log(solution(C, testC)); // 

const D = 0
const testD = [];
console.log(solution(D, testD)); // 
