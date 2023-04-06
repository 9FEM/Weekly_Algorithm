// # 중복문자제거

// ## 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램 작성
// ## 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지

function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == i) {
      answer += str[i];
    }
  }
  return answer;
}

// indexOf() 사용
// 주어진 값과 일치하는 첫 번째 인덱스를 반환하여 중복을 방지할 수 있음
