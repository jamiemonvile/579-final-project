(()=>{!async function(t){const e=await fetch("https://zenquotes.io/api/random/cddd740191d76986397efc5c6bf0cdd7d86ca720");var n=await e.json();console.log(n);for(const t in n){const e=n[t],o=e.q,c=e.a;console.log(o,c),document.getElementById("quote").textContent=o,document.getElementById("author").textContent=c}}();const t=document.querySelector(".game-status");let e=!0,n="X",o=["","","","","","","","",""];const c=()=>`It's ${n}'s turn`;t.innerHTML=c();const a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function r(r){const d=r.target,i=parseInt(d.getAttribute("data-cell-index"));""===o[i]&&e&&(function(t,e){o[e]=n,t.innerHTML=n}(d,i),function(){let r=!1;for(let t=0;t<=7;t++){const e=a[t];let n=o[e[0]],c=o[e[1]],d=o[e[2]];if(""!==n&&""!==c&&""!==d&&n===c&&c===d){r=!0;break}}r?(t.innerHTML=`${n} has won!`,e=!1):o.includes("")?(n="X"===n?"O":"X",t.innerHTML=c()):(t.innerHTML="Game ended in a draw!",e=!1)}())}document.querySelectorAll(".cell").forEach((t=>t.addEventListener("click",r))),document.querySelector(".game-restart").addEventListener("click",(function(){location.reload()}))})();