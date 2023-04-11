// 큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
// 성하세요.(첫 번째 수는 무조건 출력한다)

function solution(arr) {
  const answer = [];
  answer.push(arr[0]);  // 첫번쨰 수는 무조건 출력해야하기때문에 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer.join(' ');  // join(' ') - 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
}
const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

//////////////

function solution(num, arr) {
  return arr.filter((el) => el >= num).join(' ');
}
console.log(solution(6, [7, 3, 9, 5, 6, 12]));


// ▣ 입력예제 1 
// 6
// 7 3 9 5 6 12

// ▣ 출력예제 1
// 7 9 6 12