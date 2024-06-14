import React, { useState } from "react";
import './Style.css';

let idcounter = 0;

function generateUniqueId() {
    return idcounter++;
}

const ItemForm = ({ addItems }) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addItems({ id: generateUniqueId(), text });
        }
        setText("");
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Please enter your item here" />
                <button className="add-btn" type="submit">Add Item</button>
            </form>
        </div>

    );
}

export default ItemForm;