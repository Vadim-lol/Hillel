let divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';

for (let i = 2; i  <= 14; i++) {
    for (let j= 1; j <= 4; j++){
        let divCard = document.createElement('div'),
            divTextTop = document.createElement('div'),
            divTextBottom = document.createElement('div'),
            imgTop = document.createElement('img'),
            imgBottom = document.createElement('img'),
            additionalImg = document.createElement('img');

        let cardFlag = i === 11 ? 'J' : i === 12 ? 'Q' : i === 13 ? 'K' : i === 14 ? 'T' : i;

        setCardClass(divCard, divTextTop, divTextBottom, (typeof cardFlag).includes('string') ? additionalImg : null);

        setCardValue(divTextTop, divTextBottom, cardFlag);

        setSuit(imgTop, imgBottom, j, cardFlag === 'T' ? additionalImg : null);

        buildCard(divCard, divTextTop, divTextBottom, imgTop, imgBottom, (typeof cardFlag).includes('string') ? additionalImg : null, cardFlag);
    }
}

document.body.appendChild(divWrapper);


function setCardClass(divCard, divTextTop, divTextBottom, additionalImg) {
    divCard.className = additionalImg ? 'card card--person' : 'card';
    divTextTop.className = 'card__info';
    divTextBottom.className = 'card__info';
    if (additionalImg)
        additionalImg.className = 'person';
}

function setCardValue(divTextTop, divTextBottom, value){
    divTextTop.innerHTML = value;
    divTextBottom.innerHTML = value;
}

function setSuit(imgTop, imgBottom, value, additionalImg) {
    switch (value) {
        case 1: {
            imgTop.src = 'images/diamonds.svg';
            imgBottom.src = 'images/diamonds.svg';
            if (additionalImg)
                additionalImg.src = 'images/diamonds.svg';
            break;
        }
        case 2: {
            imgTop.src = 'images/clubs.svg';
            imgBottom.src = 'images/clubs.svg';
            if (additionalImg)
                additionalImg.src = 'images/clubs.svg';
            break;
        }
        case 3: {
            imgTop.src = 'images/hearts.svg';
            imgBottom.src = 'images/hearts.svg';
            if (additionalImg)
                additionalImg.src = 'images/hearts.svg';
            break;
        }
        case 4: {
            imgTop.src = 'images/spades.svg';
            imgBottom.src = 'images/spades.svg';
            if (additionalImg)
                additionalImg.src = 'images/spades.svg';
            break;
        }
        default: {
            imgTop.src = 'images/diamonds.svg';
            imgBottom.src = 'images/diamonds.svg';
            if (additionalImg)
                additionalImg.src = 'images/diamonds.svg';
            break;
        }
    }
}

function buildCard(divCard, divTextTop, divTextBottom, imgTop, imgBottom, additionalImg, value) {
    divTextTop.appendChild(imgTop);
    divTextBottom.appendChild(imgBottom);
    divCard.appendChild(divTextTop);
    if (additionalImg) {
        setPersonImg(additionalImg, value);
        divCard.appendChild(additionalImg);
    }
    divCard.appendChild(divTextBottom);
    divWrapper.appendChild(divCard);
}

function setPersonImg(additionalImg, value) {
    if (value === 'J') additionalImg.src = 'images/jack.svg';
    if (value === 'Q') additionalImg.src = 'images/queen.svg';
    if (value === 'K') additionalImg.src = 'images/king.svg';
}
