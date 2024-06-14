import React from "react";
import Item from "./Item";

const ItemList = ({ items, deleteItem, updateItemName }) => {
  const itemList = items.map((item, index) => (
    <Item
      className="item"
      key={item.id}
      item={item}
      text={item.text}
      index={index + 1}
      deleteItem={deleteItem}
      updateItemName={updateItemName}
    />
  ));

  return <div>{itemList}</div>;
};

export default ItemList;
