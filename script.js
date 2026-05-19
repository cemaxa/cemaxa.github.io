const btn = document.getElementById("portalBtn");

btn.addEventListener("click", ()=>{

    document.body.classList.add("horror");

    btn.disabled = true;
    btn.innerText = "смотри...";

    setTimeout(()=>{
        window.location.href="https://t.me/+KOEmylJiUcoyNmRi";
    },3000);

});
