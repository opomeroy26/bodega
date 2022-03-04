import React from 'react';
import InventoryItemCard from "./InventoryItemCard";

function CurrentInventoryList({inventory, onAddToReorderClick, onDeleteClick}) {
    const inventoryItems = inventory.map((inventoryItem) => (
        <InventoryItemCard 
            key={inventoryItem.id}
            item={inventoryItem}
            handleAddToReorder = {onAddToReorderClick}
            onDeleteClick = {onDeleteClick}
        />
        ))

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryItems}
            </div>
        </div>
    );
}

export default CurrentInventoryList;