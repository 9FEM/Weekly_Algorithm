// # 점수계산

// ## OX는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., k번째 문제는 k점으로 계산한다. 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하세요.

function solution(arr) {
  let score = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count += 1;
      score += count;
    } else {
      count = 0;
    }
  }
  return score;
}

// 반복문을 돌려야지
// 한번 맞추면 +1, n번 연속으로 맞추면 +n
// 1 0 1 2 3 0 0 1 2 모두 더한 것 ==> score

// test용
// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));
