const faders = document.querySelectorAll('.fade-injs');
const transitionelements = document.getElementsByClassName('transition'); // Select the section by its ID
const sliders = document.querySelectorAll(".slide-in")
const appearOptions = {
    threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(
    function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    },
    appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
sliders.forEach(slider =>{
    appearOnScroll.observe(slider)
});

transitionelements.forEach(element => {
    appearOnScroll.observe(element);
});




/* const faders = document.querySelectorAll('.fade-injs');

sectionOneObserver.observe(sectionOne);
const appearOptions = {
    threshold: 1
};
const appearOnScroll = new IntersectionObserver
(function(
    entries,appearOnScroll
){
    entries.forEach(entry => {if(!entry.isIntersecting){
        return;
    }
else{
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
}
});
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {appearOnScroll.observe(fader)});

sliders.forEac(slider => {
    appearOnScroll.observe(slider);
}); */

/* let sections = document.querySelectorAll('section');

window.onscroll = () => {

    sections.forEach(sec =>
        {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;

            if(top>=offset && top < offset+height){
                sec.classList.add('show-animate');
            }
            else{
                sec.classList.remove('show-animate');
            }
        })
} */