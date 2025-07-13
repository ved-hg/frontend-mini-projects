const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});





function circleShape() {
  var xscale = 1;
  var yscale = 1;
  var xp = 0;
  var yp = 0;
  var timeout; // Declare the timeout variable
  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    // as mouse keeps moving timeout is constantly set to zero
    var xdiff = dets.clientX - xp
    var ydiff = dets.clientY - yp
    xscale = gsap.utils.clamp(.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(.8, 1.2, ydiff);
    xp = dets.clientX
    yp = dets.clientY
    // xscale and yscale calculated lated before otherwise diff will be = to 0 later

    circleMouseFollower(xscale, yscale)
    timeout = setTimeout(function () {
      document.querySelector("#mini").style.transform = `translate(${dets.clientX}px,${dets.clientY}px )  scale(1,1)`;
    }, 150)
    // functions only when mouse stops for 150ms

  })



}
circleShape();
function circleMouseFollower(xscale, yscale) {

  window.addEventListener("mousemove", function (dets) {

    document.querySelector("#mini").style.transform = `translate(${dets.clientX}px,${dets.clientY}px )  scale(${xscale},${yscale})`;


  })
}




function firstPage() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: '10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    delay:0
  })
    .to(".boundingelem", {
      y: '0',
      delay: -1,
      duration: 1.7,
      ease: Expo.easeInOut,
      stagger: .2 // time after which different boundingelem animate one after the other
    })
    .to(".boundingelem2", {
      y: '0',
      delay: -1,
      duration: 1.2,
      ease: Expo.easeInOut,
      stagger: .2
    })
    .from("#hero-footer", {
      y: '-10',
      opacity: 0,
      duration: 1.2,
      delay: -1,
      ease: Expo.easeInOut,

    })


}

firstPage()




// gives array like structure to work on one-by-one
document.querySelectorAll(".elem").forEach(function(elem){
var rotate=0;
var diff2=0;
elem.addEventListener("mousemove", function(dets){
   
  var diff =dets.clientY-elem.getBoundingClientRect().top;
  
  var diff2 =dets.clientX - rotate;
  rotate= dets.clientX;
  
  gsap.to(elem.querySelector("img"),{

    opacity: 1,
   zIndex:99,
  
     top: diff -70  + "px",
     left: dets.clientX  +"px",
    rotate: gsap.utils.clamp(-15,15,diff2),
   });



 
});
elem.addEventListener("mouseleave", function(dets){
  gsap.to(elem.querySelector("img"),{

    opacity: 0,
    zIndex:0,
     ease:Power3,
   
   });

});
});


function showTime() {
  // Create a new Date object
  const now = new Date();
  
  // Get hours and minutes
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  // Format the time to always be two digits
  hours = hours < 10 ? '0' + hours : hours;  // Add leading zero if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;  // Add leading zero if needed
  
  // Create a string in HH:MM format
  const currentTime = `${hours}:${minutes}`;
  
  // Display the current time in the HTML element
  document.getElementById('timeDisplay').textContent = currentTime;
}

// Run the showTime function every 60000 milliseconds (1 minute)
setInterval(showTime, 60000);

// Call showTime once to display the time immediately on load

showTime();