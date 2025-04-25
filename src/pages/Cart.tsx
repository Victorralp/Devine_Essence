import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import '../styles/Cart.css';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.07;
  const total = subtotal + shippingCost + tax;
  
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-hero">
          <div className="cart-hero-content">
            <h1 className="hero-title">Your Shopping Cart</h1>
            <p className="hero-subtitle">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
        
        <div className="container py-5">
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FaShoppingCart size={60} />
            </div>
            <div className="empty-cart-message">
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any products to your cart yet.</p>
              <Link to="/shop" className="btn btn-primary mt-3">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <div className="cart-hero">
        <div className="cart-hero-content">
          <h1 className="hero-title">Your Shopping Cart</h1>
          <p className="hero-subtitle">
            Review your items and proceed to checkout
          </p>
        </div>
      </div>
      
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-headers">
              <span className="header-product">Product</span>
              <span className="header-price">Price</span>
              <span className="header-quantity">Quantity</span>
              <span className="header-total">Total</span>
              <span className="header-actions"></span>
            </div>
            
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h3 className="item-name">{item.name}</h3>
                </div>
                <div className="item-price">
                  ${item.price.toFixed(2)}
                </div>
                <div className="item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="quantity-btn"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                    aria-label="Increase quantity"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="remove-btn"
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button className="btn-checkout">Proceed to Checkout</button>
            <button onClick={clearCart} className="btn-clear">Clear Cart</button>
            <Link to="/shop" className="btn-continue">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 