// function loco() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();

// }
// loco()
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor")
var tl = gsap.timeline();
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "power2.out"
    })
})
function boxDown() {
    var box1 = document.querySelector(".nav_box1");
    gsap.to(".nav_box1", {
        scrollTrigger: {
            trigger: ".nav_box1",
            scroller: "body",
            scrub: 2,
        },
        top: "100%"
    })
}
boxDown()
function textUp() {
    tl.from("#one_1", {
        y: 300,
        duration: 0.3,
        ease: "back.out",
        opacity: 0
    })
    tl.from("#one_2", {
        y: 300,
        duration: 0.3,
        ease: "back.out",
        opacity: 0
    })
    tl.from("#one_3", {
        y: 300,
        duration: 0.3,
        ease: "back.out",
        opacity: 0
    })
    tl.from("#one_4", {
        y: 300,
        duration: 0.3,
        ease: "back.out",
        opacity: 0
    })
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#two",
            scroller: "body",
            start: "top 80%",
        }
    })
    t2.from("#two>h2", {
        y: 100,
        duration: 1,
        ease: "back.out",
        opacity: 0,
    })
    t2.from("#two>h1>span", {
        y: 300,
        duration: 0.6,
        ease: "back.out",
        opacity: 0,
        stagger: 0.2,
    })
    gsap.from(".three_content>h2>span", {
        y: 300,
        duration: 0.6,
        ease: "back.out",
        opacity: 0,
        stagger: 0.2,
        scrollTrigger:{
            trigger: ".three_content",
            scroller:"body",
            start:"top 80%"
        }
    })
}
textUp()

var initialPath = `M 10 100 Q 750 100 1490 100`;
var finalPath = `M 10 100 Q 750 100 1490 100`;

var main = document.querySelector(".strip");

main.addEventListener("mousemove", function (go) {
    initialPath = `M 10 100 Q 750 ${go.y / 3} 1490 100`;
    gsap.to("#tri path", {
        attr: { d: initialPath },
        duration: 0.2,
        ease: "elastic.out(1,0.3)",
    })
})
main.addEventListener("mouseleave", function () {
    gsap.to("#tri path", {
        attr: { d: finalPath },
    })
})

var initialPath1 = `M 10 100 Q 750 100 1280 100`;
var finalPath1 = `M 10 100 Q 750 100 1280 100`;

var main1 = document.querySelector(".three_six .strip1");
console.log(main1)

main1.addEventListener("mousemove", function (go) {
    initialPath1 = `M 10 100 Q 750 ${go.y / 3} 1280 100`;
    gsap.to("#tri1 path",{
        attr: { d: initialPath1 },
        duration:0.2,
        ease: "elastic.out(1,0.3)",
    })
})
main1.addEventListener("mouseleave",function(){
    gsap.to("#tri1 path",{
        attr: { d: finalPath1 },
    })
})

var cutter = ""
var h1 = document.querySelector("#three h1").textContent.split("").forEach(function (dets) {
    cutter += `<span>${dets}</span>`
})
document.querySelector("#three h1").innerHTML = cutter;

gsap.from("#three h1 span", {
    top: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#three",
        start: "top 60%",
        end: "bottom 20%",
        scroller: "body",
    }
})

var cutter1 = ""
var h11 = document.querySelector("#four h1").textContent.split("").forEach(function (dets) {
    cutter1 += `<span>${dets}</span>`
})
document.querySelector("#four h1").innerHTML = cutter1;

gsap.from("#four h1 span", {
    top: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#four",
        start: "top 60%",
        end: "bottom 20%",
        scroller: "body",
    }
})

