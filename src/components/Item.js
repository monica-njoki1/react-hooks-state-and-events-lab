import React from "react";
import { useState } from "react"
function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)
  function handleClick(){
    setAddToCart((prevAddToCart) => !prevAddToCart)
  }
  return (
    <li className={addToCart ? "in-cart" : ""} data-testid = "item">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className={addToCart ? "remove" : "add"}>{addToCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
