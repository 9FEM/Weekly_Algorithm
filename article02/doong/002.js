/*
연속된 수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/120923

// 문제 설명
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

*/
// 다연님 아이디어 감삼다
function solution(num, total) {
	const answer = [];
	const share = Math.floor(total / num); // (4, 14)=> 3 /(5, 5)=> 1
  
  if (num % 2 === 0) {   // num이 짝수일 경우
    const middle = num / 2 - 1;  // 4 / 2 - 1 = 1
    
    for (let i = -middle; i <= middle + 1; i++) {  // i = -1, 0, 1, 2
      answer.push(share + i);    // 2, 3, 4, 5
    }
  } else {  // num이 홀수일 경우
    const middle = Math.floor(num / 2);   // 5 / 2 내림 = 2
    
    for (let i = -middle; i <= middle; i++) {   // i = -2 -1 0 1 2
      answer.push(share + i);     // -1, 0 1, 2, 3
    }
  }
  
  return answer;
}

let num1 = 3;
let total1 = 12;
console.log(solution(num1, total1)); // [3, 4, 5]

let num2 = 5;
let total2 = 15;
console.log(solution(num2, total2)); // [1, 2, 3, 4, 5]

let num3 = 4;
let total3 = 14;
console.log(solution(num3, total3)); // [2, 3, 4, 5]

let num4 = 5;
let total4 = 5;
console.log(solution(num4, total4)); // [[-1, 0, 1, 2, 3]


// ㅇ음 안되네요
// function solution(num, total) {
// 	const answer = [...Array(num)].map(x => 0); // num이 3이라면 [0, 0, 0] num의 개수만큼 배열에 넣기
// 	const share  = Math.floor(total / num); 
	
// 	if(num % 2 === 0) { 
// 			answer.splice(Math.floor(num / 2), 0, share, share + 1)
// 			answer.pop();
// 			answer.shift();
// 	} else if(num % 2 !== 0) {
// 			answer.splice(Math.ceil(num / 2), 0, share)
// 			answer.shift();
// 	}
// 	return answer;
// }



