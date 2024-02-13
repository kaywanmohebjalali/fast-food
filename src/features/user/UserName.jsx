import { memo } from "react"
import { useSelector } from "react-redux"

const UserName = () => {
  const {userName:name}= useSelector(store=>store.user)
  
  if(!name) return

  return (
    <div className='lowercase font-bold hidden md:block'>{name}</div>
  )
}

export default memo(UserName)