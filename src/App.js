import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemForm from './Components/ItemForm';
import ItemList from './Components/ItemList';

function App() {

  const [items, setItems] = useState([]);

  const addItems = (newItem) => {
    setItems([...items, newItem]);
  }

  function deleteItem(id) {
    const updatedItems = items.filter(function (item) { return item.id !== id });
    setItems(updatedItems);
  }

  const updateItemName = (id, newItem) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, text: newItem };
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div className='app'>
      <h1>Item Tracking App</h1>
      <ItemForm addItems={addItems} />
      <ItemList items={items} deleteItem={deleteItem} updateItemName={updateItemName} />
    </div>
  );
}

export default App;
