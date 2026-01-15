function sonido(){
    const audio = document.getElementById("hoverSound");
    audio.currentTime = 0;
    audio.play();
}

// Animaciones al hacer scroll
const elementos = document.querySelectorAll('.anim');

window.addEventListener('scroll', ()=>{
    const trigger = window.innerHeight * 0.85;
    elementos.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < trigger){
            el.classList.add('visible');
        }
    });
});

let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dots span");

function showSlide(i){
    index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
});

setInterval(() => {
    index = (index + 1) % dots.length;
    showSlide(index);
}, 5000);

showSlide(0);

