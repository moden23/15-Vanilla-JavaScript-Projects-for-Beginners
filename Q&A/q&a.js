const answersBtns = document.querySelectorAll(".show-anwser");
const mainContent = document.querySelector(".main-content");
const answersDivs = document.querySelectorAll(".answer-div");
let mainContentChilds = mainContent.children;


for(let i = 0 ;i<answersBtns.length;i++) {
    answersBtns[i].addEventListener("click",function() {
        answersDivs[i].classList.toggle("answer-class");
        if(answersDivs[i].classList.contains("answer-class")) {
            answersBtns[i].textContent = "-";
        }
        else {
            answersBtns[i].textContent = "+";
        }
    })
}