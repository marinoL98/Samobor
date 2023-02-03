gsap.from('.navbar',{duration:0.25,y:'-100%',ease:'power1'});
gsap.from('.main2',{duration:0.45,y:'33%',ease:'power1'});
gsap.from('.main3',{duration:0.45,y:'33%',ease:'power1'});

var pin1 = document.querySelector("#pin1");
var txt = document.querySelector("#h2mapa");

pin1.onmouseover = function(){
    txt.innerHTML = "Stari Grad";
};
pin1.onclick = function(){
    window.open("https://www.samobor.hr/visit/stari-grad-samobor-p441");
};
pin2.onmouseover = function(){
    txt.innerHTML = "Glavni Trg";
};
pin2.onclick = function(){
    window.open("https://www.samobor.hr/visit/trg-kralja-tomislava-c165");
};
pin3.onmouseover = function(){
    txt.innerHTML = "Shopping";
};
pin3.onclick = function(){
    window.open("https://www.leggiero.hr/");
};
pin4.onmouseover = function(){
    txt.innerHTML = "Apartmani";
};
pin4.onclick = function(){
    window.open("https://www.apartmanija.hr/apartmani/samobor/apartman-samobor/6895");
};
document.querySelector("#m5-0").onclick = function(){
    window.open("Slike/samobor1.jpg");
};
document.querySelector("#m5-1").onclick = function(){
    window.open("Slike/samobor2.jpg");
};
document.querySelector("#m5-2").onclick = function(){
    window.open("Slike/samobor3.jpg");
};
document.querySelector("#m5-3").onclick = function(){
    window.open("Slike/samobor4.jpg");
};
document.querySelector("#m5-4").onclick = function(){
    window.open("Slike/samobor5.jpg");
};
document.querySelector("#m5-5").onclick = function(){
    window.open("Slike/samobor6.jpg");
};