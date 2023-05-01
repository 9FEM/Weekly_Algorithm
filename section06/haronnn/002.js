/*

입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
남은 문자만 출력한다.

*/

function solution(str) {
  let answer = [];
  let arr = [];

  // 왼괄호를 arr에 담고 오른괄호가 나올 때는 arr에서 빼면서 순회할거임
  // 왼괄호 6개 오른괄호 6개
  for (const el of str) {
    if (el === '(') {
      arr.push(el);
    } else if (el === ')') {
      arr.pop();
      console.log(arr);
    } else if (arr.length === 0) {
      // arr가 0이 되면은 마지막 오른괄호라는 뜻임, 그 이후의 el들을 answer에 추가
      answer.push(el);
    }
  }
  return answer.join('');
}

const testA = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(testA)); // EFLM
