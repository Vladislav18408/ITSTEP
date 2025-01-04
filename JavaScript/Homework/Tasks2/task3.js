function NumCheck(number){
    let determination = '';
    if(number > 0){
        determination = 'Positive!';
    }else if(number === 0){
        determination = 'Zero!';
    }else if(number < 0){
        determination = 'Negative!';
    }
    return determination;
}
console.log(NumCheck(0));