/*

한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

// 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

*/

function solution(str, ch) {
  const answer = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] == ch) { // 현재 값이 ch와 같으면 0 넣고 다시 반복한다.
			answer.push(0);
			continue;
		}

		let min = str.length;
		for (let j = 0; j < str.length; j++) { // 아니라면 반복문으로 탐색
			if (str[j] == ch) {
				min = Math.min(min, Math.abs(j - i)); // 인덱스 값의 차의 절대값(abs)과 min 을 비교하며 최솟값을 찾는다.
			}
		}
		answer.push(min);
	}
	
	return answer;
}


const stringA = "teachermode";
const charA = "e";
console.log(solution(stringA, charA)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

const stringB = "ababababab";
const charB = "a";
console.log(solution(stringB, charB)); // [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]

const stringC = "ahellogoodworld";
const charC = "a";
console.log(solution(stringC, charC)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const stringD = "agggggga";
const charD = "a";
console.log(solution(stringD, charD)); // [0, 1, 2, 3, 3, 2, 1, 0]

/*

분명 다른 방법이 있을 것 같은데
전혀 생각나지 않았습니다.

*/