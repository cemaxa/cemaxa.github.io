const btn = document.getElementById("portalBtn");
const whispers = document.querySelectorAll(".whispers span");

setInterval(()=>{

    whispers.forEach(w=>{

        const dx=(Math.random()*30)-15;
        const dy=(Math.random()*30)-15;

        w.style.transform=
            `translate(${dx}px,${dy}px)`;

    });

},1200);

btn.addEventListener("click",()=>{

    document.body.classList.add("horror");

    btn.disabled=true;
    btn.innerText="смотри...";

    setTimeout(()=>{
        window.location.href="https://t.me/+KOEmylJiUcoyNmRi";
    },3000);

});
