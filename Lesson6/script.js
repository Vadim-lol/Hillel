let answer1 = Number(prompt('What is 2+2?')),
    answer2 =  confirm('Does the sun rise in the east?'),
    answer3 = prompt('How much is 5 / 0?').toLowerCase(),
    answer4 = prompt('What color is the sky?').toLowerCase(),
    answer5 = Number(prompt('What\'s the right answer to the ultimate question of life, the universe and everything.')),
    evaluation = 0;

if (answer1 === 4)
    evaluation += 10;
if (answer2)
    evaluation += 10;
if (answer3 === 'infinity')
    evaluation += 10;
if (answer4 === 'blue')
    evaluation += 10;
if (answer5 === 42)
    evaluation += 10;

alert(`Your assessment is ${evaluation}`);
