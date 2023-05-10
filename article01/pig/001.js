/*
특이한 정렬
문제 설명
정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numlist, n) {
  //절대값으로 값을 빼고 ㅇㅇ math.abs
  //아 그 뺀 값이 작은 순서대로 놓는데 원래 값은 가져와야함.
  //뺀 값이 같다면 큰수를 앞에 해주는 처리가 필요함.

  var answer = [];
  answer = numlist.sort((a, b) => {
    const zero = Math.abs(a - n) - Math.abs(b - n);
    if (zero === 0) {
      return b - a;
    }
    return zero;
  });

  return answer;
}
