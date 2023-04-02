// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력

// set으로 바꾸기?
// 그 후 배열로 만든 후 join('')메소드 사용
function solution(str) {
  const strSet = new Set(str);
  const answer = Array.from(strSet).join('');
  return answer;
}

console.log(solution('ksekkset'));
