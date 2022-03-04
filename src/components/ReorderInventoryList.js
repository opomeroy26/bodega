import React from 'react';
import InventoryItemCard from "./InventoryItemCard";

function ReorderInventoryList({reorder}) {
    const inventoryItem = reorder.map((inventoryObj)=> (
        <InventoryItemCard 
            key={inventoryObj.id}
            item={inventoryObj}
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