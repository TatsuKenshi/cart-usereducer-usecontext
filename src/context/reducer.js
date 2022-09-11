const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INCREASE_AMOUNT") {
    let temporaryCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: temporaryCart };
  }

  if (action.type === "DECREASE_AMOUNT") {
    let temporaryCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: temporaryCart };
  }

  if (action.type === "GET_TOTALS") {
    let { totalPrice, numberOfItems } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.numberOfItems += amount;
        const itemPrice = amount * price;
        cartTotal.totalPrice += itemPrice;
        return cartTotal;
      },
      {
        totalPrice: 0,
        numberOfItems: 0,
      }
    );
    totalPrice = parseFloat(totalPrice.toFixed(2));

    return { ...state, totalPrice, numberOfItems };
  }

  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, isLoading: false };
  }

  return state;
};

export default reducer;
