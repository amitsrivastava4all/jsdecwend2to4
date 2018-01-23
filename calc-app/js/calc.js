class Calculator{
    // add(x,y){
    //     return parseInt(x) + parseInt(y);
    // }
    // subtract(x,y){
    //     return x - y;
    // }
    // multiply(x,y){
    //     return x * y;
    // }
    // divide(x,y){
    //     return x / y;
    //}
    operation(firstNumber, secondNumber,operator){
        var expression = firstNumber + operator + secondNumber;
        console.log("expression is ",expression);
        return eval(expression);
    }

}