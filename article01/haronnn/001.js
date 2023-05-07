/**
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 입출력 예 #1
 * 4에서 가까운 순으로 [4, 5, 3, 6, 2, 1]을 return합니다.
 * 3과 5는 거리가 같으므로 더 큰 5가 앞에 와야 합니다.
 * 2와 6은 거리가 같으므로 더 큰 6이 앞에 와야 합니다.
 */

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const zero = Math.abs(a - n) - Math.abs(b - n);
    // 앞 요소와 뒤 요소에 n을 뺀 절대값을 비교
    // 뺀 값이 양수, 음수가 아니라 0이 나오면 그때는 그 숫자를 비교
    if (zero === 0) {
      // 0이 나오면 숫자를 내림차순으로 return
      return b - a;
    }
    return zero; // 0이 아니면 zero그대로
  });
}

const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;
console.log(solution(numlist, n));
// [4, 5, 3, 6, 2, 1]
