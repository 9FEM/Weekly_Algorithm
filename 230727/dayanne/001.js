/*
전력망을 둘로 나누기
https://school.programmers.co.kr/learn/courses/30/lessons/86971

// 문제 설명
n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.

송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.


 */
function solution(n, wires) {
  // 1) 연결이 가장 많이 된 송전탑을 끊기?
  // 2) 완전 탐색으로 다 세봐서 가장 비슷하게 나눠진 경우의 차이 절대값을 리턴
  //    둘로 나눠졌다는 것을 어떻게 확인하지? -> 그룹 A, B로 나눠서 카운트!

  let answer = 100; // 최대 송전탑 개수

  for (let i = 0; i < wires.length; i++) {
    const copyWires = [...wires]; // wires 복제하기
    const [cutWire] = copyWires.splice(i, 1); // 한 개의 wire를 제거
    const A = new Set([cutWire[0]]); // 트리 A
    const B = new Set([cutWire[1]]); // 트리 B

    while (copyWires.length > 0) {
      let isConnected = false;
      for (let j = 0; j < copyWires.length; j++) {
        const currWire = copyWires[j];
        if (A.has(currWire[0]) || A.has(currWire[1])) {
          A.add(currWire[0]);
          A.add(currWire[1]);
          copyWires.splice(j, 1);
          isConnected = true;
          break;
        } else if (B.has(currWire[0]) || B.has(currWire[1])) {
          B.add(currWire[0]);
          B.add(currWire[1]);
          copyWires.splice(j, 1);
          isConnected = true;
          break;
        }
      }

      if (!isConnected) break;
    }

    const diff = Math.abs(A.size - B.size);
    if (diff < answer) {
      answer = diff;
    }
  }
  return answer;
}

const n1 = 9;
const wires1 = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

const n2 = 4;
const wires2 = [
  [1, 2],
  [2, 3],
  [3, 4],
];
const n3 = 7;
const wires3 = [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
];

console.log(solution(n1, wires1)); // 3
console.log(solution(n2, wires2)); // 0
console.log(solution(n3, wires3)); // 1
