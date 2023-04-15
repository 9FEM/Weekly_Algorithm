//  # 가위 바위 보

//  ## A, B 두 사람이 가위바위보 게임을 한다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력한다. 비길 경우 D를 출력한다. 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요

function solution(arr, arr2) {
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr2[i] == -2 || arr[i] - arr2[i] == 1) {
      answer += "A";
    } else if (arr[i] - arr2[i] == -1 || arr[i] - arr2[i] == 2) {
      answer += "B";
    } else {
      answer += "D";
    }
  }
  return answer;
}

// 1 vs 2 ==> 2
// 1 vs 3 ==> 1
// 2 vs 3 ==> 3

// 두 배열의 값을 비교하기 위해 반복문을 같이 돌려야한다. --> 코드를 다시 짜보니 굳이 두개의 반복문을 돌릴 필요없이 arr의 같은 인덱스의 값에서 비교하는 것이기 때문에 하나의 반복문으로 가능하다.

// test용
// test1 = [2, 3, 3, 1, 3];
// test2 = [1, 1, 2, 2, 3];
// console.log(solution(test1, test2));
