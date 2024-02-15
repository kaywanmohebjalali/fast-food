import { memo } from "react"
import { useSelector } from "react-redux"

// eslint-disable-next-line react-refresh/only-export-components
const UserName = () => {
  const {userName:name}= useSelector(store=>store.user)
  
  if(!name) return

  return (
    <div className='lowercase font-bold hidden md:block'>{name}</div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(UserName)