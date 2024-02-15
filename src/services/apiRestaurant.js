const API_URL = 'https://react-fast-pizza-api.onrender.com/api';


// my fetch function


export async function getData(sliceUrl){
  let message = ''
  try {
    
   if(sliceUrl[0]=='o'){
    message=`Couldn't find order #${sliceUrl.slice(6)}`
   }else if(sliceUrl=='menu'){
    message ='Failed getting menu'
   }
    const response =await fetch(`${API_URL}/${sliceUrl}`)
    if(response.status=='404')throw new Error(message)
    const data =await response.json()
    return data
    
  } catch(error)  {
     throw Error(message);
    
  }

}



export async function postData(newOrder,id=null) {
  try {

    const res = await fetch(`${API_URL}/order${id?id:''}`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await res.json();
    // console.log('d : ',data);
    return data;
  } catch {
    throw Error(`${id?'Failed updating your order':'Failed creating your order'}`);
  }
}




export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
