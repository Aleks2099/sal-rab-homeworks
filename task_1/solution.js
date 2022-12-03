function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message = `${title} за ${price} теперь в корзине!`; 
    console.log(message);
    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue = value + 1;
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
   
    // Задание №1.3. Увеличение суммы в корзине
    let newSum = sum + delta;
    let newSumText = `${newSum} ₽`;
    

    // Конец решения задания №1.3.

    return newSumText;
}

