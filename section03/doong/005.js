/*
문자열 압축
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

// 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 줄에 압축된 문자열을 출력한다.

*/

function solution(str) {
  let answer = '';
  let count = 1;
  for(let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {  // 현재 문자와 그 다음 문자가 같으면 count를 증가시킴
      count++;
    } else {  // 현재 문자와 그 다음 문자가 다르면
      answer += str[i];  // 현재 문자를 answer에 추가함
      if(count > 1) {    // 반복횟수가 1인 경우 생략 - 반복횟수가 1인 경우 생략하려면 count가 1보다 큰 경우에만 출력하도록
        answer += count;
      }
      count = 1;
    }
  }
	return answer;
}


const testA = "KKHSSSSSSSE";
console.log(solution(testA)); // K2HS7E

const testB = "DDOOONNGIIIMDDDANNGG";
console.log(solution(testB)); // D2O3N2GI3MD3AN2G2

const testC = "HAARROONNE";
console.log(solution(testC)); // HA2R2O2N2E
