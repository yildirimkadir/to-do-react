import "./List.css";
import { BsFillTrashFill } from "react-icons/bs";

const List = ({ newItem, setNewItem }) => {
  const handleRemove = (id) => {
    const newList = newItem.filter((item) => item.id !== id);
    setNewItem(newList);
  };

  return (
    <div className="container-liste">
      <ul>
        {newItem.map((itm) => {
          console.log(itm);
          return (
            <div className="todolist">
              <li key={itm.id}>{itm.value}</li>
              <BsFillTrashFill
                className="icon"
                onClick={() => handleRemove(itm.id)}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
