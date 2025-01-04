function weather(temperature){
    let advice = '';
    if(temperature > 30){
        advice = 'Its hot! Wear light clothes.';
    }else if(20 <= temperature <= 30){
        advice = 'Its warm! A t-shirt is fine.';
    }else if(10 <= temperature < 20){
        advice = 'Its cool! Wear a jacket.';
    }else if(10 < temperature){
        advice = 'Its cold! Bundle up';
    }
    return advice;
}
console.log(weather(25));