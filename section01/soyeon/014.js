function solution(n) {
  let answer = "";
  let max = 0; ////5//길이 7(teacher)//9(beautiful)

  for (let x of n) {
    //순회 -for of문
    //6명
    if (x.length > max) {
      //질문 :누가 젤 긴지(비교대상 만들어주기)
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

const ex = [5, "teacher", "time", "student", "beautiful", "good"];
console.log(solution(ex));
