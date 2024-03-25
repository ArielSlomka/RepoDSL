// declaro constantes que guardan cada elemento principal que voy a usar para hacerles modificaciones.
const navbar = document.querySelector(`.navbar`);
const titulo = document.querySelector(`.header__titulos`);

// declaro las funciones que voy a usar, con las intrucciones de lo que quiero que pase.
function hacerleCosasAlNavbar() {
    // busco el menu dentro del navbar
    let menu = navbar.querySelector('.navbar__lista');

    // agrego un setTimeout para que las cosas pasen con algo de retraso.
    setTimeout(() => {
        // agrego clase al menu
        menu.classList.add('show');
        // tomo la altura del menu y lo asigno a una variable
        let menuHeight = menu.getBoundingClientRect().height;

        // le doy al navbar la altura exacta que tiene el menu
        navbar.style.height = `${menuHeight}px`;
    }, 1000)
}

function hacerleCosasAlTitulo() {
    setTimeout(() => {
        // agrego clase al titulo
        titulo.classList.add('show');
    }, 1500)
}

// declaro Event Listeners para decidir cuándo se ejecutan las funciones y las llamo dentro.
document.addEventListener('DOMContentLoaded',  hacerleCosasAlNavbar);
document.addEventListener('DOMContentLoaded',  hacerleCosasAlTitulo);