const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.dataset.section;
        const targetElement = document.getElementById(targetSection);
        const currentActiveButton = document.querySelector('.nav_active');

        // Only scroll to the target section if the button is not already active
        if (!button.classList.contains('nav_active')) {
            gsap.to(window, {
                scrollTo: targetElement,
                duration: 1.7,
                ease: 'power2.out',
                onComplete: () => {
                    if (currentActiveButton) {
                        currentActiveButton.classList.remove('nav_active');
                    }
                    navButtons.forEach(btn => btn.classList.remove('nav_active'));
                    button.classList.add('nav_active');
                    // Remove the 'nav_active' class from the previously active button
                }
            });
        }
    });
});

// Check the current section on page load
function checkCurrentSection() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let currentSection = sections[0];

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 500) {
            currentSection = section;
        }
    });

    // Find the corresponding button for the current section
    const currentButton = Array.from(navButtons).find(button => button.dataset.section === currentSection.id);

    // Add 'nav_active' class to the current button
    navButtons.forEach(btn => btn.classList.remove('nav_active'));
    currentButton.classList.add('nav_active');

    return currentSection;
}
window.addEventListener('scroll', checkCurrentSection);
checkCurrentSection();

let train = document.querySelectorAll(".n")
for (let i = 0; i < train.length; i++) {
    train[i].addEventListener('mouseover', function () {
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            train[i].classList.add("jumping");
            if (timePassed > 2000) {
                clearInterval(timer);
                train[i].classList.remove("jumping");
            }
        }, 20);
    });
}

var divElements = document.querySelectorAll('.min_proj');
var numbers = [43, 44, 45, 46, 47, 48, 49];
for (var i = 0; i < divElements.length; i++) {
    divElements[i].setAttribute('data-number', numbers[i]);
}

// function updateViewportWidth() {
//     var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
//     document.getElementById('viewport-height').textContent = viewportHeight + 'px';

//     var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
//     document.getElementById('viewport-width').textContent = viewportWidth + 'px';
//   }
//   updateViewportWidth();
//   window.addEventListener('resize', updateViewportWidth);


var keywords3 = ["OpenAI", "D3.js"];
var paragraph3 = document.documentElement;
// keywords3.forEach(function (keyword) {
//     var regex = new RegExp(keyword, "gi");
//     paragraph3.innerHTML = paragraph3.innerHTML.replace(regex, '<span class="highlight">$&</span>');
// });



// document.querySelector(".form-wrapper").innerHTML = `
// <form name="contact" method="POST" data-netlify="true" style="display: inline;">
// <input type="email" name="email" />
// <button type="submit">Send</button>
// </form>`



gsap.registerPlugin(ScrollTrigger);

function animateServices() {
    gsap.from(".domain", {
        x: -80,
        duration: 1.2,
        opacity: 0.8,
        stagger: .1,
        ease: "back(4)"
    })
}

function animateNavbar() {
    gsap.from(".navbar>*", {
        x: -100,
        duration: 1.5,
        delay: 0.2,
        ease: "back(4)",
        stagger: .1
    })
}

function animatePortfolio_bg() {
    gsap.from(".portfolio_bg", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "back(4)",
        stagger: .1
    })
}

function animateNameDesign() {
    gsap.from(".name_content>*", {
        x: -150,
        opacity: 0.8,
        duration: 2,
        ease: "back(4)",
        stagger: .2
    })
}

let previousSection = null;

function handleScroll() {
    const currentSection = checkCurrentSection();
    const aboutSection = document.getElementById("about");
    if (currentSection === aboutSection && previousSection !== currentSection) {
        animateNavbar();
        animateServices();
        animatePortfolio_bg();
        animateNameDesign()
    }
    previousSection = currentSection;
}
window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);


var timeline = gsap.timeline();


