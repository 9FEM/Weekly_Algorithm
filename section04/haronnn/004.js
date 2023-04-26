/*

선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다.
선생님이 가지고 있는 예산은 한정되어 있습니다.
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다.
배송비는 할인에 포함되지 않습니다.

// 입력 설명
첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다. 
두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다. 
상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.

// 출력 설명
첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다. 
선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.

*/

// function solution(numbers) {
//   // let money = numbers[0][1]; 이거 자꾸 에러남;;
//   let arr = numbers;
//   let money = arr.shift(); // 2차원 배열의 0번째 없애버리기 [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]], 2차원 배열 0번째는 money로 저장, money = [5, 28] 1번째 친구를 money로 사용예정
//   let totalArr = arr.map(([x, y]) => [x * 0.5 + y]); // 2차원 배열 첫번째 요소 50%할인하기 [[3, 6], [1, 2], [2, 3], [2, 5], [5, 3]] 그리고 그 두개를 합하기 [ [ 9 ], [ 3 ], [ 5 ], [ 7 ], [ 8 ] ]
//   totalArr = [].concat(...totalArr); // 2차원 배열을 1차원 배열로 합치기 [9, 3, 5, 7, 8]

//   let count = 0; // counting 해줄 친구
//   for (let i = 0; i < totalArr.length; i++) {
//     // 마이너스 값이 안나오기 위해서, 0으로 대체 가능할 듯?
//     if (money[1] >= totalArr[i]) {
//       count++;
//       money[1] -= totalArr[i];
//     } else {
//       break;
//     }
//   }
//   return count;
// }

//** 다시 풀어보기
function solution(numbers) {
  const n = numbers[0][0]; // 상품 개수
  const budget = numbers[0][1]; // 총 예산

  numbers.shift(); // 첫번째 항목 삭제

  numbers.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 합산한 값으로 오름차순 정렬

  let count = 0; // 할인 적용한 상품의 개수
  let total = 0; // 총 금액 및 초기화

  // 상품 목록을 하나씩 돌면서 할인 적용
  for (let i = 0; i < n; i++) {
    // 남은 예산으로는 더 이상 상품을 구매할 수 없으면 중단
    if (budget - total < numbers[i][0] / 2 + numbers[i][1]) {
      break;
    }

    // 첫 번째로 만나는 항목에만 할인 적용
    if (count === 0) {
      // 할인 적용한 상품의 가격과 할인 가격을 총 금액에 더함
      total += numbers[i][0] / 2 + numbers[i][1];
      // 할인 적용한 상품의 개수를 1 증가
      count++;
    } else {
      // 첫번째 할인 적용 이후에는 원래 가격과 할인 가격을 총 지불 금액에 더함
      total += numbers[i][0] + numbers[i][1];
      // 할인 적용한 상품의 개수를 1 증가
      count++;
    }
  }

  // 할인을 적용한 상품의 개수(count) 반환
  return count;
}

// 찰리님 케이스 가져오기
const testA = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(testA)); // 4

const testB = [
  [4, 14],
  [1, 1],
  [2, 1],
  [3, 1],
  [8, 1],
];
console.log(solution(testB)); // 4

const testC = [
  [5, 20],
  [1, 50],
  [2, 30],
  [10, 15],
  [30, 5],
  [20, 10],
];
console.log(solution(testC)); // 1

const testD = [
  [5, 50],
  [50, 0],
  [5, 20],
  [10, 3],
  [10, 2],
  [3, 3],
];
console.log(solution(testD)); // 3

//* 메모
// let filteredArr = arr.map(([x, y]) => [x * 0.5, y]); [[3, 6], [1, 2], [2, 3], [2, 5], [5, 3]]

// for (let el of filteredArr) {
//   let totalArr = [];
//   totalArr.push(el.reduce((a, b) => a + b));
// }

// 위의 코드와 아래의 코드는 같다. 훨씬 간단~

// let totalArr = filteredArr.map(([x, y]) => [x + y]);

// ======

// 마지막에 한 리팩토링
// let filteredArr = arr.map(([x, y]) => [x * 0.5, y]);
// let totalArr = filteredArr.map(([x, y]) => [x + y]);
// 위의 두 코드를 합쳐버리기
// let filteredArr = arr.map(([x, y]) => [(x * 0.5) + y]);
