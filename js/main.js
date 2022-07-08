
const wrap = document.querySelector('#wrap');
const pushAside = wrap.querySelector('.push-aside');
const beWrap = document.querySelector('#behindWrap');
const img_inner = beWrap.querySelector('.img_inner');
const back = beWrap.querySelector('.back');
const detail = document.querySelector(".detail");
const li = detail.querySelectorAll("li");
const popup = document.querySelector("#popup");
const popTit = popup.querySelector(".popup-title");
const popDesc = popup.querySelector(".popup-desc");
const popImg = popup.querySelector(".img-box img");

pushAside.addEventListener('click',()=>{
  wrap.classList.add("moving")
})

back.addEventListener('click',()=>{
  wrap.classList.remove("moving")
})

const 목표 ={
  img:"img1.jpg",
  title:"앞으로의 목표!",
  desc:"일단 엘리스 AI 트랙을 하는 동안은 프론트엔드에 몰두하려고 합니다!"
}
const 스킬 ={
  img:"img2.jpg",
title:"관심 분야 및 스킬",
desc:"관심분야는 당연히!! 프론트엔드가 쓰는 Tools 입니다.",
item:"HTML, CSS, SCSS, JavaScript, React.js, Next.js"
}
const 기대 ={
  img:"img3.jpg",
title:"Elice AI Track의 기대점!",
desc:"프론트, 백 둘 다 배울 수 있다는 점에서 너무 기대가 큽니다!!\n 또한 Elice를 통해 제가 얼만큼 성장 할 수 있는지도 기대가 됩니다~!"
}
const Dear ={
  img:"img4.jpg",
title:"Dear. Racer",
desc:"짧으면 짧고 길면 긴 5~6개월동안 아무 탈 없이\n완주 할 수 있도록 다 같이 힘내셨으면 좋겠습니다!"
}
const 취미 ={
  img:"img5.jpg",
title:"About ME",
desc:{
  취미 : '음악듣기(발라드)',
  특기 : "는 없는거 같아여..ㅎㅎ",
  좋아하는음료:"아이스 아메리카노~",
  최근본영화 : "닥터스트레인지 : 혼돈의 멀티버스(맞나?ㅋㅋ)",
  저는:"내향적이지만 친해지면 조금 외향적으로 바뀌는? 그런 사람입니다!"
}
}

for(let p of li){
    if(p.classList.contains('item1')){
      p.addEventListener("click",()=>{
        popup.classList.add("on")
        popImg.src = `./img/${목표.img}`
        popTit.innerText = `${목표.title}`;
        popDesc.innerText = `${목표.desc}`;
      })
    }
    else if(p.classList.contains('item2')){
      p.addEventListener("click",()=>{
        popup.classList.add("on")
        popImg.src = `./img/${기대.img}`
        popTit.innerText = `${기대.title}`;
        popDesc.innerText = `${기대.desc}`;
      })
    }
    else if(p.classList.contains('item3')){
      p.addEventListener("click",()=>{
        popup.classList.add("on")
        popImg.src = `./img/${스킬.img}`
        popTit.innerText = `${스킬.title}`;
        popDesc.innerText = `${스킬.desc}\n\n제가 쓸 수 있는 툴은\n${스킬.item}\n 정도가 있습니다!`;
      })
    }
    else if(p.classList.contains('item4')){
      p.addEventListener("click",()=>{
        popup.classList.add("on")
        popImg.src = `./img/${취미.img}`
        popTit.innerText = `${취미.title}`;
        popDesc.innerText = `취미 : ${취미.desc.취미}\n특기 : ${취미.desc.특기}\n좋아하는 음료 : ${취미.desc.좋아하는음료}\n최근 본 영화 : ${취미.desc.최근본영화}\n저는 : ${취미.desc.저는}\n`;
      })
    }
    else{
      p.addEventListener("click",()=>{
        popup.classList.add("on")
        popImg.src = `./img/${목표.img}`
        popTit.innerText = `${목표.title}`;
        popDesc.innerText = `${목표.desc}`;
      })
    }
  }
  img_inner.addEventListener('click',()=>{
    popup.classList.add("on")
    popImg.src = `./img/${Dear.img}`
    popTit.innerText = `${Dear.title}`;
    popDesc.innerText = `${Dear.desc}`;
  })


  popup.addEventListener('click',()=>{
    popup.classList.remove("on")
  })
