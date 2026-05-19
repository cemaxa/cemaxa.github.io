/* TILE WALL */

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

const wall=
document.getElementById(
"tileWall"
);

for(let i=0;i<90;i++){

    const tile=
    document.createElement("div");

    tile.className="tile";

    tile.style.backgroundImage=
    `url(${
        images[
            Math.floor(
            Math.random()
            *images.length
            )
        ]
    })`;

    tile.style.animationDelay=
    (Math.random()*8)+"s";

    tile.style.opacity=
    .35+Math.random()*.35;

    wall.appendChild(tile);
}

/* SPLASHES */

const whispersBox=
document.querySelector(
".whispers"
);

const phrases=[

"見ないで",
"それは存在しない",
"あなたはここにいない",
"思い出さないで",
"記憶は嘘をつく",

"не смотри",
"память лжёт",
"они смотрят",
"это уже было",
"не вспоминай",

"YOU SAW IT",
"DO NOT LOOK",
"404",
"404",
"404",

"elle te voit",
"tu étais ici",

"erinnerst du dich",
"nicht real",

"¿quién eres?",
"esto ya pasó",

"2003.24.09",
"00:21:21",
"212121",

"誰も覚えていない",
"ここから出られない",
"見られている",
"彼らは見ている",

"ты уже видел это",
"останься",
"это не сон"
];

for(let i=0;i<32;i++){

    const s=
    document.createElement(
    "span"
    );

    s.textContent=
    phrases[
        Math.floor(
        Math.random()
        *phrases.length
        )
    ];

    const r=Math.random();

    if(r>.66){
        s.classList.add("big");
    }
    else if(r>.33){
        s.classList.add("mid");
    }
    else{
        s.classList.add("small");
    }

    s.style.left=
    Math.random()*95+"%";

    s.style.top=
    Math.random()*95+"%";

    s.style.animationDelay=
    (Math.random()*8)+"s";

    whispersBox.appendChild(s);
}

/* TV STATIC */

const audio=
new Audio(
"https://actions.google.com/sounds/v1/alarms/tv_static.ogg"
);

const btn=
document.getElementById(
"portalBtn"
);

/* CLICK */

btn.onclick=()=>{

    document.body
    .classList
    .add("horror");

    audio.volume=.35;
    audio.play();

    btn.disabled=true;
    btn.innerText=
    "они смотрят";

    setTimeout(()=>{

        window.location.href=
        "https://t.me/+KOEmylJiUcoyNmRi";

    },3000);

};
