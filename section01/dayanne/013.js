// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력

function solution(str) {
  let answer = str.split('');
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].toUpperCase() === answer[i]) {
      answer[i] = answer[i].toLowerCase();
    } else {
      answer[i] = answer[i].toUpperCase();
    }
  }
  return answer.join('');
}

console.log(solution('StuDY'));
