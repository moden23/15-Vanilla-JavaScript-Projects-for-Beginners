const openModalBtn = document.querySelector("#open-modal");
const mainContent = document.querySelector("#main-content");
const modalProjectHeader = document.querySelector("h3");
const container = document.querySelector("#container");
const closeBtn = document.createElement("button");
const closeBtnContent = document.createTextNode("X");
closeBtn.append(closeBtnContent);

openModalBtn.addEventListener("click",function() {
    container.style.background= "url(hero.jpeg),rgba(73, 166, 233,0.5)";
    openModalBtn.style.display = 'none';
    

    
    closeBtn.classList.add("close-btn");
    
    mainContent.insertBefore(closeBtn,modalProjectHeader)
 
   
})

closeBtn.addEventListener("click",function() {
    container.style.background= "url(hero.jpeg),transparent";
    openModalBtn.style.display = "inline-block";


    mainContent.classList.add("before-open");
    mainContent.removeChild(closeBtn);

    
})