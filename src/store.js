import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './features/user/userRedux'
import cartReducer from './features/cart/cartSliceRedux'
const store=configureStore({
    reducer:{
      user:accountReducer,
      cart:cartReducer
    }
})

export default store