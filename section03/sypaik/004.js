// # 가장 짧은 문자거리

// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요

/* 도하님 풀이 참고 */
function solution(str, ch) {
  const answer = [];

  // ch를 만나는 위치를 저장하기
  const positions = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      positions.push(i);
    }
  }

  // 각 문자와 ch와의 최소 거리 계산
  for (let i = 0; i < str.length; i++) {
    let minDist = Infinity;
    for (let j = 0; j < positions.length; j++) {
      const dist = Math.abs(i - positions[j]);
      if (dist < minDist) {
        minDist = dist;
      }
    }
    answer.push(minDist);
  }

  return answer;
}

// 처음 접근방법 (반례 존재)
// 1. 문자 t를 찾고 ==> 0
// 2. for문으로 왼쪽에서 오른쪽으로 순회
// 3. for문으로 오른쪽에서 왼쪽으로 순회
// 4. Math.min으로 최솟값으로 최소거리 구하기

// s = teachermode, t = e ==> [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

// 반례
// const stringD = "zzzzzzza";
// const charD = "a";
// console.log(solution(stringD, charD));
