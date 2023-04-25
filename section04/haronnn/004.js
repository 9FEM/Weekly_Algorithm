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

function solution(numbers) {
  // let money = numbers[0][1]; 이거 자꾸 에러남;;
  let arr = numbers;
  let money = arr.shift(); // 2차원 배열의 0번째 없애버리기 [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]], 2차원 배열 0번째는 money로 저장, money = [5, 28] 1번째 친구를 money로 사용예정
  let totalArr = arr.map(([x, y]) => [x * 0.5 + y]); // 2차원 배열 첫번째 요소 50%할인하기 [[3, 6], [1, 2], [2, 3], [2, 5], [5, 3]] 그리고 그 두개를 합하기 [ [ 9 ], [ 3 ], [ 5 ], [ 7 ], [ 8 ] ]
  totalArr = [].concat(...totalArr); // 2차원 배열을 1차원 배열로 합치기 [9, 3, 5, 7, 8]

  let count = 0; // counting 해줄 친구
  for (let i = 0; i < totalArr.length; i++) {
    // 마이너스 값이 안나오기 위해서, 0으로 대체 가능할 듯?
    if (money[1] >= totalArr[i]) {
      count++;
      money[1] -= totalArr[i];
    } else {
      break;
    }
  }
  return count;
}

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
  [6, 32],
  [4, 3],
  [8, 2],
  [10, 3],
  [2, 5],
  [4, 2],
  [6, 4],
];
console.log(solution(testB)); // 5

const testC = [
  [4, 20],
  [2, 5],
  [6, 2],
  [2, 4],
  [8, 2],
];
console.log(solution(testC)); // 3

const testD = [
  [8, 40],
  [4, 3],
  [2, 1],
  [6, 2],
  [4, 2],
  [10, 3],
  [4, 4],
  [6, 2],
  [6, 4],
];
console.log(solution(testD)); // 7

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
