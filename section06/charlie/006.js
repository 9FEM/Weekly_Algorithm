/*

정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.
정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다. 정보왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.
왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N 번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.
그리고 1번 왕자부터 시 계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다.
한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.

예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자.
처음에는 3번 왕자가 3 을 외쳐 제외된다.
이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7 번 왕자에게 공주를 구하러갑니다.
N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.

// 입력 설명
첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.

// 출력 설명
첫 줄에 마지막 남은 왕자의 번호를 출력합니다.

*/

function solution(arr) {
	const N = arr[0], K = arr[1];
	const line = new Array(N).fill(0);  // 왕자들로 가득찬 배열을 만든다.
	let count = 1;

	for (let i = 1; i <= N; i++)  // 왕자들에게 번호를 붙인다. (index 0 = 1번 왕자)
		line[i - 1] = i;
	
	while (line.length !== 1) {  // 한 왕자만 남을때까지 반복한다.
		if (count == K) {  // 짠 왕자님 나가주세요
			line.shift();
			count = 1;
		}
		count++;  // K 만날때까지 체크
		line.push(line.shift());  // 제일 앞 왕자를 제일 뒤로 보낸다.
	}

	const answer = line[0]; // 혼자 남은 왕자 당신이 당첨!
	return answer;
}

const testA = [8, 3];
console.log(solution(testA)); // 7

const testB = [10, 3];
console.log(solution(testB)); // 4

const testC = [6, 9];
console.log(solution(testC)); // 5

/*

중간 요소를 빼야하는 문제인데, 스택 큐로 풀 수 있는가.
--> 가능할듯

계속 중간 요소를 어떻게 빼나,
빠진 왕자들만 따로 모아서 체크를 해야하나, 고민하다가

shift 와 push
혹은
pop과 unshift 를 이용하면

둥글게 둥글게
원형 리스트 처럼 만들 수 있다고 생각.


실제로 풀이가
'남남남대문을 열어라 동동동대문을 열어라' 놀이와 비슷하다.

*/