var cutter2 = '';
var h111 = document.querySelector("#five h1").textContent.split("").forEach(function(dets){
    cutter2 += `<span>${dets}</span>`;
})
document.querySelector("#five h1").innerHTML = cutter2;
gsap.from("#five h1 span", {
    top: 100,
    duration: 0.3,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#five",
        start: "top 80%",
        end: "bottom 20%",
        scroller: "body",
    }
})
var cutter3 = "";
var h1111 = document.querySelector("#six h1").textContent.split("").forEach(function(go){
    cutter3 += `<span>${go}</span>`
})
document.querySelector("#six h1").innerHTML = cutter3;
gsap.from("#six h1 span", {
    top: 100,
    duration: 0.3,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#six",
        start: "top 70%",
        end: "bottom 20%",
        scroller: "body",
    }
})
function mouseE() {
    let one = document.querySelectorAll(".three_img");

    one[0].addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            width: "180px",
            height: "30px",
            borderRadius: "10px",
            duration: 0.2
        })
        cursor.innerHTML = `<h1>Govind Kumar</h1> <h1>Govind Kumar</h1> <h1>Govind Kumar</h1>`
        gsap.to("#cursor>h1",{
            x:-100,
            duration:2,
            repeat:-1,
            ease:"none"
        })
    })
    one[0].addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            width: "15px",
            height: "15px",
            duration: 0.2
        })
        cursor.innerHTML = ""
    })
    one[1].addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            width: "180px",
            height: "30px",
            borderRadius: "10px",
            duration: 0.2
        })
        cursor.innerHTML = `<h1>Govind Kumar</h1> <h1>Govind Kumar</h1> <h1>Govind Kumar</h1>`
        gsap.to("#cursor>h1",{
            x:-100,
            duration:2,
            repeat:-1,
            ease:"none"
        })
    })
    one[1].addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            width: "15px",
            height: "15px",
            duration: 0.2
        })
        cursor.innerHTML = ""
    })
    one[2].addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            width: "180px",
            height: "30px",
            borderRadius: "10px",
            duration: 0.2
        })
        cursor.innerHTML = `<h1>Govind Kumar</h1> <h1>Govind Kumar</h1> <h1>Govind Kumar</h1>`
        gsap.to("#cursor>h1",{
            x:-100,
            duration:2,
            repeat:-1,
            ease:"none"
        })
    })
    one[2].addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            width: "15px",
            height: "15px",
            duration: 0.2
        })
        cursor.innerHTML = ""
    })
    one[3].addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            width: "180px",
            height: "30px",
            borderRadius: "10px",
            duration: 0.2
        })
        cursor.innerHTML = `<h1>Govind Kumar</h1> <h1>Govind Kumar</h1> <h1>Govind Kumar</h1>`
        gsap.to("#cursor>h1",{
            x:-100,
            duration:2,
            repeat:-1,
            ease:"none"
        })
    })
    one[3].addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            width: "15px",
            height: "15px",
            duration: 0.2
        })
        cursor.innerHTML = ""
    })

}
gsap.from(".four_boxs .line",{
    width:"0%",
    duration:0.8,
    stagger:0.5,
    scrollTrigger:{
        trigger:".four_boxs",
        scroller:"body",
        start:"top 70%",
    }
})
mouseE()
function mouseF() {
    var bo = document.querySelectorAll(".four_boxs");

    bo[0].addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            width:"450px",
            height:"500px",
            borderRadius:"10px",
            duration:0.5,
            ease: "expoScale(0.5,7,none)"
        })
        cursor.innerHTML = `<img src="images/logo\ \(5\).jpg"/>`
    })
    bo[0].addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            width:"15px",
            height:"15px",
            borderRadius:"50%"
        })
        cursor.innerHTML = ``
    })

    bo[1].addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            width:"450px",
            height:"500px",
            borderRadius:"10px",
            duration:0.5,
            ease: "expoScale(0.5,7,none)"
        })
        cursor.innerHTML = `<img src="images/logo\ \(3\).jpg"/>`
    })
    bo[1].addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            width:"15px",
            height:"15px",
            borderRadius:"50%"
        })
        cursor.innerHTML = ``
    })
    
    bo[2].addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            width:"450px",
            height:"500px",
            borderRadius:"10px",
            duration:0.5,
            ease: "expoScale(0.5,7,none)"
        })
        cursor.innerHTML = `<img src="images/logo\ \(7\).jpg"/>`
    })
    bo[2].addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            width:"15px",
            height:"15px",
            borderRadius:"50%"
        })
        cursor.innerHTML = ``
    })

    bo[3].addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            width:"450px",
            height:"500px",
            borderRadius:"10px",
            duration:0.5,
            ease: "expoScale(0.5,7,none)"
        })
        cursor.innerHTML = `<img src="images/logo\ \(6\).jpg"/>`
    })
    bo[3].addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            width:"15px",
            height:"15px",
            borderRadius:"50%"
        })
        cursor.innerHTML = ``
    })
}
mouseF()
function mouseG(){
    var main = document.querySelector(".six_frist");
    var img = document.querySelector(".six_frist>img")
    main.addEventListener('mousemove',function(time){
        gsap.to(img,{
            x:time.x,
            y:time.y,
            duration:0.5,
            ease: "expoScale(0.5,7,none)",
            opacity:1,
            transform: "scaleY(1)"
        })
    })
    main.addEventListener("mouseleave",function(){
        gsap.to(img,{
            transform:" scaleY(0)"
        })
    })

    var main1 = document.querySelector(".six_second");
    var img1 = document.querySelector(".six_second>img")
    main1.addEventListener('mousemove',function(time){
        gsap.to(img1,{
            x:time.x,
            y:time.y,
            duration:0.5,
            ease: "expoScale(0.5,7,none)",
            opacity:1,
            transform: "scaleY(1)"
        })
    })
    main1.addEventListener("mouseleave",function(){
        gsap.to(img1,{
            transform:" scaleY(0)"
        })
    })
}   
mouseG()

function mouseH(){
    var center = document.querySelector("#six");
    var frist = document.querySelector(".six_frist");
    var second = document.querySelector(".six_second");

    frist.addEventListener("mouseover",function(){
        center.style.background = "pink";
        second.style.opacity = 0.5
    })
    frist.addEventListener("mouseleave",function(){
        center.style.background = "rgb(245, 243, 239)";
        second.style.opacity = 1;
    })
    second.addEventListener("mouseover",function(){
        center.style.background = "lightblue";
        frist.style.opacity = 0.5
    })
    second.addEventListener("mouseleave",function(){
        center.style.background = "rgb(245, 243, 239)";
        frist.style.opacity = 1;
    })
}
mouseH()
function textAnimaion(){
    window.addEventListener("wheel",function(m){
        if(m.deltaY > 0){
            gsap.to(".seven_text",{
                transform:"translateX(200%)",
                duration:7,
                ease: "none",
                repeat:-1
            })
            gsap.to(".seven_text>img",{
                rotate:"0deg",
                duration:2
            })
        }else {
            gsap.to(".seven_text",{
                transform:"translateX(-200%)",
                duration:7,
                ease: "none",
                repeat:-1
            })
            gsap.to(".seven_text>img",{
                rotate:"180deg",
                duration:2
            })
        }
    })
}
textAnimaion()