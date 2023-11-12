// pages/index.js
"use client"
import Form from '../components/Form';
import List from '../components/List';

export default function Home() {
  const handleAdd = (newItem) => {
    // You can update the state or perform any other actions upon adding a new item
    console.log('Added:', newItem);
  };

  const handleUpdate = (updatedItem) => {
    // You can update the state or perform any other actions upon updating an item
    console.log('Updated:', updatedItem);
  };

  const handleDelete = (deletedItem) => {
    // You can update the state or perform any other actions upon deleting an item
    console.log('Deleted:', deletedItem);
  };

  return (
    <div>
      <h1>Next.js CRUD App</h1>
      <Form onAdd={handleAdd} />
      <List onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
