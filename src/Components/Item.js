import React ,{useState} from "react";

const Item = ({ index, item, deleteItem, updateItemName }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(item.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleSave = () => {
        setIsEditing(false);
        updateItemName(item.id, editedText);
    };

    return (
        <div className="item">
            {isEditing ? (
                <input type="text"
                    rows="3"
                    value={editedText}
                    onChange={handleChange}
                    autoFocus
                />
            ) : (
                <p>{index}. {item.text}</p>
            )}
            <div className="item-buttons">
                {isEditing ? (
                    <button className="add-btn" onClick={handleSave}>Save</button>
                ) : (
                    <>
                        <button className="edit-btn" onClick={handleEdit}>Edit</button>
                        <button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Item;