// components/Form.js
import { useState } from 'react';

export default function Form({ onAdd }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('/api/create', {
      method: 'POST', // Ensure that the method is set to 'POST'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      const data = await response.json();
      onAdd(data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input type="text" name="itemName" onChange={handleChange} />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}
