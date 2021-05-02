console.log('Working');



const text_div = document.querySelector('.logo_text');
const gtext = document.querySelector('.green_text');

// text_div.addEventListener('mouseenter', (e) => {
//     gtext.style.opacity = '0';
// });
// text_div.addEventListener('mouseleave', (e) => {
//     gtext.style.opacity = '1';
// });



// GSAP
var tl = gsap.timeline({repeat: -1,repeatDelay: 2});
tl
.to('#bottom', 0.04, {opacity:0})
.to('.glitch', 0.1, {skewX:70,ease: Power4.easeInOut})
.to('.glitch', 0.04, {skewX:0,ease: Power4.easeInOut})
.to('.glitch', 0.04, {x:-20})
.to('.glitch', 0.04, {x:0})

.to('.txt', 0, { scale:1}, "+=0.02")


.to('#bottom', 0.04, {opacity:1})
.to('#bottom', 0.06, {skewX:70,ease: Power4.easeInOut})
.to('#bottom', 0.04, {skewX:0,ease: Power4.easeInOut})
.add("split", 0)
.to('#top', 0.5, {x:-60,ease: Power4.easeInOut},'split')
.to('#bottom', 0.5, {x:60,ease: Power4.easeInOut},'split')
// .to('.glitch', 0.08, { className: '+=redShadow'},'split')
// .to('.glitch', 0.08, { className: '-=redShadow'}, "+=0.09")
// .to('.glitch', 0.03,{ className: '+=greenShadow'},'split')
// .to('.glitch', 0.03,{ className: '-=greenShadow'},"+=0.01")

.to('.txt', 0, { scale:1.1},'split')

.to('#top', 0.2, {x:0,ease: Power4.easeInOut})
.to('#bottom', 0.2, {x:0,ease: Power4.easeInOut})

.to('.glitch', 0.02, {scaleY:1.1,ease: Power4.easeInOut})
.to('.glitch', 0.04, {scaleY:1,ease: Power4.easeInOut});


// Anime

var aTl = anime.timeline({
    duration:750,
    loop: true
});

aTl
.add ({
    targets: '#circle circle',
    delay: 1000,
    cx: "803.2",
    cy: "818",
   r: "494.1",
   direction: 'alternate',
  easing: 'spring(1, 80, 10, 0)'
})
.add({
    targets: '#circle circle',
    cx: "803.2",
    cy: "818",
   r: "62.8",
   direction: 'alternate',
  easing: 'cubicBezier(.5, .05, .1, .3)'
})
