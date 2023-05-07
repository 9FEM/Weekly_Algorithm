/*
https://school.programmers.co.kr/learn/courses/30/lessons/42839

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

* 제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

* 입출력 예
- "17" => 3
- "011"	=> 2

* 입출력 예 설명
- 예제 #1 [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.
- 예제 #2 [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.
- 11과 011은 같은 숫자로 취급합니다.
*/

// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 메인 함수
function solution(numbers) {
  let max = parseInt(
    numbers
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  ); // 나올 수 있는 가장 큰 값을 저장, [1,7]이라면 71
  let combNumbers = []; // 만들 수 있는 숫자 조합들을 저장
  let cnt = 0;

  /* max까지 for문 돌리기 */
  // i를 문자열로 만들고,
  // numbers 숫자가 포함되어 있으면 문자열에서 그 숫자를 하나씩 빼면서
  // 문자열이 비게 되는 경우(=모두 빠지면서 길이가 0)에만 combNumbers.push(i)
  // ex) 만약 numbers = "17"인 경우 i = '17'이라면 for문을 돌렸을 때''이 되어 true
  // ex) 만약 numbers = "17"인 경우 i = '11'이라면 for문을 돌렸을 때'1'이 남게 되어 false
  for (let i = 0; i <= max; i++) {
    let num = i + '';
    for (let x of numbers) {
      if (num.includes(x)) {
        num = num.replace(x, ''); // replace를 사용해 1개만 없앤다.
      }
    }
    if (num.length === 0) {
      combNumbers.push(parseInt(i));
    }
  }

  // 소수 판별 후 카운트 - 위 for문에서 아예 미리 소수를 판별할 수도 있겠다.
  for (let x of combNumbers) {
    if (isPrime(x)) {
      cnt++;
    }
  }
  return cnt;
}

const test1 = '17';
const test2 = '011';
console.log(solution(test1)); // 3
console.log(solution(test2)); // 2
