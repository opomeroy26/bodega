import React from 'react'

function InventoryItemCard({item}) {
    return(
        <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <button onClick={() => console.log("Deleting the item...")}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;