const header = document.querySelector('.header');
const bars = header.querySelector('.bars');
const nav = document.querySelector('.header .list-menu');
const navBar = document.querySelector('.header .bars i');
const cardAbout = document.querySelectorAll('#about .card');
const btnCardAbout = document.querySelectorAll('#about .card i');
const textHidden = document.querySelector('#about .card .hidden');

// navbar
bars.addEventListener('click', function(){
    nav.classList.toggle('active');
    navBar.classList.toggle('active');
});

// navbar sticky
window.addEventListener("scroll", function(event) {
    if(this.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
  
});

btnCardAbout.forEach(el => {
    el.addEventListener('click', function(e){
        e.target.classList.add('timbul');
        console.log(e.target);
    });
});

let typed = new Typed('.profesi', {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});