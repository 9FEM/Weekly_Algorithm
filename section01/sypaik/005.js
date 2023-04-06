// # 최솟값 구하기

// ## 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력

// ## 첫 번째 줄에 7개의 수가 주어진다.

// ## 첫 번째 줄에 가장 작은 값을 출력한다.

function solution(numbers) {
  let min = Math.min(...numbers);
  return min;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

// 다음 인덱스의 값을 비교하여 설정

// ## 수정사항
// 반례가 있기 때문에 Math.min을 이용한 방법으로 수정
