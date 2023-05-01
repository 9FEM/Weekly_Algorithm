/*

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// 입력 설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// 출력 설명
연산한 결과를 출력합니다.

*/

function solution(postfix) {
  const stack = [];

  for (let i = 0; i < postfix.length; i++) {
    const char = postfix[i];
    // 숫자인 경우에 stack에 넣어주기
    if (!isNaN(char)) {
      stack.push(char); // [3, 5, 2, 9]
    } else {
      // 연산자인 경우
      const b = stack.pop();
      const a = stack.pop();
      // 계산기 구현할 때 배웠던 eval대신 계산해주는 생성자 함수, eval보다는 덜 위험. 근데 알고리즘에서는 eval을 사용해도 될듯.
      // const result = eval(`${a}${char}${b}`) eval을 사용할 경우 이런식으로 사용.
      const result = new Function(`return ${a}${char}${b}`)();
      stack.push(result);
    }
  }
  return stack.pop();
}

const testA = '352+*9-';
console.log(solution(testA)); // 12

// 3+5*2/(7-2)
const testB = '352*72-/+';
console.log(solution(testB)); // 5

// (3+5*(4-6)/2)
const testC = '3546-*2/+';
console.log(solution(testC)); // -2

// 1. 52+
// 2. 3(52+)*
// 3. 3(52+)*9-
// 4. 21-9 = 12

//* 위 순서에서 알 수 있는 것
// 연산자를 만난경우에는 stack으로 들어간 피연산자 두개를 꺼내서 계산해야함. 예: 52+ 연산자를 만나면 5와 2를 꺼내서 계산!그리고 push
// 그리고 계산된거를 다시 push.
// 그다음 연산자를 또 만나면 다시 피연산자 두개를 꺼내서 계산 또 push
