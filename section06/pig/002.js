/*

입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
남은 문자만 출력한다.

*/

function solution(str) {
  let stack = [];
  let count = 0;

  for (x of str) {
    if (x === ")" && count > 0) {
      while (stack.pop() !== "(");
      count--;
    } else {
      if (x === "(") {
        count++;
      }
      stack.push(x);
    }
  }
  return stack.join("");
}

const testA = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(testA)); // EFLM
const testB = ")))))";
console.log(solution(testB)); // EFLM
const testC = ")(((AB";
console.log(solution(testC)); // )(((AB

/*
다만, 문자에 대한 제한조건이 없으므로
비정상적인 소괄호가 등장할 수 있다.
이때는 닫힌 소괄호를 제외하고는 출력을 해야한다고 생각할 수 있다.
ex) ')(HELLO)(' --> ')('
ex) '))))))'    --> '))))))'
	"((((("
*/
