import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Product Inventory</h2>
      {products.map(product => (
        <div key={product._id}>
          <strong>{product.name}</strong> - ₹{product.price}
          <button onClick={() => onEdit(product)}>Edit</button>
          <button onClick={() => handleDelete(product.productId)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
