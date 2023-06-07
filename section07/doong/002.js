/*

현수는 다음 달에 결혼을 합니다.
현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다. 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.

// 입력설명
첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.
시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가는 시간이 음이 아닌 정수로 표현됩니다.

// 출력설명
첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.

*/

function solution(N, arr) {
	let answer = 0;


	return answer;
}

let numA = 5;
let testA = [[14,18],[12,15],[15,20],[20,30],[5,14]];  

let numB = 10;
let testB = [[2,10],[3,5],[4,8],[7,15],[1,5],[6,9],[10,11],[11,15],[5,8],[9,12]];

let numC = 10;
let testC = [[55,60],[60,70],[3,5],[8,15],[10,24],[5,8],[24,30],[30,32],[1,3],[35,50]];

let numD = 10;
let testD = [[2,10],[3,5],[4,8],[7,15],[1,5],[6,9],[4,11],[10,15],[5,8],[7,12]];

let numE = 100000;
let testE = [];
for (let i = 0; i < 100000; i++) {
    let left = Math.floor(Math.random() * 72);
    let right = left + Math.ceil(Math.random() * (72 - left));
    testE.push([left, right]);
}

console.time();
console.log(solution(numA, testA)); // 2
console.log(solution(numB, testB)); // 5
console.log(solution(numC, testC)); // 2
console.log(solution(numD, testD)); // 7
console.log(solution(numE, testE)); // 정답은 매번 바뀌고 정확하지 않으나, 시간 보려고 넣음
console.timeEnd();