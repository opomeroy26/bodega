import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])
    const [reorder, setReorder] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8001/inventory")
        .then((resp) => resp.json())
        .then(setInventory)
    }, [])

    function onItemClick(item){
        if (!reorder.includes(item)) {
            setReorder([...reorder, item])
        }
        
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} onItemClick={onItemClick}/>
            <ReorderInventoryList reorder={reorder}/>
        </div>
    );
}

export default InventoryManager;