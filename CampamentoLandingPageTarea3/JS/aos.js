

window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    const montanaFrente = document.querySelector('.montana-frente');
    const capaTexto = document.querySelector('.capa-texto');

    montanaFrente.style.transform = `translate3d(0, ${scroll * 0.5}px, 0)`;
    capaTexto.style.transform = `translate3d(0, ${scroll * 0.3}px, 0)`;
});