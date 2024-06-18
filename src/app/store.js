import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/Cart/Cart"

export default configureStore({
  reducer: {
    cart:cartReducer
  },
})