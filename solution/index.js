let myDiv = document.querySelector(".myFormList");
let myDolists = document.querySelector("label");
let myCounter = document.querySelector("span");


myDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains("inputum"))
        myCounter.innerText++
        
    
}) 