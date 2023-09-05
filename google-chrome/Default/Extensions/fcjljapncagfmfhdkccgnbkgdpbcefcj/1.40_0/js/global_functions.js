const walletBalance = getBalance();
const totalTaxes = getTotalTaxes();

function getPrices(){
    let prices = document.querySelectorAll(priceContainers);

    // Fix específico para obtener las DLCs sin descuento y que estas no hagan overlap con las DLCs con descuento
    let standardDlcPrices = document.querySelectorAll(`.game_area_dlc_price:not([${attributeName}]`);
    standardDlcPrices.forEach(dlcPrice => { 
        if(!dlcPrice.querySelector("div")){
            setArgentinaPrice(dlcPrice);
        }
    });
    prices.forEach(price => setArgentinaPrice(price));
}

function setArgentinaPrice(price){
    if(price.innerText.includes("ARS$") && price.hasChildNodes()){
        let positionArs = price.innerText.lastIndexOf("ARS$ ") + 5;
        let baseNumericPrice = stringToNumber(price,positionArs);
        price.dataset.originalPrice = baseNumericPrice.toFixed(2);
        price.dataset.argentinaPrice = calcularImpuestos(baseNumericPrice);
        renderPrices(price);
    }

}

function sanitizePromoLists(){
    let items = document.querySelectorAll('.promo_item_list .price br');
    items.forEach(item => item.remove());
}

function renderPrices(price){
    let argentinaPrice = numberToString(price.dataset.argentinaPrice);
    let originalPrice = numberToString(price.dataset.originalPrice);

    // Fix para contenedores que intercalan un BR entre precio original y precio en oferta 
    if (price.classList.contains("was")) sanitizePromoLists();
    
    // Agrego Listener para switchear precios con click
    if(!price.classList.contains('discount_original_price') || !price.classList.contains('responsive_secondrow')){
        price.addEventListener('click',showSecondaryPrice); 
        price.style.cursor="pointer";
    }

    if(walletBalance > price.dataset.originalPrice && !price.classList.contains('discount_original_price')){

        // Fix para Search View
        if(price.matches('.discounted.responsive_secondrow')){
            let precioTachado = price.querySelector("strike");
            
            if(precioTachado) price.innerHTML = `<strike style="color: #888888;">${precioTachado.innerText}</strike> <br> ${originalPrice} ${emojiWallet}`; 
            price.removeEventListener('click',showSecondaryPrice); 
        }
        else{
            price.innerHTML = originalPrice + emojiWallet;     
            price.classList.add("original");

            if(price.previousElementSibling){
                if(isInsideString(price.previousElementSibling,"ARS$")) price.previousElementSibling.innerText = numberToString(price.previousElementSibling.dataset.originalPrice); 
            }
        }
    } 
    else
    {
        // Fix para Search View
        if(price.matches('.discounted.responsive_secondrow')){
            let precioTachado = price.querySelector("strike");
            if(precioTachado) price.innerHTML = `<strike style="color: #888888;"> ${argentinizar(calcularImpuestos(stringToNumber(precioTachado)),false)} </strike> <br> ${argentinaPrice} ${emojiMate}`; 
            price.removeEventListener('click',showSecondaryPrice); 

        } else{

            price.innerHTML = argentinaPrice + emojiMate;
            price.classList.add("argentina");

            if(price.previousElementSibling){
                if(isInsideString(price.previousElementSibling,"ARS$")) price.previousElementSibling.innerText = numberToString(price.previousElementSibling.dataset.argentinaPrice); 
            }
        }
    }

    // Fix para procesar correctamente Bundles Dinámicas en Firefox
    setTimeout(function(){
        if(price.querySelector('.your_price_label')){
            price.removeAttribute('data-original-price');
        }
    },1500)

}

function showSecondaryPrice(e){
    e.preventDefault();
    let selectedPrice = e.currentTarget;
    selectedPrice.classList.add("transition-effect");
    selectedPrice.style.opacity = 0;
    if(selectedPrice.classList.contains("argentina")){
        switchPrices(selectedPrice,"argentina","original",emojiWallet);
    }
    else if(selectedPrice.classList.contains("original")){
        switchPrices(selectedPrice,"original","argentina",emojiMate);
    }
}

function switchPrices(selector,first,second,symbol){
    setTimeout(function(){
        selector.style.opacity=1;
        selector.classList.remove(first);
        selector.classList.add(second);

        if(selector.classList.contains("suscription-price")){
            selector.innerHTML = numberToStringSub(selector.dataset[second+"Price"] + symbol);
        } else{
            selector.innerHTML = numberToString(selector.dataset[second+"Price"] + symbol);
        }
    },250);
}



