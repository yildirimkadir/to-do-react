import "./List.css";
import { BsFillTrashFill } from "react-icons/bs";

const List = ({ newItem }) => {
  return (
    <div>
      <ul>
        {newItem.map((itm) => {
          console.log(itm);
          return <li key={itm.id}>{itm.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
