
let button = document.querySelector("body button");
let header = document.querySelector("header");
const message =document.querySelector("p.message");
let links = document.querySelectorAll("nav ul li a");

button.addEventListener("click",()=>{
    header.classList.toggle("header_one_hundred_vh");
    if (button.textContent == "Stretch header") {
        button.textContent = "Unstretch";
    }
    else{
        button.textContent = "Stretch header"
    }
})



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

