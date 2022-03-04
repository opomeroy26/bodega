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

    function onItemRemoveClick(item){
        //console.log("removing from reorder,", item)
        setReorder(reorder.filter((reorderItem)=> reorderItem !== item))
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} onItemClick={onItemClick}/>
            <ReorderInventoryList reorder={reorder} onItemRemoveClick={onItemRemoveClick}/>
        </div>
    );
}

export default InventoryManager;