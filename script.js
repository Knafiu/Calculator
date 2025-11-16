function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y
}

function multiply(x,y){
    return x * y
}

function divide(x,y){
    return x / y
}

function operate(x,y, operator){
    
}

function display(){
    let number = document.querySelectorAll(".btn.number");
    let result = document.querySelector(".result");
    number.forEach(btn=>
        btn.addEventListener("click", ()=>{
            let num = btn.textContent;
            result.textContent = num;
        })
    
    )}
    
display();