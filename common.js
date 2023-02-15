
function productPrice(itemsTotalPrice){
    const totalQuantityPrice = document.getElementById(itemsTotalPrice)
    const itemsTotalPriceValue = totalQuantityPrice.innerText 
    const itemsTotalPriceValueNumber  = parseInt(itemsTotalPriceValue)

    return itemsTotalPriceValueNumber;
}

function totalSub(){
    const totalPrductsPrice = productPrice("phonePrice");
    const caseTotalPrice = productPrice('casePrice')
    const currentTotal = totalPrductsPrice + caseTotalPrice    
    const subTotal = document.getElementById("subTotal");
    subTotal.innerText = currentTotal
    return currentTotal;
}

function texCut(){
    const subTotal = totalSub()
    const afterTex = subTotal * 0.15
    const texField = document.getElementById('tex')
    texField.innerText = afterTex
    return afterTex

}

function afterTexTotal(){
    const totalSub = document.getElementById("subTotal").innerText
    const totalSubNumber = parseInt(totalSub)
    const textPrice = document.getElementById('tex').innerText
    const totaltextNumber = parseInt(textPrice)
    const totalPayablePrice = totalSubNumber + totaltextNumber
    const totalPrice = document.getElementById('total')
    totalPrice.innerText = totalPayablePrice
    return totalPayablePrice

}

