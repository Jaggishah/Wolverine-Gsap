import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function pageAnimation(){
  var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
  y: -40,
  opacity:0,
  delay:0.3,
  duration:0.5,
  stagger:0.15
})

tl.from(".center-part1 h1",{
  x:-200,
  opacity: 0,
  duration:0.5
})

tl.from(".center-part1 p",{
  x:-200,
  opacity: 0,
  duration:0.4
})

tl.from(".center-part1 button",{
  opacity: 0,
  duration:0.5,
 
})

tl.from(".center-part2 img",{
  opacity: 0,
  duration:0.5,
  x:200
},"-=1")

tl.from(".section1bottom img",{
  opacity:0,
  y:30,
  stagger:0.15,
  duration:0.4,
  
})
}

function page2Animation(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section2",
      scroller:"body",
      // markers:true,
      start:"top 50%",
      end:"top 10%",
      scrub:2
    }
  });
  tl2.from(".services ",{
    x:-300,
    opacity:0,
    duration:0.5,
   
  })
  
  tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
  },"anim")
  
  tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
  },"anim")
  
  tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
  },"anim1")
  
  tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
  },"anim1")
  
}
pageAnimation()
page2Animation()