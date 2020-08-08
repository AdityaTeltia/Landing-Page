var tl = gsap.timeline();

tl.from('ul',{
    duration:1,
    opacity:0,
    x:50,
    ease:"bounce"
})

tl.from('.text',{
    duration:1,
    opacity:0
},"-=0.5")

tl.from('small,p',{
    duration:1,
    opacity:0,
    y:50,
    stagger:0.6
})

tl.from('.side-container',{
    duration:1,
    opacity:0,
    x:-40
})