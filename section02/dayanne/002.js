// 보이는 학생
// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에
// 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그
// 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
// ▣ 입력설명
// 첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
// ▣ 출력설명
// 선생님이 볼 수 있는 최대학생수를 출력한다.
// ▣ 입력예제 1
// 8
// 130 135 148 140 145 150 150 153
// ▣ 출력예제 1
// 5
function solution(n, numbers) {
  let cntStudent = 1;
  for (let i = 1; i < numbers.length; i++) {
    let cntFront = 0;
    for (let j = i - 1; j > -1; j--) {
      if (numbers[i] > numbers[j]) {
        cntFront++;
      }
    }
    if (cntFront === i) cntStudent++;
  }
  return cntStudent;
}

let height_list = [130, 135, 148, 140, 145, 150, 150, 153];
let height_list2 = [180, 135, 158, 150, 150, 153];
let height_list3 = [163, 163, 163, 163, 163];
let height_list4 = [163];
console.log(solution(8, height_list)); //=> 5
console.log(solution(6, height_list2)); //=> 1 / 1번째 학생이 키가 가장 큰 경우
console.log(solution(5, height_list3)); //=> 1 / 모든 학생의 키가 같은 경우
console.log(solution(1, height_list4)); //=> 1 / 학생이 1명인 경우
