let lang="en";const grid=document.getElementById("grid"),q=document.getElementById("q");
document.getElementById("clubs").innerHTML=CLUBS.map(c=>`<option value="${c.club}">${c.zh}</option>`).join("");
function render(){const t=q.value.trim().toLowerCase();
 const list=CLUBS.filter(c=>!t||c.club.toLowerCase().includes(t)||c.zh.includes(t)||c.sponsor.toLowerCase().includes(t));
 grid.innerHTML=list.length?list.map(c=>`<article class="card"><div class="club">${lang=="en"?c.club:c.zh}</div>
 <div class="sponsor">${c.sponsor}</div><div class="tag">${c.industry[lang]}</div>
 <h4>${lang=="en"?"What they do":"做什么"}</h4><p>${c.what[lang]}</p>
 <h4>${lang=="en"?"How they make money":"怎么赚钱"}</h4><p>${c.money[lang]}</p>
 <div class="cite">${c.src.map(s=>`<a href="${SOURCES[s].url}" target="_blank" rel="noopener">[${s}]</a>`).join(" ")}</div></article>`).join("")
 :`<p class="empty">${lang=="en"?"No club found yet — try another name.":"还没有这支球队，换个名字试试。"}</p>`;
 document.querySelectorAll("[data-en]").forEach(e=>e.textContent=e.dataset[lang]);
 document.getElementById("lang").textContent=lang=="en"?"中文":"English";}
document.getElementById("srclist").innerHTML=Object.entries(SOURCES).map(([k,s])=>`<li>[${k}] <a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join("");
q.addEventListener("input",render);document.getElementById("lang").onclick=()=>{lang=lang=="en"?"zh":"en";render()};render();
