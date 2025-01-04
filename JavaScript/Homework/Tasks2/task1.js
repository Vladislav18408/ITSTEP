function grade(score){
    let result = '';
    if(score > 0 && score <= 100){
        if(score >= 90){
            result = 'A';
        }else if(score < 90 && score >= 80){
            result = 'B';
        }else if(score < 80 && score >= 70){
            result = 'C';
        }else if(score < 70 && score >= 60){
            result = 'D';
        }else if(score < 60){
            result = 'F';
        }
    }else{
        result = 'Not a valid grade!';
    }
    return result;
}
console.log(grade(-1));