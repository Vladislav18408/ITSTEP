function triangleType(angle1, angle2, angle3){
    let type = '';
    if((angle1 + angle2 + angle3) === 180){
        if(angle1 === 60 && angle2 === 60 && angle3 === 60){
            type = 'Equilateral Triangle.';
        }else if(angle1 === angle2 || angle2 === angle3 || angle3 === angle1){
            type = "Isosceles Triangle."
        }else if(angle1 === 90 || angle2 === 90 || angle3 === 90){
            type = 'Right Triangle';
        }else{
            type = 'Scalene Triangle.';
        }
    }else{
        return 'Not a Triangle!';
    }
    return type;
}
console.log(triangleType(80, 60, 40));