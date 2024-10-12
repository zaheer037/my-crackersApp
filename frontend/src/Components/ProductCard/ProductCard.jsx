// src/Components/ProductCard.js
import React, { useState} from 'react';
import { useCart } from '../context/CartContext';
import './productCard.css'; // Ensure this contains the updated styles
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const calculateTotalPrice = () => {
    return quantity * product.discountedPrice;
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity); // Add product and quantity to the cart

      // SweetAlert2 alert to confirm addition to cart
      Swal.fire({
        title: 'Added to Cart!',
        text: 'Your product has been successfully added to the cart.',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Go to Cart',
        cancelButtonText: 'Continue Shopping',
        customClass: {
          popup: 'custom-swal-popup', // Add custom classes if needed
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/cart-items'); // Navigate to the cart page when confirmed
        }
      });
    } else {
      Swal.fire({
        title: 'Invalid Quantity',
        text: 'Please select a valid quantity before adding to the cart.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div>
      <div className="product-card">
        <div className="product-number">{product.available}</div>
        <img className="product-image" src={product.image} alt={product.name} />
        <div className="product-details">
          <h6>{product.name}</h6>
          <p className="original-price">₹{product.originalPrice} / {product.pieces}</p>
          <p className="discounted-price">₹{product.discountedPrice} / {product.pieces}</p>
        </div>
        <div className="quantity-section">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
            className="quantity-input"
          />
          <div className="total-price">₹{calculateTotalPrice()}</div>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <i className="fa fa-shopping-cart" aria-hidden="true" style={{ paddingLeft: '7px' }}></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
