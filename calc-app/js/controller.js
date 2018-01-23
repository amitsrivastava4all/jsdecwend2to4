window.addEventListener("load",()=>{
var buttons = document.querySelectorAll("button");
for(let i =0; i<buttons.length; i++){
    buttons[i].addEventListener("click",doOperation);
}
});

function doOperation(){
    console.log("Button Clicked ",this.innerHTML);
    //var opr = this.getAttribute("myoperation");
    var opr = this.innerHTML ;
    var calcObject = new Calculator();
    var firstNumber = document.querySelector("#firstno").value;
    var secondNumber = document.querySelector("#secondno").value;
    var result = 0;
    //result = calcObject[opr](firstNumber,secondNumber);
    result = calcObject.operation(firstNumber,secondNumber,opr)
    // if(opr=='+'){
    //     result = calcObject.add(firstNumber,secondNumber);
    // }
    // else
    // if(opr=='-'){
    //     result = calcObject.subtract(firstNumber,secondNumber);
    // }
    document.querySelector("#result").innerHTML = result;

}

