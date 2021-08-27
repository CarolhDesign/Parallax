let plan2 = document.getElementById('plan2');
let plan3 = document.getElementById('plan3');
let plan4 = document.getElementById('plan4');
let plan5 = document.getElementById('plan5');
let plan6 = document.getElementById('plan6');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    plan5.style.top = value * 0.5 + 'px';
    plan3.style.top = value * 0.5 + 'px';
    plan2.style.top = value * 0.7 + 'px';
    plan4.style.bottom = value * 0 + 'px';
    plan6.style.top = value * 0.2 + 'px';
});