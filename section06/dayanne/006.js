/*
왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N
번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다. 그리고 1번 왕자부터 시
계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다. 한 왕자가 K(특정숫자)를 외치면 그 
왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다. 그리고 다음 왕자부터 다시 
1부터 시작하여 번호를 외친다.
이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.

예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 처음에는 3번 왕자가 3
을 외쳐 제외된다. 이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 

▣ 입력설명
첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다
▣ 출력설명
첫 줄에 마지막 남은 왕자의 번호를 출력합니다.

▣ 입력예제 1 
8 3
▣ 출력예제 1
7
*/

// 풀이 1)
function solutionA(n, k) {
  // 왕자들의 번호로 배열 만들어놓기
  let princes = new Array(n).fill(0).map((_, index) => index + 1);
  // k-1번째 위치를 저장
  let index = 0;
  while (princes.length > 1) {
    // 더해진 index값이 princes.length를 초과하는 것을 막아주기
    index = (index + k - 1) % princes.length;
    // 빼내기
    princes.splice(index, 1);
  }
  // 마지막으로 남은 prince 반환
  return princes[0];
}

// 풀이 2) 스택, 큐 활용
// function solutionB(n, k) {}

console.log(solutionA(8, 3));
// console.log(solutionB(8, 3));
