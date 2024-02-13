import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/user/UserName"
import { memo } from "react"


const Header = () => {
  
  return (
   <header className="flex-center bg-orange-600 uppercase px-4 py-3 border-b-1 border-stone-300 shadow-md">
       <Link to='/'>Fast Pizza</Link>
       <SearchOrder/>
       <UserName/>

   </header>
  )
}

export default memo(Header);