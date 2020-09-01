window.addEventListener("scroll", function() {
     //menuScroll();
     moonScroll();
});

// Ocultar / mostrar menu on scroll

/*
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
}; */

// Moon Scroll

function moonScroll() {
    console.log('Entering')
    document.body.style.setProperty("--scroll",
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );
};


// Show elements on scroll (Intersection Observer API)
const targets = document.querySelectorAll('.show-on-scroll');

function callback(entries, observer) {
    entries
        .filter(entry => entry.isIntersecting)
        .forEach((entry) => {
                console.log('Is visible: ', entry.intersectionRatio);
                entry.target.classList.remove('initial');
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