timeline
    .from(".cards_design>h1", {
        opacity: 0.3,
        letterSpacing: "-10vh",
        duration: 1,
        scrollTrigger: {
            trigger: ".works",
            start: "top 80%",
            end: "5% 60%",
            toggleActions: "restart none none complete",
            scrub: 4,
        }
    })

    .fromTo(".services2 div", {
        x: -300,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".services2",
            start: "top bottom",
            end: "top top",
            toggleActions: "play pause resume complete",
            scrub: 4,

        }
    }, {
        x: 200,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".services2",
            start: "top bottom",
            end: "top top",
            toggleActions: "play pause resume complete",
            scrub: 4,
        }
    })

    .from(".work_card", {
        opacity: 0,
        x: 700,
        duration: 1,
        stagger: 0.6,
        scrollTrigger: {
            trigger: ".work_cards",
            start: "top 90%",
            end: "30% 40%",
            toggleActions: "restart none none complete",
            scrub: 4,
            // markers:true
        }
    })
    .from(".work_info *", {
        opacity: 0,
        x: 200,
        duration: 1.5,
        delay: 1.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".work_info",
            start: "top 95%",
            end: "30% 20%",
            toggleActions: "restart none none complete",
            scrub: 4,
        }
    })
    .from(".works_right_type1", {
        opacity: 0,
        x: -400,
        duration: .5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".works",
            start: "top 90%",
            end: "top 30%",
            toggleActions: "restart none none complete",
            scrub: 2,
        }
    })


    .from(".work_recent", {
        opacity: 0,
        y: 300,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".min_proj",
            start: "top bottom",
            end: "top 25%",
            toggleActions: "restart none none complete",
            scrub: 3,
            // markers:true
        }
    })

    .from(".min_proj > *, .works_right_type2 a", {
        opacity: 0,
        x: -200,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".min_proj",
            start: "top 90%",
            end: "top 25%",
            toggleActions: "restart none none complete",
            scrub: 4,
        }
    })

    .from(".works_right_type3", {
        opacity: 0,
        x: -300,
        duration: 1.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".works_right_type3",
            start: "top 90%",
            end: "top 25%",
            toggleActions: "restart none none complete",
            scrub: 3,
        }
    })
    .from(".skills > *", {
        opacity: 0,
        x: 300,
        duration: 1,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".skills",
            start: "top 95%",
            end: "top 50%",
            toggleActions: "restart none none complete",
            scrub: 4,
            //   markers:true
        }
    })
    .from(".skills p span", {
        opacity: 0,
        x: 500,
        delay: 3,
        duration: 2,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".skills",
            start: "top 95%",
            end: "top 50%",
            toggleActions: "restart none none complete",
            scrub: 4,
            //   markers:true
        }
    })
    .from(".graphic_design", {
        opacity: 0,
        x: -200,
        duration: 1.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".graphic_design",
            start: "top 90%",
            end: "30% 25%",
            toggleActions: "restart none none complete",
            scrub: 3,
        }
    })

    .from(".graphic_design1, .graphic_design2", {
        opacity: 0,
        x: -200,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".graphic_design1",
            start: "top 90%",
            end: "30% 25%",
            toggleActions: "restart none none complete",
            scrub: 3,
        }
    })

    .from(".photography h1", {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: {
            trigger: ".photography",
            start: "top 80%",
            end: "top 25%",
            toggleActions: "restart none none complete",
            scrub: 3,
        }
    })
    .from(".photography p", {
        opacity: 0,
        x: -400,
        duration: 1,
        scrollTrigger: {
            trigger: ".photography",
            start: "top 60%",
            end: "top 30%",
            toggleActions: "restart none none complete",
            scrub: 4,
        }
    })
    // .from(".photography img",{
    //     opacity:0.5,
    //     x: -300,
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: ".photography",
    //       start: "top 70%",
    //       end: "top 35%",
    //       toggleActions: "restart none none complete",
    //       scrub: 4,
    //     }
    // })
    .from(".works_right_type4 > *", {
        opacity: 0,
        x: -300,
        duration: 1,
        stagger: 0.6,
        scrollTrigger: {
            trigger: ".works_right_type4",
            start: "top bottom",
            end: "top 50%",
            toggleActions: "restart none none complete",
            scrub: 4,
            //   markers:true
        }
    })
    .from(".contact_heading > * > *, .contact_details > a", {
        opacity: 0,
        x: 100,
        duration: 3,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".photography",
            start: "40% 45%",
            end: "bottom 80%",
            toggleActions: "restart none none complete",
            scrub: 4,
        }
    })
    .from(".contact_dropMail", {
        opacity: 0,
        x: 200,
        duration: 1,
        delay: 2,
        scrollTrigger: {
            trigger: ".photography",
            start: "40% 55%",
            end: "bottom 80%",
            toggleActions: "restart none none complete",
            scrub: 3,
            // markers:true
        }
    })
    .from(".copyright, .copyright2", {
        opacity: 0,
        y: 200,
        duration: 1,
        delay: 2,
        scrollTrigger: {
            trigger: ".photography",
            start: "40% 55%",
            end: "bottom 80%",
            toggleActions: "restart none none complete",
            scrub: 5,
        }
    })