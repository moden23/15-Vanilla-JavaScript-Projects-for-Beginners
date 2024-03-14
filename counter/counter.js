let number = document.querySelector("#number");
const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");
let counter=0;

increaseBtn.addEventListener("click",function() {
    counter++;
    number.innerText=counter;
    
})

decreaseBtn.addEventListener("click",function() {
    if(counter>0)
    {
        counter--;
        number.innerText=counter;
    }
    
})

resetBtn.addEventListener("click",function() {
    counter=0;
    number.innerText=counter;
})