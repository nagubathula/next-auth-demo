// components/List.js
import { useState, useEffect } from 'react';

export default function List({ onUpdate, onDelete }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../api/getAll');
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, []);

  const handleUpdate = async (_id, updatedData) => {
    const response = await fetch('../api/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id, ...updatedData }),
    });

    if (response.ok) {
      const data = await response.json();
      onUpdate(data);
    }
  };

  const handleDelete = async (_id) => {
    const response = await fetch('../api/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });

    if (response.ok) {
      const data = await response.json();
      onDelete(data);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          {item.itemName}
          <button onClick={() => handleUpdate(item._id, { itemName: 'Updated Item' })}>Update</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
