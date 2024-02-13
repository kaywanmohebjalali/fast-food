import { createSlice } from "@reduxjs/toolkit";

const initialState={
    order:[],
    isLoading:false,
    isError:null
}

const orderSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemOrder(state, action){

            state.order=[...state.order,action.payload]

        },

        deleteItemOrder(state, action){
             state.order=state.order.filter(item=>item.id!=action.payload)
        },
        // updatePriority(state,action){
        //     // state.
        // }

        loadingOrder(state, action){
            state.isLoading= action.payload
        },
        errorOrder(state, action){
            state.isError= action.payload
        }
    }
})

export default orderSlice.reducer
export const {
 addItemOrder,
 deleteItemOrder,
 loadingOrder,
 errorOrder
} =  orderSlice.actions