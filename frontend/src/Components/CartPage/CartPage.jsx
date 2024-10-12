import React, { useMemo } from 'react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';
import './cartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItem, clearCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      updateCartItem(productId, quantity);
    }
  };

 
  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, { product, quantity }) => {
      return total + product.discountedPrice * quantity;
    }, 0);
  }, [cartItems]);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      Swal.fire('Oops!', 'Your cart is empty.', 'warning');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: `Your total amount is ₹${totalAmount.toFixed(2)}. Do you want to place the order?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, place order',
      cancelButtonText: 'No, keep shopping',
    }).then((result) => {
      if (result.isConfirmed) {
      
        Swal.fire('Order Placed!', 'Your order has been placed successfully.', 'success');

        
        clearCart();
      }
    });
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map(({ product, quantity }) => (
            <div key={product._id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{product.name}</h3>
                <p className="cart-item-price">Price: ₹{product.discountedPrice}</p>
                <div className="cart-item-controls">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(product._id, Number(e.target.value))}
                    className="quantity-input"
                    min="1"
                  />
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Estimate Total Section */}
          <div className="cart-total">
            <h3>Estimate Total:</h3>
            <p className="total-amount">₹{totalAmount.toFixed(2)}</p>
          </div>
          {/* Place Order Button */}
          <div className="place-order-container">
            <button className="place-order-button" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
