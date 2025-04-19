import{S as p,a as y,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=o.map(({webformatURL:i,largeImageURL:l,tags:e,likes:r,views:s,comments:m,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${e}"
    />
    <ul class="gallery-info">
      <li class="info-item">
        <h3 class="title">Likes</h3>
        <p class="info">${r}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Views</h3>
        <p class="info">${s}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Comments</h3>
        <p class="info">${m}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Downloads</h3>
        <p class="info">${d}</p>
      </li>
    </ul>
  </a>
</li>
`).join("");u.insertAdjacentHTML("beforeend",t),h.refresh()}function n(){u.innerHTML=""}function b(){f.classList.add("visible")}function L(){f.classList.remove("visible")}const S="49785323-b36a5eef0b3f98d7012f38339",q=o=>{y.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=t.data.hits;g(i)}).catch(t=>{console.log(t)}).finally(()=>{L()})},v=document.querySelector(".inp");document.querySelector(".btn");const a=document.querySelector(".form");document.querySelector(".gallery");a.addEventListener("submit",function(o){o.preventDefault();const t=v.value.trim();if(t===""){c.warning({title:"Warning",message:"Search field cannot be empty.",position:"topRight"}),n(),a.reset();return}n(),b();try{q(t)}catch(i){console.error(i)}finally{a.reset()}});
//# sourceMappingURL=index.js.map
