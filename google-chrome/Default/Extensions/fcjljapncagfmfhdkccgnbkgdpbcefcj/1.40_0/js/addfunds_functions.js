let addFundsPrices = document.querySelectorAll('.game_purchase_price.price,.giftcard_text');
addFundsPrices.forEach(price => {

    // Fix para sección /selectgiftcard
    if(price?.classList?.[0] == "giftcard_text"){
        price.innerText += ",00";
    }
    let positionArs = price.innerText.lastIndexOf("ARS$ ") + 5;
    let baseNumericPrice = stringToNumber(price,positionArs);
    price.dataset.argentinaPrice = calcularImpuestos(baseNumericPrice);
    price.innerHTML = argentinizar(price.dataset.argentinaPrice);
});


