import"./nav-a5ae4e0d.js";const r=document.querySelector(".js-portfolio"),c=document.querySelector(".js-contact"),s=document.querySelector(".js-reference"),u=document.querySelectorAll("[data-scrollTo]");u.forEach(e=>{const t=e.dataset.scrollto;e.addEventListener("click",()=>{var a;(a=document.querySelector(`.${t}`))==null||a.scrollIntoView({behavior:"smooth"})})});const d=window.location.search,i=new URLSearchParams(d),l=i.get("redir");l=="contact"&&(c==null||c.scrollIntoView());l=="portfolio"&&(r==null||r.scrollIntoView());l=="reference"&&(s==null||s.scrollIntoView());const n=document.querySelectorAll(".carousel__slide");n.forEach((e,t)=>{e.style.transform=`translateX(${t*100}%)`});let o=0;const m=n.length-1,h=()=>{o==m?o=0:o++,n.forEach((e,t)=>{e.style.transform=`translateX(${100*(t-o)}%)`})};setInterval(h,4e3);