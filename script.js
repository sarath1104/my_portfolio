

var typed = new Typed('.typing', {
    strings:['','Web Developer', 'Web Designer' , 'Software Developer'],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

////////////////////////////////////////////////////circle skill/////////////////////////////////////
const circle=document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor (dots*marked/100);
    var points = "";
    var rotate = 360/dots;


    for(let i=0;i<dots ; i++){
        points+= ` <div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0;i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }

})




// Wrap your JavaScript in a function to call it when needed
function animateSkills() {
    const circle = document.querySelectorAll('.circle');
    circle.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots * marked / 100);
        var points = "";
        var rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked');
        }
    });
}

function animateHTML() {
    const htmlBar = document.querySelector('.html');

    let width = 0;
    const targetWidth = 82; // Width you want to reach

    const animation = setInterval(frame, 20);

    function frame() {
        if (width >= targetWidth) {
            clearInterval(animation);
        } else {
            width++;
            htmlBar.style.width = width + '%';
        }
    }
}

function animateCSS() {
    const cssBar = document.querySelector('.css');

    let width = 0;
    const targetWidth = 75; // Width you want to reach

    const animation = setInterval(frame, 20);

    function frame() {
        if (width >= targetWidth) {
            clearInterval(animation);
        } else {
            width++;
            cssBar.style.width = width + '%';
        }
    }
}

function animateFIGMA() {
    const figmaBar = document.querySelector('.figma');

    let width = 0;
    const targetWidth = 85; // Width you want to reach

    const animation = setInterval(frame, 20);

    function frame() {
        if (width >= targetWidth) {
            clearInterval(animation);
        } else {
            width++;
            figmaBar.style.width = width + '%';
        }
    }
}

function animateJAVASCRIPT() {
    const JavaScriptBar = document.querySelector('.javascript');

    let width = 0;
    const targetWidth = 60; // Width you want to reach

    const animation = setInterval(frame, 20);

    function frame() {
        if (width >= targetWidth) {
            clearInterval(animation);
        } else {
            width++;
            JavaScriptBar.style.width = width + '%';
        }
    }
}

// Event listener for the "Skills" button click
const skillsButton = document.getElementById('skillsButton'); // Replace with the actual ID of your Skills button

skillsButton.addEventListener('click', function() {
    animateSkills(); 
    // Call the function to trigger the animation when the button is clicked
    animateHTML();
    animateCSS();
    animateFIGMA();
    animateJAVASCRIPT();
});










//////////active menu/////////////////////////////////////////////////////////////////////////////
let menuLi= document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec=> sec.classList.remove("active"));
    menuLi[len].classList.add("active");

}

activeMenu();
window.addEventListener("scroll",activeMenu)


///////////////////  sticky navbar /////////////////////
const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
});

///////////////////  toggel icon navbar  /////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}



