/**
 * 소수 찾기
 * 
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 * 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return
 */

function solution(numbers) {
    let answer = 0;
    const nums = numbers.split('');
    const prime = new Set(); // 소수를 저장하기 위함

/* 소수 판별 */
    const isPrime = (num) => {
        if(num <= 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    }

/* 순열 이용 */
    const getPermutation = (arr, fixed) => { 
        if(fixed.length > 0 && !prime.has(Number(fixed))) { // 선택된 요소
            if(isPrime(Number(fixed))) answer++; // 배열의 선택된 한 요소가 소수인지의 여부
            prime.add(Number(fixed));
        }

        if(arr.length > 0) {
            for(let j = 0; j < arr.length; j++) {
                const newArr = [...arr];
                const newFixed = fixed + newArr.splice(j, 1)[0]; // [0]은 배열 안의 숫자를 가져오기 위함
                getPermutation(newArr, newFixed);
            }
        }
    }
        getPermutation(nums, '');

        return answer;
}

// const numbers1 = "17";
// console.log(solution(numbers1)) // 3

// const numbers2 = "011";
// console.log(solution(numbers2)) // 2