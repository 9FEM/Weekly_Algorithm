function solution(str) {
  let answer = "";
  let arr = [...new Set(str)]; //메서드 Set()-> 중복을 제거! 객체/배열 kset
  answer = arr.join(""); //배열 ->string 합쳐주는 메서드 join()
  return answer;
}

const string = "ksekkset";
console.log(solution(string));

//for of문
// for(let x of str){ //-행위
//
//     if(answer.indexOf(x) == -1){
//         answer+=x;
//     }
// }
