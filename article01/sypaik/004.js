/**
 * 모의고사
 * 
 * 수포자 삼인방은 수학 문제를 전부 찍으려고 합니다.
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
 */

/* 가장 높은 점수를 받은 사람이 여럿일 경우, return 하는 값을 오름차순으로 정렬 */

function solution(answers) {

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let scores = [0, 0, 0];
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == arr1[i % arr1.length]) scores[0]++ // arr1.length == 5
        if(answers[i] == arr2[i % arr2.length]) scores[1]++ // arr2.length == 8
        if(answers[i] == arr3[i % arr3.length]) scores[2]++ // arr3.length == 10
    }
    let maxScore = Math.max(...scores); // scores 중 가장 큰 값
    let answer = [];
    for(let i = 0; i < scores.length; i++) {
        if(maxScore == scores[i]) { // maxScores가 여럿일 경우
            answer.push(i+1) // 인덱스 + 1 값 추가
        } 
    }
    return answer;
}

// const answer1 = [1, 2, 3, 4, 5] 
// console.log(solution(answer1)) // [1]

// const answer2 = [1,3,2,4,2]
// console.log(solution(answer2)) // [1, 2, 3]