const nav1 = document.querySelector('#nav__contacts');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}



nav1.addEventListener('click', () => {
    scrollTo(document.querySelector('#contacts'));
})