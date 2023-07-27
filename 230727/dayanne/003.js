/*
키패드 누르기
https://school.programmers.co.kr/learn/courses/30/lessons/67256

//문제 설명
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

kakao_phone1.png

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

*/

function solution(numbers, hand) {
  let keyboard = [
    ['*', 0, '#'],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ];
  let leftHand = [0, 0]; // (왼손 초기 위치)
  let rightHand = [2, 0]; // (오른손 초기 위치)
  let answer = '';

  for (let num = 0; num < numbers.length; num++) {
    for (let y = 0; y < keyboard.length; y++) {
      const x = keyboard[y].indexOf(numbers[num]);
      if (x === -1) continue;
      if (x === 0) {
        leftHand = [x, y];
        answer += 'L';
        break;
      } else if (x === 2) {
        rightHand = [x, y];
        answer += 'R';
        break;
      } else if (x === 1) {
        const leftDiff = Math.abs(leftHand[0] - x) + Math.abs(leftHand[1] - y);
        const rightDiff =
          Math.abs(rightHand[0] - x) + Math.abs(rightHand[1] - y);
        if (leftDiff < rightDiff) {
          leftHand = [x, y];
          answer += 'L';
        } else if (leftDiff > rightDiff) {
          rightHand = [x, y];
          answer += 'R';
        } else {
          if (hand === 'right') {
            rightHand = [x, y];
            answer += 'R';
          } else {
            leftHand = [x, y];
            answer += 'L';
          }
        }
        break;
      }
    }
  }

  return answer;
}

const numbers1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand1 = 'right';

const numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand2 = 'left';

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let hand3 = 'right';

console.log(solution(numbers1, hand1)); // "LRLLLRLLRRL"
console.log(solution(numbers2, hand2)); // "LRLLRRLLLRR"
console.log(solution(numbers3, hand3)); // "LLRLLRLLRL"
