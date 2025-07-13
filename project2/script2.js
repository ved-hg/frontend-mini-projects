//locomotive js- smooth scrolling

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// here el is main parent div i.e. "#main"
//all subparts are in main
//this function makes scroll very smooth


// gsap to animate 
gsap.from(".nlink",{
 stagger: 0.15, 
 y: 10,
 opacity: 0,
 duration: 1.5,
 ease: Power2,
})

// stagger-  will take time of 0.1 s to animate all

// Shery.textAnimate("#headings h1" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 1,
//    y:10,
//    delay:.3,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });

  gsap.from(".anim2",{
y:30,
opaity: 0,
ease: Power2,
duration: 1,

 })

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
          gsap.to("#future video",{
            opacity: 1,
            duration: 1,
            ease: Power4,
          })

})
document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
          
    gsap.to("#future video",{
        opacity: 0,
        duration: 1,
        ease: Power4,
      })
})



