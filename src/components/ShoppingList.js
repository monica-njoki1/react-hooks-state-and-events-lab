import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange= (event) => {
    setSelectedCategory(event.target.value)
  }
  const selectedItems = items.filter((item) => {return selectedCategory === "All" || item.category === selectedCategory

  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleCategoryChange} value = {selectedCategory}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
  }
  

export default ShoppingList;
