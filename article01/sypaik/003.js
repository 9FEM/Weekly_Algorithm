/**
 * 같은 숫자는 싫어
 * 
 * 배열 arr가 주어질 때, 각 원소는 0부터 9까지로 이루어져 있습니다.
 * 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수를 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
 * 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return
 */

function solution(arr)
{
    let answer = arr;
    let result = []

    for (let i = 0; i < answer.length; i++){
        if(answer[i] !== answer[i+1]){ // 다음 값과 같지 않으면
            result.push(arr[i]) // 값 추가
        }
    }
    return result;
}

/* 중복을 아예 허용안하는건 아님
function solution(arr) {
    const result = [];
    const set = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      if (!set.has(arr[i])) {
        result.push(arr[i]);
        set.add(arr[i]);
      }
    }
  
    return result;
  }
*/

// const test1 = [1, 1, 3, 3, 0, 1, 1]
// console.log(solution(test1))

// const test2 = [4, 4, 4, 3, 3]
// console.log(solution(test2))