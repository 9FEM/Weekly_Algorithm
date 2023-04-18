// # 가장 짧은 문자거리

// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요

function solution(s, t) {
  let answer = [];
  let distance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      distance = 0;
    } else {
      distance++;
    }
    answer.push(distance);
  }
  distance = 0; // 초기화

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      distance = 0;
    } else {
      distance++;
    }
    answer[j] = Math.min(answer[j], distance);
  }

  return answer;
}

// 접근방법
// 1. 문자 t를 찾고 ==> 0
// 2. for문으로 왼쪽에서 오른쪽으로 순회
// 3. for문으로 오른쪽에서 왼쪽으로 순회
// 4. Math.min으로 최솟값으로 최소거리 구하기

// s = teachermode, t = e ==> [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]
