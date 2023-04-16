/*

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 
반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 
프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 줄에 압축된 문자열을 출력한다.

*/

// function solution(str) {
//   let answer = [];
//   let strArr = str.split("");
//   let count = 0;
//   for (let i = 0; i < strArr.length; i++) {
//     count = 0;
//     for (let j = i; j < strArr.length; j++) {
//       if (strArr[i] === strArr[j]) {
//         count++;
//       }
//     }
//     if (count > 1) {
//       answer.push(strArr[i], count);
//       i += count - 1;
//     } else {
//       answer.push(strArr[i]);
//     }
//   }
//   answer = answer.join("");
//   return answer;
// }
// 위에 코드로 해결해주실분..

function solution(str) {
  let answer = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer.push(str[i]);
      if (count > 1) {
        answer.push(count);
      }
      count = 1;
    }
  }

  return answer.join("");
}

const testA = "KKHSSSSSSSE";
console.log(solution(testA)); // K2HS7E

const testB = "DDUUIIFF";
console.log(solution(testB)); //

const testC = "DDFGFFRGGG";
console.log(solution(testC)); //
