let mathMethod = prompt('Select a math method (+,-,*,/):');

if (!['+','-','*','/'].includes(mathMethod))
    alert('There is no such method!');
else {
    let firstNum = Number(prompt('Enter first num:')),
        secondNum = Number(prompt('Enter second num:'));

    if (firstNum && secondNum && (typeof firstNum).includes('number') && (typeof secondNum).includes('number')) {
        if ('+'.includes(mathMethod))
            alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
        else if ('-'.includes(mathMethod))
            alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
        else if ('*'.includes(mathMethod))
            alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
        else if ('/'.includes(mathMethod))
            alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
    } else {
        alert('First number or second number is not a number');
    }
}
