function ageCategory(age){
    let category = '';
    if(age < 13){
        category = 'Child';
    }else if(13 <= age && age < 20){
        category = 'Teenager';
    }else if(20 <= age && age < 60){
        category = 'Adult';
    }else if(age >= 60){
        category = 'Senior';
    }
    return category;
}
//eawda
console.log(ageCategory(30));