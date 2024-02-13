



async function getPosition(){
    if( !navigator.geolocation){
        alert("Your browser does not support geolocation");
        throw new Error("Your browser does not support geolocation")
    }
    
   return new Promise((resolve,reject)=>{

    navigator.geolocation.getCurrentPosition(pos=>{
       resolve({
         latitude: pos.coords.latitude,
         longitude: pos.coords.longitude
       })
     },
 
     err=>{
         reject(err.message)
     }
     )
   })



}

export default getPosition