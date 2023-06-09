/*
여러 개의 쇠막대기를 레이저로 절단하려고 한다. 효율적인 작업을 위해서 쇠막대기를 아래에
서 위로 겹쳐 놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자른다. 쇠막대기와 레
이저의 배치는 다음 조건을 만족한다.

• 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다. - 쇠막대기를 다른 쇠막대기 위에 
놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓는다.
• 각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
• 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.

1. 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된다. 또한, 모든 ‘( ) ’는 반 
 드시 레이저를 표현한다.
2. 쇠막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현된다. 

▣ 입력예제 1 
()(((()())(())()))(())
▣ 출력예제 1
17

▣ 입력예제 2 
(((()(()()))(())()))(()())
▣ 출력예제 2
24
*/

/** 풀이 정리
 * 만약 ()(((()())(())()))(()) 에서
   레이저는 'l'로 표현 => l(((ll)(l)l))(l)
 * answer 변수 설정 (총 막대조각 개수),
 * laser 변수 설정 (현재 막대가 몇겹으로 겹쳐있는지에 따라 추가로 잘릴 조각 개수)
   (막대가 두겹으로 겹쳐있다면 레이저 사용 시 두겹+2 만큼의 조각이 만들어지므로 laser = 2)
 * '(' = 처음 막대기 개수 , (를 만날 때마다 laser++ & answer++
 * ')'를 만날 때마다 laser--
 * 레이저('l')를 만날 때마다 answer += laser */

function solution(s) {
  let copyS = s.replaceAll('()', 'l');
  let answer = 0;
  let laser = 0;

  for (let x of copyS) {
    if (x === '(') {
      laser++;
      answer++;
    } else if (x === ')') {
      laser--;
    } else {
      answer += laser;
    }
  }
  return answer;
}

const A = '()(((()())(())()))(())';
console.log(solution(A)); // 17

const B = '(((()(()()))(())()))(()())';
console.log(solution(B)); // 24
