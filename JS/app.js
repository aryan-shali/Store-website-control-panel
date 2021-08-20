// varible of menu item
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
let o3 = document.getElementById("o3");
let o4 = document.getElementById("o4");
let o5 = document.getElementById("o5");
// varible of menu item red part
let sp1 = document.getElementById("sp1");
let sp2 = document.getElementById("sp2");
let sp3 = document.getElementById("sp3");
let sp4 = document.getElementById("sp4");
let sp5 = document.getElementById("sp5");
//hover func
function over1() {
    sp1.style.opacity = 100;

}

function onover1() {
    sp1.style.opacity = 0;
}

function over2() {
    sp2.style.opacity = 100;

}

function onover2() {
    sp2.style.opacity = 0;
}

function over3() {
    sp3.style.opacity = 100;

}

function onover3() {
    sp3.style.opacity = 0;
}

function over4() {
    sp4.style.opacity = 100;

}

function onover4() {
    sp4.style.opacity = 0;
}

function over5() {
    sp5.style.opacity = 100;

}

function onover5() {
    sp5.style.opacity = 0;
}

//contain part
//part 1
let ticon = document.getElementById("bi-chat-left-dots");
let ttxt = document.getElementById("ttxt");

function movr() {
    ttxt.style.color = "#4A63E7";
    ticon.style.color = "#4A63E7";
}

function nmovr() {
    ttxt.style.color = "#F6F7FF";
    ticon.style.color = "#F6F7FF";
}

function plusSlides() {
    let p4 = document.getElementById("w3");
    p4.style.display = "flex";
    let p5 = document.getElementById("w4");
    p5.style.display = "flex";
    let p2 = document.getElementById("w1");
    p2.style.display = "none";
    let p1 = document.getElementById("w2");
    p1.style.display = "none";
}

function plusSlides1() {
    let p4 = document.getElementById("w3");
    p4.style.display = "none";
    let p5 = document.getElementById("w4");
    p5.style.display = "none";
    let p2 = document.getElementById("w1");
    p2.style.display = "flex";
    let p1 = document.getElementById("w2");
    p1.style.display = "flex";
}