import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8001/inventory")
        .then((resp) => resp.json())
        .then(setInventory)
    }, [])

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory}/>
            <ReorderInventoryList />
        </div>
    );
}

export default InventoryManager;