/*7개의 자연수가 주어질 때, 
1) 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 
2) 고른 홀수들 중 최소값을 찾기 */

function solution(n, num_list) {
  let odd_list = [];
  let sum = 0;

  //홀수 배열만들기
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      odd_list.push(num_list[i]);
    }
  }
  // 1) 홀수 배열 sum
  for (let i = 0; i < odd_list.length; i++) {
    sum += odd_list[i];
  }
  // 2) 홀수 배열 min
  let min = odd_list[0];
  for (let i = 1; i < odd_list.length; i++) {
    if (min > odd_list[i]) {
      min = odd_list[i];
    }
  }
  return [sum, min]; // = 배열[] 형태로 리턴,
}

let arr = [12, 77, 38, 41, 53, 92, 85];

// 배열로 리턴받은 것을 하나씩 출력
let [resultSum, resultMin] = solution(3, arr);
console.log(resultSum);
console.log(resultMin);
