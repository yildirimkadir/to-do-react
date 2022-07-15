import { useState } from "react"
import "./Item.css"
import List from "./List";
// import { BsFillTrashFill } from "react-icons"

function Item() {
    const [item, setItem] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = () => {
        if (!item) {
            alert("bos");
        } else {
            setShow(true)
            
        }


    }



    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center mt-4">To-Do List</h1>
            <div className="mb-3 mt-4 d-flex justify-content-center align-items-center ">
                <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Add your item please .."
                    aria-describedby="button-addon2" 
                    value={item}
                    onChange={(e) => setItem(e.target.value)}/>
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={handleClick}>
                    Add
                </button>
            </div>
            {show && <List item={item}/> }
            

        </div>
    )
}

export default Item