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
  const budget = numbers[0][1]; // 가지고 있는 예산
  const n = numbers[0][0]; // 상품의 개수

  numbers.shift(); 

  numbers.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let answer = 0; // 최대 학생 수
  let sum = 0;
  let count = 0;

  // [피드백]: 할인하는 상품을 골고루 선택하며 확인하기

  for (let i = 0; i < n; i++) {
    let discount = numbers[i][0] / 2;
    let discountedPrice = discount + numbers[i][1];

    if(discountedPrice > budget) {
      continue; // 할인 가격이 예산보다 크면 넘어가~!
    }

    sum += discount + numbers[i][1];
    count += 1;
  
}

/* 접근방법 */
// 1. 상품 가격이 가장 비싼게 50%할인
// 2. 싼 가격의 상품을 선택해가야한다 ==> 상품의 가격 정렬 sort
// 3. 상품을 선택하면서 남은 예산으로 다른 상품들을 살 수 있는지 계산

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
  [4, 18],
  [2, 4],
  [6, 2],
  [3, 3],
  [1, 1],
];
console.log(solution(testB)); // 4

const testC = [
  [3, 12],
  [1, 2],
  [2, 5],
  [4, 3],
  [5, 4],
  [6, 5],
];
console.log(solution(testC)); //

const testD = [];
console.log(solution(testD)); //
