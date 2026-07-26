//=========================================
// INTRO CINEMATOGRÁFICA
//=========================================

const introItems=document.querySelectorAll(".hidden");

let delay=800;

introItems.forEach(item=>{

    setTimeout(()=>{

        item.classList.add("show");

    },delay);

    delay+=1200;

});



// ==========================================
// INICIO DE EXPERIENCIA Y MÚSICA
// ==========================================

const startButton = document.getElementById("startButton");
const audioPlayer = document.getElementById("music");


if(startButton){

    startButton.addEventListener("click",()=>{

        if(audioPlayer){

            audioPlayer.play();

        }

        startButton.innerHTML="✨ Nuestra historia comienza ✨";

        startButton.style.transform="scale(1.1)";

    });

}



// ==========================================
// REPRODUCTOR PROFESIONAL
// ==========================================

const playButton = document.getElementById("playButton");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const player = document.querySelector(".music-player");


if(audioPlayer && playButton){


    playButton.addEventListener("click",()=>{


        if(audioPlayer.paused){


            audioPlayer.play();

            playButton.textContent="⏸";


            if(player){

                player.classList.add("music-playing");

            }


        }else{


            audioPlayer.pause();

            playButton.textContent="▶";


            if(player){

                player.classList.remove("music-playing");

            }


        }


    });



    audioPlayer.addEventListener("loadedmetadata",()=>{


        if(progress){

            progress.max = audioPlayer.duration;

        }


        if(duration){

            duration.textContent =
            formatTime(audioPlayer.duration);

        }


    });



    audioPlayer.addEventListener("timeupdate",()=>{


        if(progress){

            progress.value =
            audioPlayer.currentTime;

        }


        if(currentTime){

            currentTime.textContent =
            formatTime(audioPlayer.currentTime);

        }


    });



    if(progress){

        progress.addEventListener("input",()=>{


            audioPlayer.currentTime =
            progress.value;


        });

    }


}



function formatTime(seconds){


    let minutes =
    Math.floor(seconds / 60);


    let secondsFinal =
    Math.floor(seconds % 60);



    if(secondsFinal < 10){

        secondsFinal =
        "0" + secondsFinal;

    }


    return minutes + ":" + secondsFinal;


}



// ==========================================
// CARTAS OCULTAS
// ==========================================

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("click",()=>{


        card.classList.toggle("open");


    });


});



// ==========================================
// ANIMACIÓN AL APARECER
// ==========================================

const elements = document.querySelectorAll(
".section, .card, .cover, #letter"
);



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });


},

{
    threshold:.2
}

);



elements.forEach(el=>{


    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition="1s";


    observer.observe(el);


});



// ==========================================
// RAZONES ALEATORIAS
// ==========================================

const reasonButton =
document.getElementById("reasonButton");


const reasonText =
document.getElementById("reasonText");



const reasons=[


"Porque tu forma de ser hace especial cualquier momento ✨",

"Porque tienes una manera única de iluminar los días 🌙",

"Porque cada recuerdo contigo tiene un valor especial 💜",

"Porque hay personas que llegan y dejan una huella bonita ⭐",

"Porque mereces saber lo importante que eres 💫"

];



if(reasonButton){


    reasonButton.addEventListener("click",()=>{


        let random =
        Math.floor(Math.random()*reasons.length);


        reasonText.innerHTML =
        reasons[random];


    });


}



// ==========================================
// ESTRELLAS FLOTANTES
// ==========================================

function createStar(){


    const star =
    document.createElement("span");


    star.className="floating-star";


    star.style.left =
    Math.random()*100+"vw";


    star.style.animationDuration =
    (5+Math.random()*10)+"s";


    document.body.appendChild(star);



    setTimeout(()=>{


        star.remove();


    },15000);


}


setInterval(createStar,700);



// ==========================================
// ESTRELLAS FUGACES
// ==========================================

function createShootingStar(){


    const star =
    document.createElement("div");


    star.className="shooting-star";


    star.style.left =
    Math.random()*100+"vw";


    star.style.top =
    Math.random()*40+"vh";


    star.style.animationDuration =
    (2 + Math.random()*3)+"s";


    document.body.appendChild(star);



    setTimeout(()=>{


        star.remove();


    },5000);


}


setInterval(createShootingStar,3500);



// ==========================================
// ABRIR CARTA + PARTICULAS
// ==========================================

const letter =
document.getElementById("letter");



