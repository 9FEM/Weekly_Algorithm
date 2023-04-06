/* 총합이 정확히 100이다.
 => (9명의 가짜포함 난쟁이 - 7명의 난쟁이 == 100) 이어야 한다.*/
// 일일이 비교해야 할 것 같다. => 이중 for문
// 찾아낸 것을 빼고 배열에 넣으려면? => filter

function solution(num_list) {
  let answer = [];

  //   난쟁이 총합 구하기
  let sum = 0;
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
  }

  // 가짜 난쟁이 걸러내기
  for (let i = 0; i < num_list.length; i++) {
    for (let j = i + 1; j < num_list.length; j++) {
      if (sum - (num_list[i] + num_list[j]) === 100) {
        num_list = num_list.filter((item) => item !== (num_list[i] && num_list[j])); // num_list[i]와 num_list[j] 걸러내기
        break;
      }
    }
  }
  return num_list;
}

let dwarf = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(dwarf));
