import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api';

const formatDate = function(originalDate) {
  const date = new Date(originalDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${year}-${month}-${day}`;
};

const ProductForm = ({ selected, refresh, clearSelection }) => {
  const [formData, setFormData] = useState({
    name: '', description: '', manufacturer: '',
    manufacturingDate: '', price: '', quantity: ''
  });

  useEffect(() => {
    if (selected) setFormData(selected);
  }, [selected]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selected?._id) {
      await updateProduct(selected.productId, formData);
    } else {
      await createProduct(formData);
    }
    refresh();
    clearSelection();
    setFormData({ name: '', description: '', manufacturer: '', manufacturingDate: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="manufacturer" placeholder="Manufacturer" value={formData.manufacturer} onChange={handleChange} required />
      <input type="date" name="manufacturingDate" value={formatDate(formData.manufacturingDate)} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
      <button type="submit">{selected ? 'Update' : 'Create'} Product</button>
    </form>
  );
};

export default ProductForm;
