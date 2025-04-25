import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="container text-center py-5">
        <h2 className="section-title">Product Not Found</h2>
        <p>Sorry, the product you're looking for does not exist.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-detail-page">
      <div className="container py-5">
        <div className="grid grid-2-product">
          {/* Product Image */}
          <div className="product-images">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-main-image"
            />
          </div>
          
          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-meta">
              <div className="ratings">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < product.rating ? "star filled" : "star"} 
                  />
                ))}
                <span className="rating-count">({product.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="product-price">${product.price.toFixed(2)}</div>
            
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            
            {/* Benefits */}
            <div className="product-benefits">
              <h3>Benefits</h3>
              <ul className="benefits-list">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <span className="benefit-bullet">•</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Add to Cart Section */}
            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                  className="qty-input"
                />
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
              
              <button 
                className="btn btn-primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
            
            {/* Additional Info */}
            <div className="additional-info">
              <div className="info-item">
                <span className="info-label">Origin:</span> {product.origin}
              </div>
              <div className="info-item">
                <span className="info-label">Material:</span> {product.material}
              </div>
              <div className="info-item">
                <span className="info-label">Dimensions:</span> {product.dimensions}
              </div>
            </div>
          </div>
        </div>
        
        {/* Usage Instructions */}
        <section className="usage-section">
          <h2 className="section-title">How to Use</h2>
          <div className="card p-4">
            <p>{product.usage}</p>
          </div>
        </section>
      </div>
    </div>
  );
} 