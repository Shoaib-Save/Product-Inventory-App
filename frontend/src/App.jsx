import React, { useState } from 'react';
import ProductList from './components/productList';
import ProductForm from './components/productForm';

function App() {
  const [selected, setSelected] = useState(null);
  const [refreshToggle, setRefreshToggle] = useState(false);

  return (
    <div className="App">
      <h1>Product Inventory App</h1>
      <ProductForm
        selected={selected}
        refresh={() => setRefreshToggle(!refreshToggle)}
        clearSelection={() => setSelected(null)}
      />
      <ProductList onEdit={setSelected} key={refreshToggle} />
    </div>
  );
}

export default App;
