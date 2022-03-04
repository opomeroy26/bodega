import React from 'react'

function InventoryItemCard({item, handleItemClick}) {
    return(
        <div className="card" onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <button onClick={() => console.log("Deleting the item...")}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;