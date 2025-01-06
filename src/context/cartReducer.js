export const CartReducer = (state, action) => {
  let index = -1;

  if (action.payload) {
    index = state.cartItems.findIndex(item => item.id === action.payload.id);
  }

  switch (action.type) {
    case 'ADD_PRODUCT':
    case 'INCREMENT_QTY':
      if (index === -1) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      } else {
        state.cartItems[index].quantity++;
      }
      break;

    case 'REMOVE_PRODUCT':
      if (index > -1) {
        state.cartItems.splice(index, 1);
      }
      break;

    case 'CLEAR_BASKET':
      state.cartItems = [];
      break;

    case 'DECREMENT_QTY':
      if (index > -1) {
        state.cartItems[index].quantity--;
        if (state.cartItems[index].quantity === 0) {
          state.cartItems.splice(index, 1);
        }
      }
      break;

    default:
  }
  return state;
}