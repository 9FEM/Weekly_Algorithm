/*

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// 입력 설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// 출력 설명
연산한 결과를 출력합니다.

*/

function solution(str) {
  let answer = str.split("");
  let stack = [];

  for (let i in answer) {
    if (!isNaN(answer[i])) {
      stack.push(answer[i]);
    } else {
      const b = parseFloat(stack.pop());
      const a = parseFloat(stack.pop());
      switch (answer[i]) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
  }
  return stack;
}

const testA = "352+*9-";
console.log(solution(testA)); // 12
const postfixB = "444*+2-";
console.log(solution(postfixB)); // 18
const postfixC = "1111+++";
console.log(solution(postfixC)); // 4
