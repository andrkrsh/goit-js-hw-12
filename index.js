import{a as b,S as w,i as S}from"./assets/vendor-D0cagnvz.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const v="47661758-276cd75f39684298817518b5c",q="https://pixabay.com/api/";async function m(e,n=1,o=15){const s=new URLSearchParams({key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:o});try{return(await b.get(`${q}?${s}`)).data}catch(t){console.error(t)}}const p=document.querySelector(".loader-btn"),g=document.querySelector(".load-more");let u;function y(e,n){const o=e.map(s=>M(s)).join("");n.insertAdjacentHTML("beforeend",o),u?u.refresh():u=new w(".gallery a")}function M({webformatURL:e,largeImageURL:n,tags:o,likes:s,views:t,comments:r,downloads:i}){return`
    <a class="gallery-item" href="${n}">
      <img src="${e}" alt="${o}" loading="lazy" />
      <div class="info">
        <p><span>Likes:</span> ${s}</p>
        <p><span>Views:</span> ${t}</p>
        <p><span>Comments:</span> ${r}</p>
        <p><span>Downloads:</span> ${i}</p>
      </div>
    </a>
  `}function B(e){e.innerHTML=""}function c(e){S.error({message:e,messageColor:"#fff",position:"topRight",backgroundColor:"#5b8cd1"})}function E(){const e=document.createElement("div");e.className="loader",document.body.appendChild(e)}function f(){const e=document.querySelector(".loader");e&&document.body.removeChild(e)}function P(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function $(){p.classList.remove("hidden")}function C(){p.classList.add("hidden")}const O=document.querySelector("form"),a=document.querySelector(".gallery"),I=document.querySelector(".load-more");let l="",d=1,h=0;O.addEventListener("submit",R);I.addEventListener("click",H);function R(e){if(e.preventDefault(),L(),B(a),l=e.currentTarget.elements.query.value.trim(),d=1,l===""){c("Please enter a search query.");return}E(),m(l,d).then(o=>{if(f(),o.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}h=o.totalHits,y(o.hits,a),o.hits.length<15||a.children.length>=h?showEndOfResultsMessage():P()}).catch(o=>{console.log(o),c("Failed to fetch images. Please try again later.")}),e.currentTarget.reset()}function H(){d+=1,$(),m(l,d).then(e=>{f(),y(e.hits,a),C(),a.children.length>=h&&(L(),showEndOfResultsMessage()),T()}).catch(e=>{f(),console.log(e),c("Failed to fetch images. Please try again later.")})}function T(){const{height:e}=a.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
