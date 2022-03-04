import React from 'react';
import InventoryItemCard from "./InventoryItemCard";

function ReorderInventoryList({reorder, onItemRemoveClick}) {
    const inventoryItem = reorder.map((inventoryObj)=> (
        <InventoryItemCard 
            key={inventoryObj.id}
            item={inventoryObj}
            handleItemClick= {onItemRemoveClick}
        />
    ))


    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {inventoryItem}
            </div>
        </div>
    );
}

export default ReorderInventoryList;