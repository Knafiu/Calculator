///Functions to solve
function add(x,y){
    return Number(x)+Number(y);
}

function subtract(x,y){
    return Number(x)-Number(y)
}

function multiply(x,y){
    return Number(x) * Number(y)
}

function divide(x,y){
    return Number(x) / Number(y)
}
///Function that takes in the 2 values and operator and calls respective function
function operate(x,y, operator){
    if (operator === "/"){
        return divide(x,y);
    }
    else if (operator === "*"){
        return multiply(x,y);
    }
    else if (operator === "-"){
        return subtract(x,y);
    }
    else if (operator === "+"){
        return add(x,y);
    }
    
}
///Function that displays the result in the result div
function display(){
    let number = document.querySelectorAll(".btn.number");
    let result = document.querySelector(".result");
    number.forEach(btn=>
        btn.addEventListener("click", ()=>{
            let num = btn.textContent;
            result.textContent += num;
        })
    
    )}

    
display();
///Access result div button
let result = document.querySelector(".result");


///Add event listener to operator so that when an operator is clicked we save the first number and reset result
const operators = document.querySelectorAll(".btn.operator");
let first;
let equate;
operators.forEach(operator => 
    operator.addEventListener("click", ()=>{
        first = result.textContent;
        result.textContent = "";
        equate = operator.textContent;
    })
)
///Add event listener so that when equal button is clicked we save the second number
const equal = document.querySelector(".btn.equals");
equal.addEventListener("click", ()=>{
    const second = result.textContent; 
    const answer = operate(first, second, equate);
    result.textContent = answer.toFixed(2);
})





///Add event listener to clear so that if clear button is clicked result goes back to empty
const clear = document.querySelector(".btn.clear");
clear.addEventListener("click", ()=>{
    result.textContent = "";
})



