// # 일곱 난쟁이

// ## 아홉 난쟁이 중 일곱 난쟁이를 찾고자 한다. 이를 위해 일곱 난쟁이의 키의 합이 100이 된다.
// ## 아홉 난쟁이의 키가 주어졌을 때, 일곱 난쟁이를 찾는 프로그램을 작성하자.

// ## 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

function solution(height) {
  let sum = height.reduce((a, b) => a + b, 0);

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (sum - (height[i] + height[j]) === 100) {
        height.splice(j, 1);
        height.splice(i, 1);
        return console.log(height);
      }
    }
  }
  return answer;
}

// 9개의 합에서 선택된 2개의 합을 빼서 100이 되면 2개를 제외하면 된다.
// 이중 for문을 이용하여 2개를 선택
