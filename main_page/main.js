
const inputCheckbox = window.document.querySelector('.switcher-input'); 
const documentBody = document.body;


inputCheckbox.addEventListener('change', () => {
    let theme = getTheme(); 

    if(theme == 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}); 



function changeBackground () {
    let theme = getTheme(); 

    if(theme == 'dark') {
        documentBody.classList.add('active'); 
    } else {
        documentBody.classList.remove('active');
    }
}

function checkTheme() {
    let theme = getTheme(); 
    if(theme == null || theme == undefined || typeof(theme) != 'string') {
        setTheme('light');
    } else {
        if(theme == 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
}

function setTheme(theme = 'light') {
    window.localStorage.setItem('theme', theme); 
    changeBackground(); 
}

function getTheme(){
    return window.localStorage.getItem('theme'); 
}

checkTheme(); 










var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}








const slides = document.querySelectorAll('.slide');
const length = slides.length;

const prev = document.querySelector('.control--prev');
const next = document.querySelector('.control--next');

var index = 0;
//console.log(slides[1]);

// Previous
prev.addEventListener( 'click', () => {
  slides.forEach( (slide) => {
    slide.classList.remove('slide--current');
  } );
  index--;
  if ( index < 0 ) { index = length - 1; }
  slides[index].classList.add('slide--current');
} );

// Next
next.addEventListener( 'click', () => {
  slides.forEach( (slide) => {
    slide.classList.remove('slide--current');
  } );
  index++;
  if ( index > ( length - 1 ) ) { index = 0; }
  slides[index].classList.add('slide--current');
} );













