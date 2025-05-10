// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getProducts } from "../api";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getProducts();
//       setProducts(data.data);
//       setFilteredProducts(data.data); // Set initially
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const lowerSearch = searchTerm.toLowerCase();
//     const results = products.filter(
//       (p) =>
//         p.name.toLowerCase().includes(lowerSearch) ||
//         (p.category && p.category.toLowerCase().includes(lowerSearch))
//     );
//     setFilteredProducts(results);
//   }, [searchTerm, products]);

//   return (
//     <div>
//       <h1>Product List</h1>

//       <div style={{ marginBottom: "1rem" }}>
//         <input
//           type="text"
//           placeholder="Search by name or category"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Link to="/products/add" style={{ marginLeft: "1rem" }}>
//           Add New Product
//         </Link>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((p) => (
//             <tr key={p._id}>
//               <td>{p.name}</td>
//               <td>{p.category}</td>
//               <td>{p.price}</td>
//               <td>{p.quantity}</td>
//               <td>
//                 <Link to={`/products/edit/${p.productId}`}>Edit</Link>
//                 <Link to={`/products/delete/${p.productId}`}>Delete</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductList;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getProducts } from "../api";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const [isVisible, setIsVisible] = useState({
//     name: true,
//     description: true,
//     manufacturer: true,
//     manufacturingDate: true,
//     price: true,
//     quantity: true,
//   });

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getProducts();
//       setProducts(data.data);
//       setFilteredProducts(data.data);
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const lowerSearch = searchTerm.toLowerCase();
//     const results = products.filter(
//       (p) =>
//         p.name.toLowerCase().includes(lowerSearch) ||
//         (p.description && p.description.toLowerCase().includes(lowerSearch)) ||
//         (p.manufacturer && p.manufacturer.toLowerCase().includes(lowerSearch))
//     );
//     setFilteredProducts(results);
//   }, [searchTerm, products]);

//   const toggleField = (field) => {
//     setIsVisible((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   return (
//     <div>
//       <h1>Product List</h1>

//       {/* Search and Add Button */}
//       <div style={{ marginBottom: "1rem" }}>
//         <input
//           type="text"
//           placeholder="Search by name, description, manufacturer"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Link to="/products/add" style={{ marginLeft: "1rem" }}>
//           Add New Product
//         </Link>
//       </div>

//       {/* Field Visibility Checkboxes */}
//       <div style={{ marginBottom: "1rem" }}>
//         <strong>Customize Fields:</strong>
//         {Object.keys(isVisible).map((key) => (
//           <label key={key} style={{ marginLeft: "10px" }}>
//             <input
//               type="checkbox"
//               checked={isVisible[key]}
//               onChange={() => toggleField(key)}
//             />
//             {key}
//           </label>
//         ))}
//       </div>

//       {/* Table */}
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             {isVisible.name && <th>Name</th>}
//             {isVisible.description && <th>Description</th>}
//             {isVisible.manufacturer && <th>Manufacturer</th>}
//             {isVisible.manufacturingDate && <th>Manufacturing Date</th>}
//             {isVisible.price && <th>Price</th>}
//             {isVisible.quantity && <th>Quantity</th>}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((p) => (
//             <tr key={p._id}>
//               {isVisible.name && <td>{p.name}</td>}
//               {isVisible.description && <td>{p.description}</td>}
//               {isVisible.manufacturer && <td>{p.manufacturer}</td>}
//               {isVisible.manufacturingDate && (
//                 <td>{new Date(p.manufacturingDate).toLocaleDateString()}</td>
//               )}
//               {isVisible.price && <td>{p.price}</td>}
//               {isVisible.quantity && <td>{p.quantity}</td>}
//               <td>
//                 <Link to={`/products/edit/${p._id}`}>Edit</Link>{" "}
//                 <Link to={`/products/delete/${p._id}`}>Delete</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductList;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getProducts } from "../api";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // 🔧 Visibility state
//   const [isVisible, setIsVisible] = useState({
//     name: true,
//     description: true,
//     manufacturer: true,
//     manufacturingDate: true,
//     price: true,
//     quantity: true,
//   });

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getProducts();
//       setProducts(data.data);
//       setFilteredProducts(data.data);
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const lowerSearch = searchTerm.toLowerCase();
//     const results = products.filter(
//       (p) =>
//         p.name.toLowerCase().includes(lowerSearch) ||
//         (p.category && p.category.toLowerCase().includes(lowerSearch))
//     );
//     setFilteredProducts(results);
//   }, [searchTerm, products]);

