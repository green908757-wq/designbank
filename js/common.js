const GALLERIES = {
  namecard: [["namecards1.jpg",1277,630],["namecards2.jpg",1312,786]],
  promo: [
    ["33.jpg",400,548],["10.jpg",400,526],["2.jpg",400,544],["24.jpg",400,484],["5.jpg",393,393],
    ["7.jpg",393,505],["16.jpg",410,410],["19.jpg",393,530],["14.jpg",393,295],["36.jpg",386,709],
    ["1.jpg",483,341],["27.jpg",407,548],["12.jpg",407,567],["26.jpg",407,606],["30.jpg",407,579],
    ["9.jpg",407,1111],["20.jpg",407,407],["15.jpg",406,1250],
    ["28.jpg",278,300],["4.jpg",349,872],["34.jpg",349,309],["35.jpg",349,233],["25.jpg",349,329],
    ["26-2.jpg",351,1045],["21.jpg",351,473],["22.jpg",349,233],["23.jpg",351,504],["18.jpg",350,408],["13.jpg",351,368]
  ],
  other: [
    ["27.jpg",393,310],["28.jpg",396,1232],["21.jpg",393,334],["31.jpg",393,2344],["1.jpg",393,334],["3.jpg",392,522],
    ["35.jpg",407,560],["23.jpg",407,1119],["31-2.jpg",407,426],["32.jpg",407,1245],["14.jpg",407,917],["37.jpg",407,898],
    ["34.jpg",407,1664],["20.jpg",406,454],["6.jpg",406,525],["9.jpg",406,287],["10.jpg",405,287],["4.jpg",406,836],["24.jpg",406,621]
  ]
};
const POSTS = [
  {id:1,title:"디자인제작문의",date:"2026.06.10",body:"디자인제작문의."}
];


/* 공통: 메뉴 */
const header=document.getElementById("header");
const menuBtn=document.querySelector(".menu-btn");
menuBtn.addEventListener("click",()=>{const o=header.classList.toggle("menu-open");menuBtn.setAttribute("aria-expanded",o)});
const group=document.body.dataset.group, page=document.body.dataset.page;
document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===group)a.setAttribute("aria-current","page")});

/* 이미지 자리 */
function makePh(el,src,w,h,alt){
  el.classList.add("ph");
  if(w&&h) el.style.aspectRatio=w+"/"+h;
  const name=document.createElement("span");name.className="fname";name.textContent=src;
  const img=new Image();img.alt=alt||"";img.loading="lazy";img.src=src;
  img.onerror=()=>img.remove();
  el.append(name,img);
  el.addEventListener("click",()=>{if(el.contains(img)&&img.naturalWidth)openLb(img.src)});
}
document.querySelectorAll("[data-gallery]").forEach(box=>{
  const key=box.dataset.gallery;
  GALLERIES[key].forEach(([f,w,h])=>{const d=document.createElement("div");makePh(d,"images/"+key+"/"+f,w,h,"포트폴리오 이미지");box.append(d)});
});
document.querySelectorAll(".ph[data-src]").forEach(el=>makePh(el,el.dataset.src,null,null,el.dataset.alt));

/* 포트폴리오 탭 */
document.querySelectorAll(".pf-tabs").forEach(t=>{
  t.innerHTML=[["namecard","명함"],["promo","홍보물"],["other","기타"]]
    .map(([k,l])=>`<a href="${k}.html"${k===page?' aria-current="page"':''}>${l}</a>`).join("");
});

/* 라이트박스 */
const lb=document.getElementById("lightbox");
function openLb(src){if(!lb)return;lb.querySelector("img").src=src;lb.classList.add("on")}
if(lb){lb.addEventListener("click",()=>lb.classList.remove("on"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("on")});}

/* 공지사항 목록 */
const bodyEl=document.getElementById("board-body");
if(bodyEl){
  const render=(q="")=>{
    const list=POSTS.filter(p=>p.title.includes(q));
    bodyEl.innerHTML=list.length?list.map(p=>`<tr><td><a href="notice-view.html?id=${p.id}">${p.title}</a></td><td class="date">${p.date}</td></tr>`).join("")
      :'<tr class="empty"><td colspan="2">검색 결과가 없습니다. 다른 검색어를 입력해 보세요.</td></tr>';
  };
  document.getElementById("q").addEventListener("input",e=>render(e.target.value.trim()));
  render();
}
/* 공지사항 상세 */
const postEl=document.getElementById("post");
if(postEl){
  const id=Number(new URLSearchParams(location.search).get("id"))||POSTS[0].id;
  const p=POSTS.find(x=>x.id===id);
  postEl.innerHTML=p?`<h3>${p.title}</h3><time>${p.date}</time><hr><div class="body">${p.body}</div><a class="back" href="notice.html">목록으로</a>`
    :'<p>글을 찾을 수 없습니다. 목록에서 다시 선택해 주세요.</p><a class="back" href="notice.html">목록으로</a>';
}
