let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100,1000]
    },
    {
        type: 'laptop',
        price: [50,1500]
    },
    {
        type: 'smartphone',
        price: [80,2000]
    },
    {
        type: 'tablet',
        price: [20,1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

let kitchen = {category: 'kitchen'}, device = {category: 'devices'}, cosmetic = {category: 'cosmetics'};

Object.setPrototypeOf(kitchenProducts, kitchen);
Object.setPrototypeOf(devicesProducts, device);
Object.setPrototypeOf(cosmeticsProducts, cosmetic);

let allProducts = [kitchenProducts, devicesProducts, cosmeticsProducts]


const mainDiv = document.createElement('div');
mainDiv.className = 'wrapper';

allProducts.forEach(function(key) {
    setCategory(key.category);

    getCards(key, key.category);
    const hrDiv = document.createElement('hr');
    hrDiv.style.border = '1px dashed black';
    hrDiv.style.width = '100%';
    mainDiv.appendChild(hrDiv);
});

document.body.appendChild(mainDiv);

function getCards(obj, categoryName){
    Object.keys(obj).forEach(function(key) {
        let divCard = document.createElement('div');
        let productImg = getPicture(categoryName, obj[key].type);
        let productInfo = getProductInfo(obj[key].type, obj[key].price)
        divCard.className = 'card';
        if (categoryName === 'cosmetics')
            divCard.style.flexBasis = '18%';
        divCard.appendChild(productImg);
        divCard.appendChild(productInfo);
        mainDiv.appendChild(divCard);
    });
}
function setCategory(categoryName){
    let category = document.createElement('p');
    category.innerHTML = `Category: ${categoryName}`;
    category.style.width = '100%';
    mainDiv.appendChild(category);
}
function getPicture(categoryName, productType){
    let productImg = document.createElement('img');
    productImg.src = `images/${categoryName}/${productType}.svg`;
    productImg.className = 'productPicture';
    return productImg;
}
function getProductInfo(productType, productPrice){
    if (Array.isArray(productPrice))
        productPrice = productPrice.join('-');
    let productInfo = document.createElement('p');
    productInfo.innerHTML = `Name: <b>${productType}</b><br>Price: <b>$${productPrice}</b>`;
    return productInfo;
}


