function weekdays (number){
    let text = ''
    if(number >= 1 || number <= 7){
        if(number == 1){
            text = 'Monday';
        }else if(number == 2){
            text = 'Tuesday';
        }else if(number == 3){
            text = 'Wednesday';
        }else if(number == 4){
            text = 'Thursday';
        }else if(number == 5){
            text = 'Friday';
        }else if(number == 6){
            text = 'Saturday';
        }else if(number == 7){
            text = 'Sunday';
        }else if(number < 1 || number > 7){
            text = 'Invalid number';
        }
    }
    return text;
}
    console.log(weekdays(8));