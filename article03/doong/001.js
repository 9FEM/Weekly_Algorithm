/*
체육복
https://school.programmers.co.kr/learn/courses/30/lessons/42862


// 문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

function solution(n, lost, reserve) {
	// 체육복을 도난당한 학생들
	let newLost = lost.filter(value => !reserve.includes(value)).sort((a, b) => a - b);
	// 여분의 체육복을 가지고 있는 학생들
	let newReserve = reserve.filter(value => !lost.includes(value)).sort((a, b) => a - b);
	let count = 0;
	// 도난당하지 않은 학생 수
	let have = n - newLost.length;

	// 체육복을 빌릴 수 있는지 확인
	newLost.forEach(value => {
			if(newReserve.includes(value - 1)) {  // 앞 번호 학생이 여분의 체육복 있는지 확인
					count++;
					newReserve = newReserve.filter(num => num !== value - 1 ) // 다른 학생이 빌릴 수 없도록 배열에서 제거
			} else if(newReserve.includes(value + 1)) {  // 뒷 번호 학생이 여분의 체육복 있는지 확인
					count++;
					newReserve = newReserve.filter(num => num !== value + 1) // 다른 학생이 빌릴 수 없도록 배열에서 제거
			}
	});
	return have + count;
}

let n1 = 5;
let lost1 = [2, 4];
let reserve1 = [1, 3, 5];
console.log(solution(n1, lost1, reserve1)); // 5

let n2 = 5;
let lost2 = [2, 4];
let reserve2 = [3];
console.log(solution(n2, lost2, reserve2)); // 4

let n3 = 3;
let lost3 = [3];
let reserve3 = [1];
console.log(solution(n3, lost3, reserve3)); // 2

let n4 = 7;
let lost4 = [3, 5, 6];
let reserve4 = [4];
console.log(solution(n4, lost4, reserve4)); // 5