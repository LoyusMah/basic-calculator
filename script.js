const allButtonsElm = document.querySelectorAll(".btn")
let strToDisplay = ""
const displayElm = document.querySelector(`.display`)
const  operator = ["%" , "/", "*", "-","+"]
let lastOpertor = ""

const buttonAction = value => {
    if(value === `AC`){
        strToDisplay =""
        return display(strToDisplay)
    }
    if(value === "C"){
        strToDisplay =  strToDisplay.slice(0, -1)
        return display(strToDisplay)
    }
    if(value === "="){
        const lastChat = strToDisplay[strToDisplay.length -1]
        if(operator.includes(lastChat)){
            strToDisplay =  strToDisplay.slice(0, -1)
        }
        return displayTotal()
    }
    if (operator.includes(value)){
        lastOpertor = value
        const lastChat = strToDisplay [strToDisplay.length -1]
        if(operator.includes(lastChat)){
            strToDisplay =  strToDisplay.slice(0, -1)
        }
    }

    if (value === "."){
        if(strToDisplay.includes('.')){
            value = '';
        }
    }

    strToDisplay += value
    display(strToDisplay)
  
}
allButtonsElm.forEach((btn)=>{
btn.addEventListener("click", ()=>{
    const value = btn.innerText;
    buttonAction(value)
});
});

const display = (str) => {
    displayElm.innerText = str || "0.0"
}
const displayTotal = ()=>{
    const total = eval(strToDisplay)
    strToDisplay = total.toString()
    display(strToDisplay)
}