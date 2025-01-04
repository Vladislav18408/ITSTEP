function calcuateFine(speedLimit, vehicleSpeed){
    let overSpeedLimit = vehicleSpeed - speedLimit;
    let fine = '';
    if(overSpeedLimit <= 0){
        fine = 'No fine!';
    }else if(overSpeedLimit >= 1 && overSpeedLimit <= 20){
        fine = 'Fine: 50$!';
    }else if(overSpeedLimit >= 21 && overSpeedLimit <= 40){
        fine = 'Fine: 150$!';
    }else if(overSpeedLimit >= 40){
        fine = 'Fine: 500$!';
    }
    return fine;
}
console.log(calcuateFine(50, 85));