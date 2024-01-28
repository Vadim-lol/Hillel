let maxNumber = 0;
function myPow (num, degree) {
    if (maxNumber === 10)
        return;
    maxNumber++;
    let result = 1;
    for (let i = 0 ; i < degree; i ++){
        result *= num;
    }
    console.log(result);
    myPow(num, degree);
}

myPow(2,3);