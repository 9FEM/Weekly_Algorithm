// # 숫자만 추출

// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다.

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  return answer;
}

// 접근방법
// 1. for문으로 순회하면서
// 2. 문자열 중 숫자 부분만 추출 ==> isNaN 사용

// test1 = "g0en2T0s8eSoft" ==> "0208"
// test2 = "tw4dg9d9" ==> "499"
// test3 = "gh0u03c0" ==> "0030"

// isNaN()
