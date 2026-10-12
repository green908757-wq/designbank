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

### 캐시(옛 화면이 계속 보이는 문제)
- 편집기가 js/common.js를 바꿀 때마다 모든 페이지의 `js/common.js?v=날짜시간`, `css/style.css?v=날짜시간` 번호를 자동으로 새로 바꿉니다. 그래서 방문자 브라우저가 옛 파일 대신 새 파일을 받습니다.
- [전체 내려받기]로 받은 파일은 항상 새 번호가 붙어 있습니다.
- css/style.css를 직접 고쳤을 때는 [전체 내려받기]로 받은 HTML을 함께 올리면 반영됩니다.
- HTML 파일 자체는 GitHub Pages가 최대 10분 동안 캐시합니다. 바로 확인하려면 Ctrl+F5(맥은 Cmd+Shift+R)를 누르세요.

### 공지사항이 사이트에 안 바뀔 때
- notice.html은 안에 들어 있는 공지 글을 직접 그립니다. js/common.js가 옛 버전이어도 공지는 정상으로 바뀝니다.
- 편집기로 공지를 한 번 저장하면 notice.html이 자동으로 이 구조로 맞춰집니다.
- 저장 후 1~2분 기다린 뒤 편집기 위쪽 [사이트 보기]를 누르면 캐시 없이 바뀐 페이지가 열립니다.
- 공지를 고치면 예전 글 보기 주소(notice-view.html)도 자동으로 notice.html로 이동하는 페이지로 바뀝니다.
- [사이트에 저장] 후 편집기가 실제 사이트에 반영됐는지 자동으로 확인해서 알려 줍니다. 5분이 지나도 반영되지 않으면 확인할 곳을 안내합니다.
