let myGeneralDiv = document.querySelector(".my-list");

let myCounter = document.querySelector("span");


myGeneralDiv.addEventListener("click", (e) => {
    let myPar = e.target.nextElementSibling;
    // console.log(myPar);
    if(e.target.className == "inputum"){
        if (true) {
            e.target.nextElementSibling.innerHTML = `<del>${myPar.innerText}</del>`
            e.target.nextElementSibling.style.color = "red"
            myCounter.innerText++
            
        }else{
            e.target.nextElementSibling.innerHTML = `<del>${myPar.innerText}</del>`
            myCounter.innerText--
        }
            
    }    
}) 