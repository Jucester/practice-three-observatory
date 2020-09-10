window.addEventListener("scroll", function() {
     //menuScroll();
     moonScroll();
});

// Ocultar / mostrar menu on scroll


let principal = window.pageYOffset;
let navbar = document.querySelector('.header');

function menuScroll() {
    let act = window.pageYOffset;

    if (principal >= act) {
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "-100px";
        navbar.style.background = "rgba(0, 0, 0, 0.1)";
    }
    principal = act;   
}; 

// Moon Scroll

function moonScroll() {
    let moon = document.querySelector('.moon');

    document.body.style.setProperty("--scroll",
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );

    console.log(window.pageXOffset)
    if(moon === window.pageXOffset) {
        console.log(window.pageXOffset)
        console.log('Hi');
    }


};

// Responsive

let icon = document.querySelector('.icon-menu');
let menu = document.querySelector('.navbar');

icon.addEventListener('click', () => {
    console.log('click')
    if (menu.style.top === '80px') {
        menu.style.top = '-550px';
    } else {
        menu.style.top = '80px';
    }
})


// Show elements on scroll (Intersection Observer API)
const targets = document.querySelectorAll('.show-on-scroll');

function callback(entries, observer) {
    entries
        .filter(entry => entry.isIntersecting)
        .forEach((entry) => {
                console.log('Is visible: ', entry.intersectionRatio);
                entry.target.classList.toggle('initial');
                entry.target.classList.toggle('visible');
                observer.disconnect();
        })
}

const options = {
    root: null,
    threshold: 0
}

targets.forEach(function(target) {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
});

// Lightbox Gallery Modal 

const images = document.querySelectorAll('.images > .image > img');
const container = document.querySelector('.container-image');
const imageContainer = document.querySelector('.img-show');
const text = document.querySelector('.container-image > .copy');

const right = document.querySelector('.container-image > .right');
const left = document.querySelector('.container-image > .left');

let index = 0;

images.forEach(image => {
    image.addEventListener('click', () => {
        addImage( image.getAttribute('src'), image.getAttribute('alt') );
    });
});

right.addEventListener('click', () => {
    console.log('right');
    nextImage();
})

left.addEventListener('click', () => {
    console.log('left');
    prevImage();
})

function nextImage() {
    if (index === images.length - 1) {
        index = 0;
    } else {
        index++
    }
    changeImage();
}

function prevImage() {
    if (index === 0) {
        index = images.length - 1;
    } else {
        index--
    }
    changeImage();
}

const changeImage = () => {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    images[index].classList.add('active');
}


const addImage = (image, imageText) => {
    container.style.display = 'flex';
    imageContainer.src = image;
    text.innerHTML = imageText;
    
}






// Team tabs 

document.getElementById("defaultOpen").click();

function openTab(evt, member) {
    console.log('Click')
    let content = document.getElementsByClassName('member');
    for(let i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }

    let links = document.getElementsByClassName('tablinks');
    console.log(links)
    for(let i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }

    document.getElementById(member).style.display = 'flex';
    evt.currentTarget.className += " active";
}