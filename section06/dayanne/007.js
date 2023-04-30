/*
현수는 1년 과정의 수업계획을 짜야 합니다.
수업중에는 필수과목이 있습니다. 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있
습니다.
만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 필수과목은 
C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다.

현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만
C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 됩니다

▣ 입력설명
첫 줄에 한 줄에 필수과목의 순서가 주어집니다. 모든 과목은 영문 대문자입니다.
두 번 째 줄부터 현수가 짠 수업설계가 주어집니다.(수업설계의 길이는 30이하이다)

▣ 출력설명
수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력합니다.

▣ 입력예제 1 
CBA
CBDAGE
▣ 출력예제 1
YES
*/

// 풀이 1) replace()
function solutionA(str) {
  const required = str[0];
  const plan = str[1];
  const reg = new RegExp(`[^${required}]`, 'g');

  /* 필수 과목이 아닌 과목을 모두 제거한 것과
   필수과목의 순서가 같다면 'YES' , 아니면 'NO' */
  return required === plan.replace(reg, '') ? 'YES' : 'NO';
}

// 풀이 2) 스택 활용
function solutionB(str) {
  const required = str[0];
  const plan = str[1];
  const stack = [];

  // plan - 필수 과목인 것들을 모두 stack에 push
  for (let x of plan) {
    if (required.includes(x)) {
      stack.push(x);
    }
  }
  // required - stack의 앞에서부터 빼내어 필수과목 순서를 비교
  for (let x of required) {
    let course = stack.shift();
    if (x !== course) {
      return 'NO';
    }
  }

  return 'YES';
}

const test1 = ['CBA', 'CBDAGE'];
const test2 = ['ABC', 'CBDAGE'];

console.log(solutionA(test1)); // YES
console.log(solutionA(test2)); // NO
console.log(solutionB(test1)); // YES
console.log(solutionB(test2)); // NO
