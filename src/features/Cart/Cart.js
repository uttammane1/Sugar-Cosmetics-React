import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
 name: 'cart',
  initialState:{
cartItems: [],
searchState: '',
userName:'Login/Register'
  },
  reducers: {



    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = removeItem;
    },

    toggleSearch:(state,action)=>{
      state.searchState= action.payload;
    },
    toggleUsername:(state,action)=>{
      state.userName=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,incrementQuantity,decrementQuantity,removeItem,toggleSearch,toggleUsername} = cart.actions

export default cart.reducer