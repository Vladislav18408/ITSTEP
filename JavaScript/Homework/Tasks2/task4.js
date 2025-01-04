function calculate(a, b, operator) {
    if(operator === "+"){
        return a + b;
    }else if(operator === "-"){
        return a - b;
    }else if(operator === "*"){
        return a * b;
    }else if(operator === "/"){
        if(b === 0){
            return "Cannot divide by zero!"
        }
        return a / b;
    }else{
        return "Operator is not supported!";
    }
}

console.log("Result is: " + calculate(15, 10, "!"));
