function solution(str) {
  let answer = ""; //undefined 주의

  for (let x of str) {
    if (string == x.toUpperCase()) {
      // 너 대문자 돼라
      //-질문
      answer += x.toLowerCase(); //(행위)
    } else {
      answer += x.toUpperCase(); //행위/같이 쓰는 이유 :효율성적인 측면
    }
  }
  return answer;
}

const str = "StuDY";
console.log(solution(str));
