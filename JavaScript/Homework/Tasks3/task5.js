function calculateDiscount(amount){
    let discount = 0;
    if(amount < 50){
        console.log("No discount!")
    } else if(amount >= 50 && amount < 100){
        discount = 0.05;
        console.log("5% discount!");
    }else if(amount >= 100 && amount < 200){
        discount = 0.1;
        console.log("10% discount!");
    }else if(amount >= 200){
        discount = 0.15;
        console.log("15% discount!");le.log("15% discount!");le.log("15% discount!");
    }
    let price = amount - (amount * discount); 
    return price;
}
console.log(calculateDiscount(140));