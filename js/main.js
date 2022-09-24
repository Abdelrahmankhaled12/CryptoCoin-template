let numbers = document.querySelectorAll(".box .num");
let sectionNumbers = document.querySelector(".numbers");
let started = !1;

function startCount(number) {
let goal = number.dataset.goal;
let count = setInterval(()=> {
    number.textContent= +number.textContent + 200;
    if(number.textContent == goal) {
        clearInterval(count);
    }
},3/goal)
}



window.onscroll = function() {
    if(window.scrollY >= sectionNumbers.offsetTop - 400) {
        if(!started) {
            numbers.forEach((num)=>startCount(num));
        } 
        started = !0;
    }
    if(window.scrollY >= 500) {
        btnScroll.style.display = "block";
    }else {
        btnScroll.style.display = "none";
    }
    
}

let btnScroll = document.querySelector(".scroll");

window.onclick = function() {
    btnScroll.onclick = function() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
}

new WOW().init();



jQuery(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        nav:true,
        loop:true,
        autoplay:true,
        dots: false,
        smartSpeed:1000,
        navText : [
'<i class="fa-solid fa-chevron-left"></i>',
'<i class="fa-solid fa-chevron-right"></i>'
],
responsive: {
0:{
    items:1
},
576:{
    items:2
},
768:{
    items:3
},
992:{
    items:4
},
1200:{
    items:5
}
}
    })
})

