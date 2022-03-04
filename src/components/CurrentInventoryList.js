import React from 'react'
import InventoryItemCard from "./InventoryItemCard";

function CurrentInventoryList({inventory, onItemClick, onDeleteClick}) {
    const inventoryItem = inventory.map((inventoryObj)=> (
        <InventoryItemCard 
            key={inventoryObj.id}
            item={inventoryObj}
            handleItemClick = {onItemClick}
            handleDeleteClick = {onDeleteClick}
        />
    ))

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryItem}
            </div>
        </div>
    );
}

export default CurrentInventoryList;