//   // 🔧 Toggle column visibility
//   const toggleField = (field) => {
//     setIsVisible((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   return (
//     <div>
//       <h1>Product List</h1>

//       {/* Search + Add Button */}
//       <div style={{ marginBottom: "1rem" }}>
//         <input
//           type="text"
//           placeholder="Search by name or category"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Link to="/products/add" style={{ marginLeft: "1rem" }}>
//           Add New Product
//         </Link>
//       </div>

//       {/* Checkbox Controls */}
//       <div style={{ marginBottom: "1rem" }}>
//         <strong>Show Fields:</strong>
//         {Object.keys(isVisible).map((key) => (
//           <label key={key} style={{ marginLeft: "10px" }}>
//             <input
//               type="checkbox"
//               checked={isVisible[key]}
//               onChange={() => toggleField(key)}
//             />
//             {key.charAt(0).toUpperCase() + key.slice(1)}
//           </label>
//         ))}
//       </div>

//       {/* Product Table */}
//       <table>
//         <thead>
//           <tr>
//             {isVisible.name && <th>Name</th>}
//             {isVisible.category && <th>Category</th>}
//             {isVisible.price && <th>Price</th>}
//             {isVisible.quantity && <th>Quantity</th>}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((p) => (
//             <tr key={p._id}>
//               {isVisible.name && <td>{p.name}</td>}
//               {isVisible.category && <td>{p.category}</td>}
//               {isVisible.price && <td>{p.price}</td>}
//               {isVisible.quantity && <td>{p.quantity}</td>}
//               <td>
//                 <Link to={`/products/edit/${p.productId}`}>Edit</Link>{" "}
//                 <Link to={`/products/delete/${p.productId}`}>Delete</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isVisible, setIsVisible] = useState({
    name: true,
    description: true,
    manufacturer: true,
    manufacturingDate: true,
    price: true,
    quantity: true,
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data.data);
      setFilteredProducts(data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerSearch) ||
        (p.description && p.description.toLowerCase().includes(lowerSearch)) ||
        (p.manufacturer && p.manufacturer.toLowerCase().includes(lowerSearch))
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const toggleField = (field) => {
    setIsVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Inventory</h1>

      {/* Search and Add */}
      <div style={styles.actions}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <Link to="/products/add" style={styles.addButton}>
          + Add New Product
        </Link>
      </div>

      {/* Field Visibility Checkboxes */}
      <div style={styles.checkboxes}>
        <strong>Show Fields:</strong>
        {Object.keys(isVisible).map((key) => (
          <label key={key} style={styles.checkbox}>
            <input
              type="checkbox"
              checked={isVisible[key]}
              onChange={() => toggleField(key)}
            />
            {key}
          </label>
        ))}
      </div>

      {/* Product Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            {isVisible.name && <th>Name</th>}
            {isVisible.description && <th>Description</th>}
            {isVisible.manufacturer && <th>Manufacturer</th>}
            {isVisible.manufacturingDate && <th>Manufacturing Date</th>}
            {isVisible.price && <th>Price</th>}
            {isVisible.quantity && <th>Quantity</th>}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p._id}>
              {isVisible.name && <td>{p.name}</td>}
              {isVisible.description && <td>{p.description}</td>}
              {isVisible.manufacturer && <td>{p.manufacturer}</td>}
              {isVisible.manufacturingDate && (
                <td>{new Date(p.manufacturingDate).toLocaleDateString()}</td>
              )}
              {isVisible.price && <td>₹ {p.price}</td>}
              {isVisible.quantity && <td>{p.quantity}</td>}
              <td>
                <Link to={`/products/edit/${p.productId}`} style={styles.link}>
                  Edit
                </Link>{" "}
                |{" "}
                <Link
                  to={`/products/delete/${p.productId}`}
                  style={styles.linkRed}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fefefe",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  input: {
    width: "60%",
    padding: "8px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 16px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  checkboxes: {
    marginBottom: "10px",
  },
  checkbox: {
    marginLeft: "15px",
    fontSize: "14px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  linkRed: {
    color: "#dc3545",
    textDecoration: "none",
  },
};

export default ProductList;
