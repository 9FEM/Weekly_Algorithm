/*
후위식 연산(postfix)
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
-> 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 입력예제 
352+*9-

▣ 출력예제 
12
*/

// 계산해 주는 함수
function calculate(operation, num1, num2) {
  switch (operation) {
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
  }
}

function solution(postfix) {
  const stack = [];
  for (let x of postfix) {
    // x가 숫자면 stack에 넣기
    if (x >= '0' && x <= '9') {
      stack.push(parseInt(x));
    } else {
      // x가 연산자면 넣었던 숫자 두개로 계산하기
      let num2 = stack.pop();
      let num1 = stack.pop();
      stack.push(calculate(x, num1, num2));
    }
  }
  return stack[0];
}

const postfixA = '352+*9-';
const postfixB = '324*+93/-';
const postfixC = '79+12+/';
console.log(solution(postfixA)); // 12
console.log(solution(postfixB)); // 8
console.log(solution(postfixC)); // 5.333333333333333
