// Extra Feature Price Function
function extraFeaturePrice(price, extraId){
    const extraMemory = document.getElementById('extra-memory');
    const extraStorage = document.getElementById('extra-storage');
    const extraDelivery = document.getElementById('extra-delivery');

    // Display Extra Feature Price
    if(extraId == 'memory'){
        extraMemory.innerText= price;
    }
    if(extraId == 'storage'){
        extraStorage.innerText= price;
    }
    if(extraId == 'delivery'){
        extraDelivery.innerText= price;
    }
    
    // Total price 
    const currentPrice = parseInt(extraMemory.innerText) + parseInt(extraStorage.innerText) + parseInt(extraDelivery.innerText);
    const extraPrice = document.getElementById('total-price');
    extraPrice.innerText  = 1299 + currentPrice;

    // Grand Total Price
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = 1299 + currentPrice;
}

// Promo Code Function

function PromoCodeFunction(){

    const extraMemory = document.getElementById('extra-memory');
    const extraStorage = document.getElementById('extra-storage');
    const extraDelivery = document.getElementById('extra-delivery');

    // total price 
    const currentPrice = parseInt(extraMemory.innerText) + parseInt(extraStorage.innerText) + parseInt(extraDelivery.innerText);
   
    return currentPrice;
   
}

// Memory 8GB
document.getElementById('memory-8gb').addEventListener('click', function(){
    extraFeaturePrice(0, 'memory');
});


// Memory 16GB
document.getElementById('memory-16gb').addEventListener('click', function(){
    extraFeaturePrice(180, 'memory');
});

// Storage  256GB
document.getElementById('storage-256gb').addEventListener('click', function(){
    extraFeaturePrice(0, 'storage');
});

// Storage  512GB
document.getElementById('storage-512gb').addEventListener('click', function(){
    extraFeaturePrice(100, 'storage');
});

// Storage  1TB
document.getElementById('storage-1tb').addEventListener('click', function(){
    extraFeaturePrice(180, 'storage');
});

// Delivery 20USD

document.getElementById('delivery-20usd').addEventListener('click', function(){
    extraFeaturePrice(20, 'delivery');
});

// Delivery 0USD

document.getElementById('delivery-0usd').addEventListener('click', function(){
    extraFeaturePrice(0, 'delivery');
});

// Promo Code

document.getElementById('promo-btn').addEventListener('click', function(){

    const currentPrice = PromoCodeFunction();

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = 1299 + currentPrice;

    const grandTotalPrice = grandTotal.innerText;
    const discountPrice =  (grandTotalPrice/100) * 20;
    const priceAfterDiscount = grandTotalPrice - discountPrice;
    const promoInput = document.getElementById('promo-input');
    
    // Promo Code Condition
    if(promoInput.value.toLowerCase() == "stevekaku"){

      grandTotal.innerText = priceAfterDiscount;

    } 
    promoInput.value = '';
});