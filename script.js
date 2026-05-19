const btn=document.getElementById("portalBtn");
const layer=document.getElementById("eyesLayer");
const whispers=document.querySelectorAll(".whispers span");

/* СОЗДАЁМ ГЛАЗА */

for(let i=0;i<42;i++){

    const eye=document.createElement("div");
    eye.className="eye";

    eye.style.left=Math.random()*100+"vw";
    eye.style.top=Math.random()*100+"vh";

    const s=60+Math.random()*90;

    eye.style.width=s+"px";
    eye.style.height=s/2+"px";

    eye.style.opacity=.25+Math.random()*.5;

    layer.appendChild(eye);
}

/* ШЕПОТ */

setInterval(()=>{

    whispers.forEach(w=>{

        const dx=(Math.random()*40)-20;
        const dy=(Math.random()*40)-20;

        w.style.transform=
            `translate(${dx}px,${dy}px)`;

    });

},1200);

/* КЛИК */

btn.addEventListener("click",()=>{

    document.body.classList.add("horror");

    btn.disabled=true;
    btn.innerText="они смотрят";

    setTimeout(()=>{
        window.location.href=
            "https://t.me/cemaxa";
    },3000);

});
