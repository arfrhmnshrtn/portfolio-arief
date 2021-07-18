const header = document.querySelector('.header');
const bars = header.querySelector('.bars');
const nav = document.querySelector('.header .list-menu');
const navBar = document.querySelector('.header .bars i')
window.addEventListener("scroll", function(event) {
    if(this.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
  
});

bars.addEventListener('click', function(){
    nav.classList.toggle('active');
    navBar.classList.toggle('active');
});