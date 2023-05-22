/*
큰 수 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/42883

// 문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// 제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
*/

function solution(number, k) {
	number = number.split('');
	
	while (true) {
			let temp = k;

			for (let i = 0; i < number.length - 1; i++) {
					if (number[i] < number[i + 1]) {
							number.splice(i, 1);
							k--;
							break ;
					}
			}
			if (k === 0 || temp === k)
					break ;
	}
	for (; k > 0; k--)
			number.pop();
	return number.join('');
}

/*
매 순간 어느 숫자를 뺴는 것이 제일 큰 수가 되는지 판단해야 한다.

1. 같은 자릿수의 수는 앞자리가 큰 수가 크다.
2. (현재 자릿수 < 다음 자릿수) 라면 현재 자릿수를 지우는 것이 크다.
2-1. 기준은 앞(높은 자릿수)부터 탐색한다.
3. '111' 처럼 앞 자릿수와 뒷 자릿수가 같은 경우를 따로 처리해줘야 한다. (아니면 무한 loop) 

//FIXME
여전히 10번 케이스에서 시간초과가 된다.
어디서 최적화를 할 수 있을까~~~ 
*/