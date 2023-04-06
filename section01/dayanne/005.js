// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력

function solution(num_list) {
  let answer = num_list[0];
  for (let i = 1; i < num_list.length; i++) {
    if (answer > num_list[i]) {
      answer = num_list[i];
    }
  }
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

// 비교값을 num_list[0]으로 준 후, 이를 num_list[1]부터 비교하며 값을 넣어주었다.
// 비교값을 임의의 큰 값으로 설정해도 될 것 같다.
