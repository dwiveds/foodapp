import React, { useState, useEffect } from 'react';
import axios from 'axios';


function FoodAdmin() {
  const [foodItems, setFoodItems] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', description: '', category: '', imageUrl: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/foodItems/');
    console.log(response);
    setFoodItems(response.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    await axios.post('http://localhost:5000/api/foodItems/create', form);
    fetchData();
  };

  const handleUpdate = async (id) => {
    await axios.put(`/api/foodItems/update/${id}`, form);
    fetchData();
  };

  const handleDelete = async (id) => {
    try{
      await axios.delete(`http://localhost:5000/api/foodItems/delete/${id}`);
      fetchData();
    }catch(err){
      console.error('Error in deleting : ',err);
    }
    
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <input type="text" name="category" placeholder="Category" onChange={handleChange} />
      <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} />
      <button onClick={handleCreate}>Add Food Item</button>

      <h2>Food Items</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item._id}>
            
            {item.name} - ${item.price}
            <button onClick={() => handleUpdate(item._id)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodAdmin;
