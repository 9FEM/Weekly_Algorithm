/**
 * 특이한 정렬
 * 
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다
 * 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return
 */

/**
 * numlist는 중복된 원소를 갖지 않습니다.
 */

function solution(numlist, n) {
    return numlist.sort((a, b) => 
    Math.abs(a - n) - Math.abs(b - n) == 0 ? b - a : Math.abs(a - n) - Math.abs(b - n)); 
    // 둘의 차가 같으면 오름차순 (거리가 같으면 더 큰 수)
}

// const numlistA = [1, 2, 3, 4, 5, 6]
// const n1 = 4
// console.log(solution(numlistA, n1)) // [4, 5, 3, 6, 2, 1]

// const numlistB = [10000, 20, 36, 47, 40, 6, 10, 7000]
// const n2 = 30
// console.log(solution(numlistB, n2)) // [36, 40, 20, 47, 10, 6, 7000, 10000]

// const numlistC = [10, 20, 26, 30, 40]
// const n3 = 23
// console.log(solution(numlistC, n3)) // [26, 20, 30, 10, 40]