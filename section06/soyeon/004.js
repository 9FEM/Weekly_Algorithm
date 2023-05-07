/*

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// 입력 설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// 출력 설명
연산한 결과를 출력합니다.

*/

function solution(str) {
  let answer = 0;
  let stack = []; //숫자를 담을 스택

  for (let x of str) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let a = stack.pop(); //피연산자
      let b = stack.pop();

      if (x === "+") stack.push(b + a);
      else if (x === "-") stack.push(b - a);
      else if (x === "*") stack.push(b * a);
      else if (x === "/") stack.push(b / a);
    }
  }
  answer = stack[0];
  return answer;
}

let testA = "352+*9-";
console.log(solution(testA)); // 12

let testB = "32+45*+31/+"; //3+2+4*5+3/1
console.log(solution(testB)); //28
