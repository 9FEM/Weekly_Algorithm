/*

여러 개의 쇠막대기를 레이저로 절단하려고 한다. 효율적인 작업을 위해서 쇠막대기를 아래에 서 위로 겹쳐 놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자른다.
쇠막대기와 레 이저의 배치는 다음 조건을 만족한다.
• 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다. - 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓는다.
• 각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
• 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.

아래 그림은 위 조건을 만족하는 예를 보여준다. 수평으로 그려진 굵은 실선은 쇠막대기이고, 점은 레이저의 위치, 수직으로 그려진 점선 화살표는 레이저의 발사 방향이다.
이러한 레이저와 쇠막대기의 배치는 다음과 같이 괄호를 이용하여 왼쪽부터 순서대로 표현할 수 있다.
1. 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된다. 또한, 모든 ‘( ) ’는 반 드시 레이저를 표현한다.
2. 쇠막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현된다.

위 예의 괄호 표현은 그림 위에 주어져 있다.
쇠막대기는 레이저에 의해 몇 개의 조각으로 잘려지는데, 위 예에서 가장 위에 있는 두 개의 쇠막대기는 각각 3개와 2개의 조각으로 잘려지고, 이와 같은 방식으로 주어진 쇠막대기들은 총 17개의 조각으로 잘려진다.
쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수를 구하는 프로그램을 작성하시오.

// 입력 설명
한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 괄호 문자의 개수는 최대 100,000이다.

// 출력 설명
잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.

*/

function solution(str) {
	let stack = 0;
	let answer = 0;

	for (let i = 0; i < str.length; i++) {
		if (i < str.length - 1 && (str[i] === '(' && str[i + 1] === ')')) {  // 레이저가 뚫었을 때 (왼쪽에) 잘려진 조각들 == stack
			answer += stack;
			i += 1;
		}
		else if (str[i] === '(')  // 새로운 쇠막대기 시작 stack + 1
			stack++;
		else {  // 쇠막대기 끝,  남은 쇠막대기 조각 (== 레이저가 자르고 난 오른쪽 조각)
			stack--;
			answer++;
		}
	}
	return answer;
}

const testA = "()(((()())(())()))(())";
console.log(solution(testA)); // 17

const testB = "(((()(()()))(())()))(()())";
console.log(solution(testB)); // 24

const testC = "((((((((()))))))))";
console.log(solution(testC)); // 16

const testD = "((((()()()))))";
console.log(solution(testD)); // 16

const testE = "(()(()(())())())";
console.log(solution(testE)); // 12

/*

처음 접근
'레이저가 몇개를 뚫었나?' --> 올바른 괄호처럼 계산하면 되니까 편하다

근데 개수를 계산해야한다.
원하는 답은 '쇠막대기가 몇개로 조각났나?'
-> 레이저가 뚫은 개수를 토대로 파악할 수 있을까?

--> 레이저가 뚫은 개수는 해당 레이저를 기준으로 왼쪽 (지나간 쪽) 의 조각들
--> 각 쇠막대기별로 레이저가 자르고 남은 한 조각이 있다.

---> 레이저가 뚫은 개수 + 쇠막대기 개수

*/
