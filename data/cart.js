export const cart = []
export function addToCart(productId) {
    const selectedValues = document.querySelectorAll(".select-options");
  
    let allSelections = 0;
  
    selectedValues.forEach((select) => (allSelections += select.value));
  
    console.log(allSelections);
  
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId,
        quantity: 1,
      });
    }
  }