if(letter){


    letter.addEventListener("click",()=>{


        letter.classList.add("open");



        for(let i=0;i<25;i++){


            const sparkle =
            document.createElement("span");


            sparkle.className="sparkle";


            sparkle.style.left="50%";

            sparkle.style.top="50%";



            sparkle.style.setProperty(
                "--x",
                (Math.random()*300-150)+"px"
            );


            sparkle.style.setProperty(
                "--y",
                (Math.random()*300-150)+"px"
            );



            letter.appendChild(sparkle);



            setTimeout(()=>{


                sparkle.remove();


            },2000);


        }


    });


}



// ==========================================
// EFECTO DE MOUSE
// ==========================================

document.addEventListener("mousemove",(e)=>{


    document.body.style.setProperty(
        "--x",
        e.clientX+"px"
    );


    document.body.style.setProperty(
        "--y",
        e.clientY+"px"
    );


});

// ==========================================
// JUEGO ATRAPA LAS ESTRELLAS
// ==========================================

const startGame =
document.getElementById("startGame");

const starGame =
document.getElementById("starGame");

const scoreText =
document.getElementById("score");

const gameMessage =
document.getElementById("gameMessage");


let score = 0;


if(startGame){


startGame.addEventListener("click",()=>{


    score = 0;

    scoreText.innerHTML =
    "Estrellas encontradas: 0 ⭐";


    gameMessage.innerHTML =
    "";


    let gameTime = 20;


    const timer =
    setInterval(()=>{


        createGameStar();


    },700);



    setTimeout(()=>{


        clearInterval(timer);


        gameMessage.innerHTML =
"✨ Encontraste " + score + " estrellas... pero ninguna brilla como la persona que inspiró esta historia 🌙💙";


    },20000);



});

}



function createGameStar(){


    const star =
    document.createElement("span");


    star.className="game-star";


    star.innerHTML="⭐";


    star.style.left =
    Math.random()*85+"%";


    star.style.top =
    Math.random()*80+"%";


    starGame.appendChild(star);



    star.addEventListener("click",()=>{


        score++;


        scoreText.innerHTML =
        "Estrellas encontradas: "
        + score +
        " ⭐";


        star.remove();


    });



    setTimeout(()=>{


        star.remove();


    },2000);


}

// ==========================================
// CONSTELACIÓN DE RECUERDOS
// ==========================================

const constellation =
document.getElementById("constellation");


const memoryMessage =
document.getElementById("memoryMessage");


const memories = [

"✨ Hay personas que llegan y hacen especial cualquier momento.",

"🌙 Algunos recuerdos brillan incluso con el paso del tiempo.",

"⭐ Cada estrella guarda una pequeña historia.",

"💙 Lo más bonito no siempre se ve, a veces se siente.",

"🌌 Algunas personas son como estrellas: únicas e imposibles de olvidar."

];


if(constellation){


let discovered = 0;


const totalStars = memories.length;



memories.forEach((memory,index)=>{


    const star =
    document.createElement("span");


    star.className="memory-star";

    star.innerHTML="⭐";


    star.style.left =
    (15 + index*17) + "%";


    star.style.top =
    (20 + Math.random()*50) + "%";



    constellation.appendChild(star);



    star.addEventListener("click",()=>{


        if(star.classList.contains("found")){

            return;

        }


        star.classList.add("found");


        discovered++;


        star.style.opacity=".4";


        memoryMessage.innerHTML =
        memory;



        if(discovered === totalStars){


            setTimeout(()=>{


                memoryMessage.innerHTML =

                "🌌✨ Has descubierto toda la constelación... " +

                "cada estrella guardaba un recuerdo, " +

                "pero la más brillante siempre será la historia que llevas en el corazón ⭐💙";


                constellation.classList.add("complete");


            },800);


        }


    });



});


}

// ==========================================
// EL CIELO RESPONDE
// ==========================================


const responseStars = 
document.querySelectorAll(".response-star");


const skyMessage =
document.getElementById("skyMessage");


const finalStar =
document.getElementById("finalStar");



let starsFound = 0;



responseStars.forEach(star => {


    star.addEventListener("click",()=>{


        // Evitar tocar la misma estrella varias veces

        if(star.classList.contains("found")){

            return;

        }



        star.classList.add("found");

        star.classList.add("active");

        createSparkles(star);

        starsFound++;



        skyMessage.innerHTML = 
        star.dataset.message;



        setTimeout(()=>{

            star.classList.remove("active");

        },800);




        // Cuando todas las estrellas fueron descubiertas

        if(starsFound === responseStars.length){



            setTimeout(()=>{


                skyMessage.innerHTML =

                "✨ Has escuchado todos los mensajes del cielo... ahora una última estrella tiene algo que decirte 🌌";



                finalStar.style.display="block";



            },1500);



        }



    });



});




