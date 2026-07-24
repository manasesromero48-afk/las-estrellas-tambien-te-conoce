// ==========================================
// INICIO DE EXPERIENCIA Y MÚSICA
// ==========================================

const startButton = document.getElementById("startButton");
const music = document.getElementById("music");


if(startButton){

    startButton.addEventListener("click",()=>{

        if(music){

            music.play();

        }

        startButton.innerHTML="✨ Nuestra historia comienza ✨";

        startButton.style.transform="scale(1.1)";

    });

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
// ESTRELLAS EXTRA
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
// EFECTO DE BRILLO AL MOVER EL MOUSE
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