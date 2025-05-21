
gsap.from("#page1 #bux", {
  scale: 0,
  duration: 1,
  rotate: 360,
  delay: 1,
})



gsap.from("#page2 #bux", {
  scale: 0,
  duration: 1,
  rotate: 360,
 
  scrollTrigger: {
    trigger : "#page2 #bux",
    scroller: 'body',
    markers: true,
    start: "top 70%",
    end : "top 30%",
    scrub: 2,
  },
})


gsap.to("#page3 #bux", {
  x : 600,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 #bux",
    scroller: 'body',
    markers: true,
    start: "top 60%",
    end : "top 30%",
    scrub: 2,
    pin : true
  }
})












gsap.from("#box", {
  x: 1300,
  duration: 2,
  delay: 1,
  backgroundColor: "green",
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
});

gsap.to("#circle", {
  x: 1300,
  borderRadius: "10px",
  duration: 2,
  delay: 1,
  rotate: 360,
  y: 100,
  backgroundColor: "red",
  repeat: -1,
  yoyo: true,
});

gsap.from("h1", {
  y: 100,
  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0.5,
  stagger: 1,
});

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1500,
  duration: 2,
  delay: 1,
});

tl.to("#box2", {
  x: 1500,
  duration: 2,
  rotate: 360,
   
});

 
tl.to("#box3", {
  x: 1500,
  duration: 2,
  rotate: -360,
});