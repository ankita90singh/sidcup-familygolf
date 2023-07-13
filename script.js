var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove" , function(dets){
    crsr.style.left = dets.x+25+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
    

});
var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
// var crcl = document.querySelector("#circle i");
// crcl.forEach(function(val){
//   val.addEventListener("mouseenter", function(){
//     crsr.style.scale=5;
//     crsr.style.border = "0px solid #95C11E";
//     crsr.style.backgroundColor = "#95C11E";

//   })

// })
   

   





gsap.to("#nav" ,{
  
   backgroundColor:"#000",
   duration:0.5,
   height:"110px",
   scrollTrigger:{
    triggger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top 11%",
    scrub:1
   }

  
})
gsap.to("#main" ,{
    backgroundColor:"#000",
    scrollTrigger:{
        triggger:"#main",
        scroller:"body",
        // markers:true
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }


})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: .7,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: .7,
    stagger:0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  }); 

  gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
 
  gsap.from("#page2a ,#imgdiv img , #text h1 p button", {
    y: 90,
    opacity: 0,
    duration: .7,
    stagger:0.1,
    scrollTrigger: {
      trigger: "#page2a",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  }); 
  gsap.from("#page4 h1", {
    y: 60,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });

  
