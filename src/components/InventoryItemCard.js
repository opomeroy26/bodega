import React from 'react'

function InventoryItemCard({item, handleAddToReorder, onDeleteClick}) {
    const {image, name, price} = item
    return(
        <div className="card" onClick={() => handleAddToReorder(item)}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={(e) => onDeleteClick(item, e)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;