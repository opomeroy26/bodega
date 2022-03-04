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

    function onDeleteClick(item, e){
        console.log("Deleting item", item)
        e.stopPropagation();
        setReorder(reorder.filter((reorderItem)=> reorderItem !==item ))
        setInventory(inventory.filter((inventoryItem) => inventoryItem !== item))
        fetch(`http://localhost:8001/inventory/${item.id}`, {method: "DELETE"})
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} onItemClick={onItemClick} onDeleteClick={onDeleteClick}/>
            <ReorderInventoryList reorder={reorder} onItemRemoveClick={onItemRemoveClick} onDeleteClick={onDeleteClick}/>
        </div>
    );
}

export default InventoryManager;