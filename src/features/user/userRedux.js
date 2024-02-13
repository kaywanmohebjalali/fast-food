
import { createSlice } from "@reduxjs/toolkit";
import {getUserAddress} from '../../services/apiGeocoding'
import getPosition from "../../services/getGeoLocation";


// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }



async function fetchAddress() {
  // 1) We get the user's geolocation position
  try {
    

  const data = await getPosition();
  
  const position = data


  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getUserAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
  // 3) Then we return an object with the data that we are interested in
  return { position, address };
} catch (error) {
    console.log(error);
}
}



const initialState={
    userName:'',
    address:'',
    position:'',
    isLoading:false,
    isError:null
}

const accountSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        updateName(state, action){
            state.userName=action.payload

        },

        loadingUser(state, action){
            state.isLoading= action.payload
        },
        errorUser(state, action){
            state.isError= action.payload
        },
        userAddress(state, action){
            state.address=action.payload.address
            state.position=action.payload.position
      
        }
        

    }
})

function userAddress(){
  
    return async function(dispatch){
        try {
            dispatch(
                {
                    type:'user/loadingUser',
                    payload:true
                }
            )
            const data = await fetchAddress()
            
            dispatch({
                type:'user/userAddress',
                payload:data
            })

            dispatch({
                type:'user/errorUser',
                payload:null
            })
        } catch (error) {
            dispatch({
                type:'user/errorUser',
                payload:'User denied Geolocation'
            })
        }finally{
            dispatch(
                {
                    type:'user/loadingUser',
                    payload:false
                }
            )
        }

    }
}


export default accountSlice.reducer
export const {
 updateName,
 loadingUser,
 errorUser
} =  accountSlice.actions
export {userAddress}