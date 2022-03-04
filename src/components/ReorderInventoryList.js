import React from 'react';
import InventoryItemCard from "./InventoryItemCard";

function ReorderInventoryList({reorder, onItemRemoveClick, onDeleteClick}) {
    const inventoryItem = reorder.map((inventoryObj)=> (
        <InventoryItemCard 
            key={inventoryObj.id}
            item={inventoryObj}
            handleItemClick= {onItemRemoveClick}
            handleDeleteClick = {onDeleteClick}
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