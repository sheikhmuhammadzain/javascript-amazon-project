export const cart = [
  {
    productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
    quantity: 2,
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
  },
]
export function addToCart(productId) {
  const selectedValues = document.querySelectorAll('.select-options')

  let allSelections = 0

  selectedValues.forEach(select => (allSelections += select.value))

  console.log(allSelections)

  let matchingItem

  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem
    }
  })

  if (matchingItem) {
    matchingItem.quantity += 1
  } else {
    cart.push({
      productId,
      quantity: 1,
    })
  }
}


export function removeFromCart (productId){

const newCart = []

cart.forEach(cartItem => {
  if(cartItem.productId !== productId){
    newCart.push(cartItem)  
  }
})
cart = newCart
}