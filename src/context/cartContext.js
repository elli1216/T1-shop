import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const initialState = { cartItems: [] };

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = payload => {
    dispatch({ type: 'ADD_PRODUCT', payload });
  };

  const removeProduct = payload => {
    dispatch({ type: 'REMOVE_PRODUCT', payload });
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET', payload: undefined });
  };

  const incrementQty = payload => {
    dispatch({ type: 'INCREMENT_QTY', payload });
  };

  const decrementQty = payload => {
    dispatch({ type: 'DECREMENT_QTY', payload });
  };

  const getItems = () => {
    return state.cartItems;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    clearBasket,
    incrementQty,
    decrementQty,
    getItems,
    ...state
  };

  return(
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;