import { useState } from "react";
import "./Item.css";
import List from "./List";
// import { BsFillTrashFill } from "react-icons"

function Item() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const [show, setShow] = useState();
  //   const [inputRef, setInputRef] = useFocus();

  const handleClick = () => {
    if (!item) return alert("Please enter a item");

    const itemStück = {
      id: Math.floor(Math.random() * 500),
      value: item,
    };
    console.log(itemStück);
    setNewItem((oldItems) => [...oldItems, itemStück]);
    setItem("");
    setShow(true);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div className="container-item d-flex justify-content-start align-items-center flex-column">
      <h1 className="text-center mt-4">To-Do List</h1>
      <div className="mb-3 mt-4 d-flex justify-content-center align-items-center ">
        <input
          type="text"
          className="form-control p-2"
          placeholder="Add your item please .."
          aria-describedby="button-addon2"
          autoFocus
          value={item}
          //   ref={inputRef}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      {show && (
        <List
          item={item}
          newItem={newItem}
          setNewItem={setNewItem}
          show={show}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default Item;
