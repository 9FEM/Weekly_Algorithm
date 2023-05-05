/*
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 
프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
남은 문자만 출력한다.
*/

// 풀이 1) 단순히 cnt 하기
function solutionA(s) {
  let answer = '';
  let cnt = 0;
  for (let x of s) {
    if (x === '(') {
      cnt++;
    } else if (x === ')') {
      cnt--;
    } else {
      if (cnt === 0) {
        answer += x;
      }
    }
  }
  return answer;
}
// 풀이 2) 스택 활용하기
function solutionB(s) {
  let answer = '';
  let stack = [];
  for (let x of s) {
    if (x === '(') {
      stack.push(x);
    } else if (x === ')') {
      stack.pop();
    } else {
      if (stack.length === 0) {
        answer += x;
      }
    }
  }
  return answer;
}

// 풀이 3) 비정상 적인 출력 고려
function solutionC(str) {
  let stack = [];
  let cnt = 0;

  for (const x of str) {
    if (x === ')' && cnt > 0) {
      while (stack.pop() !== '(');
      cnt--;
    } else if (x === '(') {
      cnt++;
      stack.push(x);
    } else {
      stack.push(x);
    }
  }
  return stack.join('');
}

const test = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
const test2 = ')(ABCDE)(';
const test3 = '((((((((';
const test4 = ')))))))))';

console.log(solutionA(test)); // EFLM
console.log(solutionB(test)); // EFLM
console.log(solutionC(test)); // EFLM
console.log(solutionC(test2)); // )(
console.log(solutionC(test3)); // '(((((((('
console.log(solutionC(test4)); // ')))))))))'
