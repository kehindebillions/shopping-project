let quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener('change',quantityChange)
}

function quantityChange(event) {
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

let removeCartItemButton = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButton)
for (let i = 0; i < removeCartItemButton.length; i++) {
    let button = removeCartItemButton[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
function updateCartTotal() {
    let cartContainer = document.getElementsByClassName("cart-items")[0]
    let cartRows = cartContainer.getElementsByClassName('cart-row')
    let total = 0
    for (i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$',''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)
}


function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
