import "./List.css"
import { BsFillTrashFill } from "react-icons"


const List = ({item}) => {
  return (
    <div>
        <li>{item.toUpperCase()}</li>
        <BsFillTrashFill /> 
        
    </div>

  )
}

export default List