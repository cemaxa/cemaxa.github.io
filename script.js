const images=[
"img/fuck1.jpg",
"img/fuck2.jpg",
"img/fuck3.jpg",
"img/fuck4.jpg",
"img/fuck5.jpg",
"img/fuck6.jpg",
"img/fuck7.jpg",
"img/fuck8.jpg",
    
];

const wall=document.getElementById("tileWall");

for(let i=0;i<70;i++){

    const d=document.createElement("div");
    d.className="tile";

    d.style.backgroundImage=
        `url(${images[
            Math.floor(Math.random()*images.length)
        ]})`;

    wall.appendChild(d);
}

/* ТВ ШУМ */

const audio=new Audio(
"https://actions.google.com/sounds/v1/alarms/tv_static.ogg"
);

const btn=document.getElementById("portalBtn");

btn.onclick=()=>{

    document.body.classList.add("horror");

    audio.volume=.35;
    audio.play();

    btn.innerText="они смотрят";

    setTimeout(()=>{
        window.location.href=
        "https://t.me/cemaxa";
    },3000);
};
