/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getData } from "../../services/apiRestaurant";
import MenuItem from './MenuItem'

function Menu() {

  const {data:menu} = useLoaderData()


  return <ul className="py-2 divide-y-2 ">
    {menu && menu.map(item=><MenuItem  pizza={item} key={item.id}/>)}
  </ul>
}

export async function loader(){
   
   const data =await getData('menu')
   return data
}

export default Menu;
