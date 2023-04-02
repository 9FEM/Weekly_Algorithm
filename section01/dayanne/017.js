// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력

function solution(n, str_list) {
  const strSet = new Set(str_list);
  return Array.from(strSet);
}

let arr = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(5, arr));
