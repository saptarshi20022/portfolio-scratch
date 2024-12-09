const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY>0);
});

let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    navbar.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '25px',
    duration: 270,
    reset: true
})

sr.reveal('.about,.skills,.experience,.projects,.contacts',{delay:200, origin:'top'})