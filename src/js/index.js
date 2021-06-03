import "../scss/styles.scss";

const header = document.querySelector(`.header`);
const logo = document.querySelector(`.header-logo svg`);

window.addEventListener(`scroll`, () => {
    if (window.pageYOffset > 1) {
        header.classList.add('header-fixed');
        logo.style.height = '50px';
    } else {
        header.classList.remove('header-fixed');
        logo.style.height = '120px';
    }
})
