// 모의고사

// 문제 설명
/* 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요. */

function solution(answers) {
  let answer = [];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    // i를 각 수포자의 찍기 패턴 배열의 길이로 나눈 나머지를 이용하여 찍기 패턴을 반복하도록 함
    // first[i]로 할 경우, answers의 배열의 길이가 더 긴 만큼, 수포자의 찍기 패턴이 끝나고 다시 처음부터 찍기를 반복해야 할 때, first[i], second[i], third[i]에서 배열의 길이를 벗어날 수 있기 때문. 이 경우 if문에서 비교할 대상이 없어져서 예외가 발생하게 된다. 
    if (answers[i] === first[i % first.length]) count[0]++;
    if (answers[i] === second[i % second.length]) count[1]++;
    if (answers[i] === third[i % third.length]) count[2]++;
  }

  let max = Math.max(...count);
  
  // 가장 많은 문제를 맞힌 수포자들의 번호를 answer 배열에 push
  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

let answers1 = [1, 2, 3, 4, 5];
console.log(solution(answers1));  // [ 1 ]

let answers2 = [1, 3, 2, 4, 2];
console.log(solution(answers2));  // [ 1, 2, 3 ]

// 접근방법
// 1. 1번, 2번, 3번의 정답 방식 입력
// 2. 같은 인덱스인 값 서로 비교 => 같을 경우 count 저장
// 3. count 중 max와 같은 것만 출력

