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

for(let i=0;i<90;i++){

    const tile=document.createElement("div");

    tile.className="tile";

    tile.style.backgroundImage=
        `url(${
            images[
                Math.floor(
                    Math.random()*images.length
                )
            ]
        })`;

    tile.style.animationDelay=
        (Math.random()*8)+"s";

    tile.style.opacity=
        .35+Math.random()*.35;

    wall.appendChild(tile);
}
