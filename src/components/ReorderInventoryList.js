import React from 'react'
import InventoryItemCard from "./InventoryItemCard";

function ReorderInventoryList({inventory, onRemoveFromReorder}) {
    const reorderItems = inventory.map((reorderItem) => (
        <InventoryItemCard 
            key={reorderItem.id}
            item={reorderItem}
            handleAddToReorder={onRemoveFromReorder}
        />))
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderItems}
            </div>
        </div>
    );
}

export default ReorderInventoryList;