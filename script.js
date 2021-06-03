let header = document.querySelector("header");
const message =document.querySelector("p.message");

let links = document.querySelectorAll("nav ul li a");




links.forEach(link=>{
    console.log(link);
    link.addEventListener("mouseenter",()=>{
        message.innerHTML=`You are on the <span> ${link.textContent}</span>`;
        message.classList.add("test");
    })
    link.addEventListener("mouseleave",()=>{
        message.textContent="";
        message.classList.remove("test");
    })
})