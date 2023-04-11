// 가위 바위 보
// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, 
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면

// 회수         1 2 3 4 5
// A의 정보     2 3 3 1 3
// B의 정보     1 1 2 2 3
// 승자         A B A B D

// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
// 을 작성하세요.

function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < 5; i++) {
    if (arr1[i] === arr2[i]) {
      answer += "D" + " ";
    } else if (arr1[i] === 1 && arr2[i] === 3) {
      answer += "A" + " ";
    } else if (arr1[i] === 2 && arr2[i] === 1) {
      answer += "A" + " ";
    } else if (arr1[i] === 3 && arr2[i] === 2) {
      answer += "A" + " ";
    } else {
      answer += "B" + " ";
    }
  }
  return answer;
}

const arr1 = [2, 3, 3, 1, 3];
const arr2 = [1, 1, 2, 2, 3];

console.log(solution(arr1, arr2));


// ▣ 입력예제 1 
// 5
// 2 3 3 1 3
// 1 1 2 2 3
// ▣ 출력예제 1
// A
// B
// A
// B
// D