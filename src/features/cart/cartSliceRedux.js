import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalAllCartPrice: 0,
    isLoading: false,
    isError: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart(state, action) {
            state.totalAllCartPrice += action.payload.unitPrice
            let exists = state.cart.find(item => {
                return item.name == action.payload.name
            })
            if (exists) {

                state.cart = state.cart.map(item => {
                    if (item.name == action.payload.name) return { ...item, quantity: item.quantity += 1, totalPrice: item.totalPrice += action.payload.unitPrice }
                    return item
                })

            } else {

                state.cart = [...state.cart, { ...action.payload, totalPrice: action.payload.unitPrice, quantity: 1 }]
            }
        },

        deleteItemCart(state, action) {
            
            state.cart = state.cart.filter(item =>{
               if(item.pizzaId == action.payload){
                state.totalAllCartPrice-=item.totalPrice
                return false
               }
               return true 
            })   

        },

        clearAllCart(state) {
            state.cart = []
            state.totalAllCartPrice = 0
        },

        increment(state, action) {
            state.totalAllCartPrice += action.payload.unitPrice
        
            state.cart.find(item=>{
                if (action.payload.pizzaId == item.pizzaId) {
                    item.totalPrice= action.payload.unitPrice * action.payload.count
                    item.quantity= action.payload.count
                    return true
                    }
            })

        },

        decrement(state, action) {
            state.totalAllCartPrice -= action.payload.unitPrice



            state.cart.find(item=>{
                if (action.payload.pizzaId == item.pizzaId) {
                    item.totalPrice= action.payload.unitPrice * action.payload.count
                    item.quantity= action.payload.count
                    return true
                    }
            })
        },

        loadingCart(state, action) {
            state.isLoading = action.payload
        },
        errorCart(state, action) {
            state.isError = action.payload
        }
    }
})

export default cartSlice.reducer
export const {
    addItemCart,
    deleteItemCart,
    clearAllCart,
    loadingCart,
    increment,
    decrement,
    errorCart
} = cartSlice.actions