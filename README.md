<div align="center">

# Weekly_Algorithm

</div>

### 사용 언어: JavaScript
### 참고 자료
- 자바스크립트로 하는 자료 구조와 알고리즘

<hr><br>

## 🚧 주의

- 현재 진행하는 방식은 예제를 직접 입력해야하고, 그 예제에 대한 답도 직접 입력해야 합니다.
(pdf상 기본 예제 제외)
    - 직접 만든 예제로 테스트 해봤을때 틀리다면
    → **코드를 의심하되, 예제와 예제의 답도 의심해 보아야 합니다.**
    
- 특정 알고리즘의 연습이 필요, 혹은 더 다양한 문제가 필요하다고 판단되면
    - **백준** 혹은 **프로그래머스**에 있는 해당 카테고리의 문제들이 문제집에 추가될 수 있습니다.

<br><br><br>

## 🎮 문제풀이 방식

- 두 방식 모두 코드는 같기에, 편한 방식으로 선택
- 하지만 `개발자 도구 -> console`사용의 불편함~~(귀찮음)~~으로 **2번**을 추천합니다.

<br>

### 1. HTML 파일에 작성

- 특징
    - 편하게 바로 작성 가능
    - 한번 `console` 탭을 켜놓으면 저장할때마다 코드 자동 실행
- 코드 테스트 방식
    - `live server` 로 브라우저 실행
    - 개발자 도구 실행
    - `Console` 탭에서 결과 확인
- 코드 작성 방법
    
    ```jsx
    !! 스니펫으로 HTML 기본 파일 생성.
    
    <!DOCTYPE html>
    <html lang="ko-KR">
    <head>
    	<meta charset="UTF-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title></title>
    </head>
    <body>
    
    // body 사이에 script 태그에 JavaScript 코드 작성
    <script>
    	function solution(a, b, c) {
    ...
    }
    
    // 예제 테스트 코드 작성으로 테스트
    console.log(solution(a, b, c));
    
    </script>
    
    </body>
    </html>
    
    테스트는
    - Live server 실행
    - 개발자 도구 -> Console 클릭
    ```
    
<br>

### 2. JavaScript 파일에 작성

- 특징
    - 코드를 `vscode`로 바로 돌려볼 수 있음
    - 테스트시 매번 코드 실행 해주어야 함. (`Code Runner` 단축키 있음)
- 코드 테스트 방식
    - `node.js` 설치 필요
    - `Code Runner` 라는 `Vscode Extension` 설치 필요
        
        [Visual Studio Code에서 JavaScript 실행하기](https://kmatter.tistory.com/entry/Visual-Studio-Code에서-JavaScript-실행하기)
        
- 코드 작성 방법
    
    ```jsx
    // 001.js 파일 생성
    
    // 바로 함수 작성
    function(a, b, c) {
    ...
    }
    
    // 예제 테스트 코드 작성으로 테스트
    console.log(solution(a, b, c));
    ```
    
<br><br><br>

## 🆗 코드리뷰 제출하는 방식

- 두 가지 방식 중 편한 방식 선택
- 두 방식 모두 잔디는 동일하게 심김

<br>

### 1. fork 해와서 푸는 방식

- 장점
    - 개인 `github` `repositories`에 `fork`한 `repository`가 표시됨
    - `branch` 만들 필요 없이 `main`에서 작업 가능
- 단점
    - `fork` 후에 `clone` 받으면 `local`에서는 다른 사람들의 코드를 확인하기 번거로움
    (코드 리뷰를 하기에, 필요가 없을수도 있음)
- 방법
    1. 현재 `Weekly_Algorithm` `Repository`를 `Fork`
    2. `Repository name` 은 자유롭게 작성 → 본인 `github`에 복사본 생김
    3. 새로 생긴 복사본 `clone` 후 코드 작성
    4. 자유롭게 `Commit` & `Push`
    5. `Fork` 한 `Repo`(개인 `github`에 있는 복사본) 에서 
    `Pull requests` → `New Pull Request` 선택
    6. 개인 Repo 의 `main branch` → 9FEM Repo 의 `main branch` 확인
    (개인 Repo에서 다른 branch 로 작업했다면 해당 branch)
    7. `Create pull request` 버튼 클릭 후 `Pull request` 작성

<br>

### 2. clone 후에 푸는 방식

- 장점
    - `branch` 변경 후 `git pull` 로 쉽게 다른 사람들의 코드 확인 가능
- 단점
    - `branch` 왔다 갔다 해야 하는 번거로움
    - `branch` 잘 확인 후 작업
    - `branch` 잘 확인 후 push
- 방법
    1. `Weekly_Algorithm` 바로 `clone`
    2. `branch` 생성
        1. 이름은 자유, 한번 생성해놓으면 계속 그것으로 사용
    3. 해당 `branch`로 이동
        
        ```jsx
        git branch 'branch 이름'
        git checkout 'branch 이름'
        ```
        
    4. 해당 `branch`에서 코드 작성
    5. `commit & push` 하려고 하면 나오는 명령어로 `push`
        
        ```jsx
        git push --set-upstream origin 'branch 이름'
        
        * upstream 은 로컬과 연결된 원격 저장소를 의미
        * 처음 이렇게 입력하면 앞으로는 'git push'만 입력해도 됨.
        ```
    6. `pull request` 작성  
    7. `자신의 branch` → `main branch`인지 반드시 확인!!

<br><br><br>

## ❗ Pull Request 관하여

## 1. PR 컨벤션

- 제목: **이름, 해결한 문제 명시**
- 내용: 자유
- 리뷰어: 본인을 제외하고 최소 **5명의 리뷰**가 있어야 `Merge` 가능 [기본 설정]

<br>

## 2. 과정

- 본인을 제외한 **5명의 리뷰 필요**
- **리뷰: 코드 확인** (이 사람은 이렇게 풀었구나)
- **!! 우리는 모두 관리자 권한이 있기에, 리뷰 없이 강제로 Merge 할 수 있습니다.**
    - 스터디 취지에 맞추어 권장하지 않습니다.

<br><br>

## QnA

1. 왜 디렉토리를 만드는 건가요?
    - 충돌 방지와 관리의 편의성을 위해
        - 각자 문제 푸는 속도가 다르고,
        언제 `pull request`를 남기는 때가 다르기 때문에
        - 같은 파일을 수정하는 방식으로 작성하면 충돌이 생길 수 있음
        - `‘파일_이름.js’` 등의 컨벤션이 오히려 더 불편할 것 같음
