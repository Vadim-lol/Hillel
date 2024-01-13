let num1 = Number(prompt('Enter first num (a):')),
    sumOfFactorials = 0;
if (num1){
    let num2 = Number(prompt('Enter second num (b):'));
    if (num2 && num2 > num1){
        let step = Number(prompt('Enter the step (h):'));
        if (step){
            for (let i = num1; i <= num2; i += step){
                let tempSum = 0;
                for (let j = 1; j <= i; j++){
                    if (tempSum)
                        tempSum *= j;
                    else
                        tempSum = j;
                }
                sumOfFactorials += tempSum;
            }
        }
        else
            alert('The step must be greater than 0');
    } else
        alert('The value of a must be greater than the value of b');
} else {
    alert('First number is not a number');
}

if (sumOfFactorials)
    alert(`Sum of factorials ${sumOfFactorials}`)