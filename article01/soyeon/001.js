// 특이한 정렬
// https://school.programmers.co.kr/learn/courses/30/lessons/120880
function solution(numlist, n) {
  var answer = [];
  answer = numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a); // n과 가까운 수부터 or 거리가 같다면 내림차순 정렬

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4)); //[ 4, 5, 3, 6, 2, 1 ]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); //[36, 40, 20, 47, 10, 6, 7000, 10000];
