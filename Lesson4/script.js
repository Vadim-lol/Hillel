let amount = Number(prompt("How many numbers are required to calculate the arithmetic mean")),
    sum = 0, result;

if (amount){
    for( let i = 1;  i <= amount; i++){
        let figure = Number(prompt(`Enter a number ${i}`));
        sum += figure;
    }
    result = sum / amount;
    alert(`The average value of these numbers is ${result}`);
} else
    alert('The entered quantity must be greater than 0.');
