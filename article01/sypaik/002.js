/**
 * 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어진다.
 * 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기(가로*세로)를 return
 */

function solution(sizes) {
    let arr1 = []; // sizes[i][0] 이나 sizes[i][1] 중 가장 큰 수
    let arr2 = []; // 그 외에서 max
    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] > sizes[i][1]) {
            arr1.push(sizes[i][0]) 
            arr2.push(sizes[i][1])
        }
        else {
            arr1.push(sizes[i][1])
            arr2.push(sizes[i][0])
        }
    }
    return Math.max(...arr1) * Math.max(...arr2);
}

// const testA = [[60, 50], [30, 70], [60, 30], [80, 40]]
// console.log(solution(testA)) // 4000

// const testB = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
// console.log(solution(testB)) // 120

// const testC = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
// console.log(solution(testC)) // 133