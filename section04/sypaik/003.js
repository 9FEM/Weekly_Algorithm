/*

현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.


// 입력 설명
첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다.
학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.

// 출력 설명
첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.
*/

function solution(test) {
  let answer = 0;
  let N = test[0].length;
  let M = test.length;
  let tmp = [];

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) {
        continue;
      }
      let count = 0;
      for (let k = 0; k < M; k++) {
        let mentorRank = 0;
        let menteeRank = 0;
        for (let l = 0; l < N; l++) {
          if (test[k][l] === i) mentorRank = l + 1;
          if (test[k][l] === j) menteeRank = l + 1;
        }
        if (mentorRank < menteeRank) count++;
      }
      if (count === M) {
        answer++;
        tmp.push([i, j]);
      }
    }
  }
  return answer;
}

/* 접근방법 */
// 1. 멘토와 멘티가 될 수 있는 모든 경우의 수는?
// 2. 멘토와 멘티의 번호 찾기
// 3. 시험 등수 찾기 ==> 멘토와 멘티가 짝이 될 수 있는 경우
// 4. 단, 멘토는 멘티보다 모든 테스트에서 등수가 높아야함

const N = 4;
const M = 3;
const testA = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(testA)); // 3

const NN = 5;
const MM = 2;
const testB = [
  [1, 2, 3, 4, 5],
  [2, 1, 5, 3, 4],
];
console.log(solution(testB)); // 7
