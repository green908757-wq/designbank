# designbank
디자인회사 소개

## 내용 편집 (admin.html)

### 사이트에서 바로 편집하기 (추천)
1. https://dnb1.co.kr/admin.html (또는 damin.html)을 열면 바로 편집 화면이 나옵니다.
2. 내용을 고친 뒤 [사이트에 저장]을 누릅니다. 1~2분 뒤 사이트에 반영됩니다.
3. 처음 저장할 때만 GitHub 저장소 이름과 토큰을 묻습니다. [기억하기]를 켜 두면 다음부터는 묻지 않습니다.
   - 토큰 만들기: GitHub → Settings → Developer settings → Fine-grained tokens → Generate new token
   - Repository access: 이 저장소만 선택 / Permissions → Contents: Read and write
- admin.html 안의 SITE_REPO 값에 저장소 이름을 적어 두면 연결 창에 미리 채워집니다.
- 저장할 때마다 GitHub에 기록(커밋)이 남아 예전 내용으로 되돌릴 수 있습니다.
- 공용 컴퓨터에서는 [기억하기]를 끄거나, 다 쓴 뒤 왼쪽 아래 [연결 끊기]를 누르세요.

### 고친 내용을 HTML 전체로 내려받아 올리기
1. https://dnb1.co.kr/admin.html (또는 damin.html)에서 내용을 고칩니다.
2. 위쪽 [전체 내려받기]를 누르면 HTML 8개와 js/common.js(새 이미지 포함)가 ZIP으로 받아집니다.
3. 압축을 풀고, GitHub 저장소의 [Add file] → [Upload files]에 압축 푼 내용을 통째로 끌어다 놓은 뒤 [Commit changes]를 누릅니다.
4. 1~2분 뒤 사이트에 반영됩니다.

### 공지사항만 HTML로 내려받아 올리기
1. admin.html → 공지사항에서 글을 고칩니다.
2. 맨 위 [HTML 내려받기]를 눌러 notice.html을 받습니다.
3. GitHub 저장소에서 [Add file] → [Upload files]로 notice.html을 올리고 [Commit changes]를 누릅니다.
- 공지 글은 notice.html 안에 들어 있습니다. 글 보기 주소는 notice.html?id=번호 입니다.

### 컴퓨터 폴더로 편집하기
크롬이나 엣지로 admin.html을 열고 [컴퓨터에 있는 사이트 폴더로 편집하기] → [사이트 폴더 열기]를 누릅니다.
바뀌기 전 파일은 `_backup/날짜-시간/` 폴더에 보관됩니다. (_backup 폴더는 GitHub에 올리지 않아도 됩니다)
