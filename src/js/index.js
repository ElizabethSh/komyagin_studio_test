import "../scss/styles.scss";

const header = document.querySelector(`.header`);
const logo = document.querySelector(`.header-logo svg`);
const tabSection = document.querySelector(`.tabs`);
const activeTab = tabSection.querySelector(`.tab-header-active`);
const tabList = tabSection.querySelector(`.tab-header-wrap`);

window.addEventListener(`scroll`, () => {
    if (window.pageYOffset > 1) {
        header.classList.add('header-fixed');
        logo.style.height = '50px';
    } else {
        header.classList.remove('header-fixed');
        logo.style.height = '120px';
    }
});

activeTab.addEventListener(`click`, () => {
    tabSection.classList.toggle(`closed`);
});

tabList.addEventListener(`click`, (evt) => {
    activeTab.textContent = evt.target.textContent;
    tabSection.classList.add(`closed`);
});
