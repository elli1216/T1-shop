export const CartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);

      if(index === -1) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      } else {
        state.cartItems[index].quantity++;
      }
      return state;

    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
}