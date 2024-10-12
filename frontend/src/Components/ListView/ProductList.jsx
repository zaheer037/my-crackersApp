import React, { useState } from 'react';
import './productList.css'; 
const ProductList = ({ products }) => {
  
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product._id] = 1; 
      return acc;
    }, {})
  );

 
  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity > 0 ? newQuantity : 1,
    }));
  };

  const calculateTotalPrice = (productId, discountedPrice) => {
    return (quantities[productId] * discountedPrice).toFixed(2); 
  };

  return (
    <div className="list-view-container">
      <table className="product-list-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td><img src={product.image} alt={product.name} width="50px" /></td>
              <td>{product.name}</td>
              <td>{product.available}</td>
              <td>₹{product.originalPrice}</td>
              <td>₹{product.discountedPrice}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={quantities[product._id]}  // Display the current quantity
                  onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))} // Update quantity
                />
              </td>
              <td>₹{calculateTotalPrice(product._id, product.discountedPrice)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
