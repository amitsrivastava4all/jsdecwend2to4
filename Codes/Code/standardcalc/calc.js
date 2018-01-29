window.addEventListener("load",()=>{
    var numberButtonArr = document.querySelectorAll(".number");
    for(let i = 0;i<numberButtonArr.length; i++){
        numberButtonArr[i].addEventListener("click",takeNumber);
    }
    var operationButtonArr = document.querySelectorAll(".operation");
    for(let i =0; i<operationButtonArr.length; i++){
        operationButtonArr[i].addEventListener("click",operation);
    }
    document.querySelector("#result").addEventListener("click",equals);
});
var current = "";
var firstNumber = "";
var operationCompleted=true ;
function operation(){
     current = this.innerHTML ;
    firstNumber = document.querySelector("#output").value;
    operationCompleted=false;
}

function equals(){
    if(current=='+'){
        document.querySelector("#output").value = parseInt(firstNumber) + parseInt(document.querySelector("#output").value);
    }
    else
    if(current=='-'){
        document.querySelector("#output").value = parseInt(firstNumber) - parseInt(document.querySelector("#output").value);
    }
    current = "";
}

function takeNumber(){
    if(!current.trim().length==0 && !operationCompleted){
        document.querySelector("#output").value="";
        operationCompleted = true;
    }
    var output = document.querySelector("#output");
    if(output.value.trim().length==0){
        output.value = this.innerHTML;
    }
    else{
        output.value = output.value + this.innerHTML;
    }
}