document.addEventListener('DOMContentLoaded', () => {

    // MENU MOBILE
    const burgers = document.querySelectorAll('.navbar-burger');

    burgers.forEach(burger => {

        burger.addEventListener('click', () => {

            const target = burger.dataset.target;
            const menu = document.getElementById(target);

            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');

        });

    });

});

// NAVBAR FIXED
window.addEventListener('scroll', () => {

    const navbar = document.getElementById('mainNavbar');

    if(window.scrollY > 50){

        navbar.classList.add('navbar-fixed');

    }else{

        navbar.classList.remove('navbar-fixed');

    }

});

let index = 0;

const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");

document.getElementById("nextBtn").addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;
    updateCarousel();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;
    updateCarousel();
});

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

const form = document.getElementById("infoForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");

    let errorNombre = document.getElementById("errorNombre");
    let errorEmail = document.getElementById("errorEmail");
    let errorMensaje = document.getElementById("errorMensaje");

    let valido = true;

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        valido = false;
    }

    if (email.value.trim() === "") {
        errorEmail.textContent = "El email es obligatorio";
        valido = false;
    } else if (!email.value.includes("@")) {
        errorEmail.textContent = "Email inválido";
        valido = false;
    }

    if (mensaje.value.trim().length < 10) {
        errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres";
        valido = false;
    }

    if (valido) {
        alert("Solicitud enviada correctamente");
        form.reset();
    }
});

let fontSize = 16;

const html = document.documentElement;

document.getElementById("increaseFont").addEventListener("click", () => {
    fontSize += 1;
    html.style.fontSize = fontSize + "px";
});

document.getElementById("decreaseFont").addEventListener("click", () => {
    fontSize -= 1;
    if (fontSize < 12) fontSize = 12; // límite mínimo
    html.style.fontSize = fontSize + "px";
});

document.getElementById("resetFont").addEventListener("click", () => {
    fontSize = 16;
    html.style.fontSize = fontSize + "px";
});