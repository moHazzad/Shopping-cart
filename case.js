function updateCaseQuantity(isIncrease) {
  let quantity = document.getElementById("caseQunatity");
  let quantityString = quantity.value;
  let previousQuantity = parseInt(quantityString);
  let updateQuantity;
  if (isIncrease === true) {
    updateQuantity = previousQuantity + 1;
  } else {
    updateQuantity = previousQuantity - 1;
  }
  quantity.value = updateQuantity;
  return updateQuantity;
}

function casePriceUpdate(newItemQuantity) {
  const PhonePrice = document.getElementById("casePrice");
  let updatePhonePrice = newItemQuantity * 59;
  PhonePrice.innerText = updatePhonePrice;
}



document.getElementById("caseIncrease").addEventListener("click", function () {
    console.log("case increase");
    let newItemQuantity = updateCaseQuantity(true);
    casePriceUpdate(newItemQuantity);
    totalSub()
    texCut()
    afterTexTotal()
    
});

document.getElementById("caseDecres").addEventListener("click", function () {
  console.log("case decries");
  let newItemQuantity = updateCaseQuantity(false);
  casePriceUpdate(newItemQuantity);
  totalSub() 
  texCut()
  afterTexTotal()
  
});




