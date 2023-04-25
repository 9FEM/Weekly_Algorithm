/*

선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
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


function solution(budget, product) {
  // 초기화
  let answer = 0;
  let n = product.length;

  product.sort((a, b) => a[0] - b[0]);   // 오름차순 정렬

  // for문 돌면서 모든 상품이 한번씩 할인받는 경우 
  for(let i = 0; i < n; i++) { 
    let money = budget - (product[i][0] / 2 + product[i][1]);  // 총 예산 구하기 // 할인받은 금액을 전체 예산에서 뺀다.
    let count = 1;
    for(let j = 0; j < n; j++) {
      if(j !== i && (product[j][0] + product[j][1]) > money) break; // 사려고하는 것이 남은 예산보다 큰 경우 break;
      if(j !== i && (product[j][0] + product[j][1]) <= money) {  // 남은예산보다 작거나 같을 경우
        money -= (product[j][0] + product[j][1]);  // 전체에서 비용 빼주기
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
  
	return answer;
}

const budget = 28;
const product = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(budget, product)); // 4

const budget2 = 10;
const product2 = [[5, 2], [2, 5], [4, 4]];
console.log(solution(budget2, product2)); // 

const budget3 = [];
const product3 = [];
console.log(solution(budget3, product)); // 

const budget4 = [];
const product4 = [];
console.log(solution(budget4, product)); // 
