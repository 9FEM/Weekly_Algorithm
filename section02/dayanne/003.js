// 가위 바위 보
// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

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

function solution(n, list_a, list_b) {
  for (let i = 0; i < n; i++) {
    let answer = '';
    switch (list_a[i]) {
      case 1:
        answer = list_b[i] === 3 ? 'A' : list_b[i] === 2 ? 'B' : 'D';
        break;
      case 2:
        answer = list_b[i] === 1 ? 'A' : list_b[i] === 3 ? 'B' : 'D';
        break;
      case 3:
        answer = list_b[i] === 2 ? 'A' : list_b[i] === 1 ? 'B' : 'D';
        break;
    }
    console.log(answer);
  }
}

solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
