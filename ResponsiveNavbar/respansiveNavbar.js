const navBtn = document.querySelector("#hamburger-icon");
const centerNav = document.querySelector("#center-nav");
let index=0;
navBtn.addEventListener("click",function() {
    index++;
    
    navBtn.style.border = "1px solid #6FA5C6";
    if(index%2==1)
        navBtn.style.boxShadow= "0 0 70px 1px #48abe0";
    else 
        navBtn.style.boxShadow = "none";
    

    centerNav.classList.toggle("center-div-responsive");
})