/*
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

예를 들어 N=5이면
회수    12345
A의 정보 23313
B의 정보 11223
승자    ABABD

두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.

// 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다. 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다. 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.

// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
*/

function solution(n, personA, personB) {
	const answer = [];

	for (let i = 0; i < n; i++) {
		if (personA[i] == personB[i])
			answer.push('D');
		else if ((personA[i] === 3 && personB[i] === 1) || (personA[i] < personB[i]))
			answer.push('B');
		else
			answer.push('A');
	}
	return answer;
}


const numA = 5;
const personA = [2, 3, 3, 1, 3];
const personB = [1, 1, 2, 2, 3];
console.log(solution(numA, personA, personB)); // A B A B D

const numB = 5;
const personC = [1, 1, 2, 2, 3];
const personD = [1, 1, 2, 2, 3];
console.log(solution(numB, personC, personD)); // D D D D D

const numC = 5;
const personE = [3, 1, 3, 2, 3];
const personF = [1, 3, 2, 3, 1];
console.log(solution(numC, personE, personF)); // B B A B B
