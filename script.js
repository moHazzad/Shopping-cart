
function updateItemQuantity(isIncrease){
    let quantity = document.getElementById('ItemQuantity')
    let quantityString = quantity.value
    let previousQuantity = parseInt(quantityString)
    let updateQuantity;
    if(isIncrease === true){
        updateQuantity = previousQuantity + 1;
    }else{
        updateQuantity = previousQuantity - 1;
    }
    quantity.value = updateQuantity
    return updateQuantity; 
}

function phonePriceUpdate(newItemQuantity){
    const PhonePrice = document.getElementById('phonePrice')
    let updatePhonePrice = newItemQuantity * 1219
    PhonePrice.innerText = updatePhonePrice

}



document.getElementById('decries').addEventListener('click', function(){
    let newItemQuantity = updateItemQuantity(false)
    phonePriceUpdate(newItemQuantity)   
    totalSub() 
    texCut()
    afterTexTotal()
})

document.getElementById('increase').addEventListener('click', function(){  
    let newItemQuantity = updateItemQuantity(true)
    phonePriceUpdate(newItemQuantity)
    totalSub() 
    texCut()
    afterTexTotal()
})