// Estrella final

if(finalStar){


    finalStar.addEventListener("click",()=>{


        skyMessage.innerHTML =


        "💙 Algunas personas brillan tanto que hasta las estrellas quieren conocerlas ✨";


        finalStar.style.transform =

        "translate(-50%,-50%) scale(1.5)";


    });


}

// ==========================================
// PARTICULAS AL TOCAR ESTRELLAS
// ==========================================


function createSparkles(star){


    for(let i = 0; i < 15; i++){


        const sparkle =
        document.createElement("span");


        sparkle.className =
        "sparkle-particle";


        const x =
        (Math.random()*120-60)+"px";


        const y =
        (Math.random()*120-60)+"px";



        sparkle.style.setProperty(
            "--x",
            x
        );


        sparkle.style.setProperty(
            "--y",
            y
        );



        sparkle.style.left =
        star.offsetLeft + "px";


        sparkle.style.top =
        star.offsetTop + "px";



        document
        .getElementById("skyBox")
        .appendChild(sparkle);



        setTimeout(()=>{

            sparkle.remove();

        },1500);


    }

}

/*==================================================
      HERO CINEMATOGRÁFICO
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const photo = document.getElementById("heroPhoto");
    const glow = document.getElementById("photoGlow");

    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");

    const line = document.getElementById("line");

    const title = document.getElementById("title");
    const name = document.getElementById("name");

    const button = document.getElementById("startJourney");

    const hero = document.getElementById("hero");

    const starsLayer = document.getElementById("starsLayer");


    /*=============================
        CREAR ESTRELLAS
    =============================*/

    function createStars(){

        for(let i=0;i<180;i++){

            const star=document.createElement("div");

            star.className="star";

            star.style.left=Math.random()*100+"%";

            star.style.top=Math.random()*100+"%";

            star.style.animationDelay=Math.random()*3+"s";

            star.style.opacity=Math.random();

            star.style.transform=`scale(${Math.random()+0.3})`;

            starsLayer.appendChild(star);

        }

    }

    createStars();


    /*=============================
        EFECTO MÁQUINA
    =============================*/

    function typeWriter(element,text,speed){

        return new Promise(resolve=>{

            let i=0;

            element.innerHTML="";

            element.classList.add("show");

            const interval=setInterval(()=>{

                element.innerHTML+=text.charAt(i);

                i++;

                if(i>=text.length){

                    clearInterval(interval);

                    resolve();

                }

            },speed);

        });

    }


    /*=============================
        PELÍCULA
    =============================*/

    async function intro(){


        /* Espera inicial */

        await new Promise(r=>setTimeout(r,1200));


        /* Halo */

        glow.classList.add("show");


        /* Foto */

        photo.classList.add("show");


        /* Espera a que termine de enfocarse */

        await new Promise(r=>setTimeout(r,4200));


        await typeWriter(

            text1,

            "Hay personas que llegan para quedarse en el corazón...",

            45

        );


        await new Promise(r=>setTimeout(r,800));


        await typeWriter(

            text2,

            "Hoy quiero celebrar a una de ellas.",

            45

        );


        await new Promise(r=>setTimeout(r,700));


        line.classList.add("show");


        await new Promise(r=>setTimeout(r,600));


        title.classList.add("show");


        await new Promise(r=>setTimeout(r,700));


        name.classList.add("show");


        await new Promise(r=>setTimeout(r,700));


        button.classList.add("show");

    }

    intro();



    /*=============================
        COMENZAR VIAJE
    =============================*/

    button.addEventListener("click",()=>{


        hero.style.transition="2s";

        hero.style.transform="scale(1.15)";

        hero.style.opacity="0";


        /* Música */

        const music=document.getElementById("backgroundMusic");

        if(music){

            music.play().catch(()=>{});

        }


        setTimeout(()=>{

            hero.style.display="none";

        },2000);

    });

});

/*==================================
UNIVERSO INTERACTIVO
==================================*/

