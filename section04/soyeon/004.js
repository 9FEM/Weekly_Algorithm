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
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    let cost = 0;
    let count = 0;

    numbers[i][0] *= 0.5; //할인
    const priceArr = numbers
      .map((value) => value.reduce((acc, cur) => acc + cur))
      .sort((a, b) => a - b);

    for (let j = 0; j < numbers.length; j++) {
      if (cost + priceArr[j] <= numbers.length) {
        cost += priceArr[j]; //비용에 상품값을 더하기
        count++;
      } else {
        numbers[i][0] *= 2; //원상복귀
        break;
      }
      answer = Math.max(count, answer);
    }
  }
  return answer;
}

const testA = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(testA)); //