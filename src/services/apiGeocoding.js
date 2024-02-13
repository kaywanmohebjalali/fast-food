// export async function getAddress({ latitude, longitude }) {
//   const res = await fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
//   );
//   if (!res.ok) throw Error("Failed getting address");

//   const data = await res.json();
//   return data;
// }


export async function getUserAddress({ latitude, longitude }){

  try {
    const response = await fetch( `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
    const data =await response.json()
    return data
  } catch (error) {
    return new Error(error.message)
  }

}