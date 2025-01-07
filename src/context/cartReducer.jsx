const Storage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}

export const CartReducer = (state, action) => {
  let index = -1;

  if (action.payload) {
    index = state.cartItems.findIndex(item => item.id === action.payload.id);
  }

  let newItems = [...state.cartItems];

  switch (action.type) {
    case 'ADD_PRODUCT':
    case 'INCREMENT_QTY':
      if (index === -1) {
        //state.cartItems.push({...action.payload,quantity: 1});
        newItems.push({...action.payload, quantity: 1});
      } else {
        //state.cartItems[index].quantity++;
        newItems[index].quantity++;
      }
      break;

    case 'REMOVE_PRODUCT':
      if (index > -1) {
        //state.cartItems.splice(index, 1);
        newItems = state.cartItems.filter(item => item.id !== action.payload.id);
      }
      break;

    case 'CLEAR_BASKET':
      newItems = [];
      break;

    case 'DECREMENT_QTY':
      if (index > -1) {
        newItems[index].quantity--;
        if (newItems[index].quantity === 0) {
          newItems = newItems.filter(item => item.id !== action.payload.id);
        }
      }
      break;

    default:
  }
  state.cartItems = newItems;
  Storage(newItems);

  return state;
}