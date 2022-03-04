import React, {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])
    const [reorder, setReorder] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8001/inventory")
        .then((resp)=> resp.json())
        .then(setInventory)

    }, [])

    function onAddToReorderClick(item){
        if(!reorder.includes(item)) {
            setReorder([...reorder, item])
        }
        
    }

    function onRemoveFromReorder(item){
        //console.log("removing from reorder", item)
        setReorder(reorder.filter((reorderItem) => reorderItem !==item))
    }

    function onDeleteClick(item, e){
        console.log("Deleting", item)
        e.stopPropagation()
        fetch(`http://localhost:8001/inventory/${item.id}`, {method: "DELETE"})
        setReorder(reorder.filter((reorderItem) => reorderItem !==item))
        setInventory(inventory.filter((inventoryItem) => inventoryItem !== item))
    }

    return(
        <div className="container">
            <CurrentInventoryList 
                inventory={inventory} 
                onAddToReorderClick={onAddToReorderClick}
                onDeleteClick ={onDeleteClick} />
            <ReorderInventoryList 
                inventory={reorder}
                onRemoveFromReorder={onRemoveFromReorder}
                onDeleteClick = {onDeleteClick}
                />
        </div>
    );
}

export default InventoryManager;