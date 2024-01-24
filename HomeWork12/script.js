let hour = Number(prompt('Enter the number of hours')), seconds = 0;
if (hour) {
    seconds = hour * 3600;
} else {
    alert('Incorrect value');
}

alert(seconds);
