gsap.to("#nav",{
backgroundColor :"#000",
height:"90px",

duration:0.5,

scrollTrigger:{
    trigger:"#nav",
    scroller: "body",

start: "top -10%",
end: "top -11%",

scrub:1,
}

})

var h4all =document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor="transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor="#47ec35"

    })
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
    scroller: "body",
    start: "top -20%",
end: "top -70%",
scrub:2
    }


})





var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets)
     {
    crsr.style.left = dets.x -8 +"px"
    crsr.style.top = dets.y -8 +"px"
    
   blur.style.left = dets.x - 150+"px"
    blur.style.top = dets.y - 150 +"px" }  ) 