const universeMessages = {

    interstellar:{
        title:"🌌 Interstellar",
        text:"Esta película me recordó a ti porque habla del tiempo, de las personas importantes y de cómo algunas conexiones trascienden cualquier distancia."
    },

    aot:{
        title:"⚔️ Attack on Titan",
        text:"Cada vez que veía algo relacionado con este anime me acordaba de que era uno de tus favoritos."
    },

    nature:{
        title:"🌿 Naturaleza",
        text:"Sé que disfrutas los lugares tranquilos, los árboles y esos momentos donde todo parece estar en paz."
    },

    travel:{
        title:"✈️ Viajar",
        text:"Ojalá puedas conocer todos los lugares que sueñas y vivir aventuras increíbles."
    },

    music:{
        title:"🎵 Música",
        text:"Siempre hay canciones que terminan guardando recuerdos especiales."
    },

    photo:{
        title:"📷 Fotografía",
        text:"Cada fotografía captura un instante... y algunos instantes merecen quedarse para siempre."
    },

    flowers:{
        title:"🌹 Rosas",
        text:"Porque las rosas me recuerdan la delicadeza y la belleza."
    },

    clash:{
        title:"👑 Clash Royale",
        text:"No podía faltar uno de los juegos que sé que te gusta."
    },

    survivor:{
        title:"🎮 Survivor.io",
        text:"Otro pequeño detalle que fui conociendo sobre ti."
    }

};

/*=========================
CONFIGURACIÓN
=========================*/

let universeFound = 0;
const totalUniverseItems = 9;

const heart = document.querySelector(".center-heart");
const items = document.querySelectorAll(".planet-item[data-id]");

if(heart){
    heart.classList.add("heart-locked");
}

/*=========================
CLICK EN LOS PLANETAS
=========================*/

items.forEach(item=>{

    item.addEventListener("click",()=>{

        const info = universeMessages[item.dataset.id];

        openUniverseModal(info.title,info.text);

        // Marcar como visitado
        if(!item.classList.contains("visited")){

            item.classList.add("visited");

            universeFound++;

            if(universeFound===totalUniverseItems){

                unlockHeart();

            }

        }

    });

});

/*=========================
DESBLOQUEAR CORAZÓN
=========================*/

function unlockHeart(){

    heart.classList.remove("heart-locked");

    heart.classList.add("heart-unlocked");

}

/*=========================
CLICK EN EL CORAZÓN
=========================*/

if(heart){

    heart.addEventListener("click",()=>{

        if(!heart.classList.contains("heart-unlocked")){

            alert("💖 Primero descubre todos los pequeños detalles del universo.");

            return;

        }

        openUniverseModal(

            "❤️ El centro de todo este universo",

`Todo este pequeño universo fue construido con las cosas que fui descubriendo sobre ti.

Cada película...
Cada canción...
Cada juego...
Cada viaje...
Cada pequeño detalle...

Todos terminaron formando este universo.

Pero si tuviera que escoger la estrella más bonita...

te escogería a ti.

✨ Feliz cumpleaños, Katling. ❤️`

        );

    });

}

/*=========================
VENTANA
=========================*/

function openUniverseModal(title,text){

    const modal=document.createElement("div");

    modal.className="memoryModal";

    modal.innerHTML=`

        <div class="memoryBox">

            <h2>${title}</h2>

            <p>${text}</p>

            <button>Cerrar</button>

        </div>

    `;

    document.body.appendChild(modal);

    modal.querySelector("button").onclick=()=>{

        modal.remove();

    };

    modal.onclick=(e)=>{

        if(e.target===modal){

            modal.remove();

        }

    };

}

function unlockHeart(){

    heart.classList.remove("heart-locked");

    heart.classList.add("heart-unlocked");

}

/*==========================
REPRODUCTOR FINAL
==========================*/

const giftAudio=document.getElementById("giftAudio");

const giftPlay=document.getElementById("giftPlay");

const giftProgress=document.getElementById("giftProgress");

const giftCurrent=document.getElementById("giftCurrent");

const giftDuration=document.getElementById("giftDuration");

if(giftAudio){

    giftAudio.addEventListener("loadedmetadata",()=>{

        giftProgress.max=giftAudio.duration;

        giftDuration.textContent=formatTime(giftAudio.duration);

    });

    giftAudio.addEventListener("timeupdate",()=>{

        giftProgress.value=giftAudio.currentTime;

        giftCurrent.textContent=formatTime(giftAudio.currentTime);

    });

    giftProgress.addEventListener("input",()=>{

        giftAudio.currentTime=giftProgress.value;

    });

    giftPlay.addEventListener("click",()=>{

        const cover=document.querySelector(".giftCover");

if(giftAudio.paused){

    giftAudio.play();

    giftPlay.innerHTML="❚❚";

    cover.classList.add("playing");

}else{

    giftAudio.pause();

    giftPlay.innerHTML="▶";

    cover.classList.remove("playing");

}

giftAudio.addEventListener("ended",()=>{

    giftPlay.innerHTML="▶";

    cover.classList.remove("playing");

});

    });

}