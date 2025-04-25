import { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductModal } from './ProductModal';

interface ProductCardProps {
  product: Product;
  'data-product-id'?: string;
}

export function ProductCard({ product, ...props }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
      {/* This div is visually hidden on the shop page, but provides modal functionality */}
      <div 
        className="product-card" 
        {...props}
        onClick={() => setIsModalOpen(true)}
      >
        {product.isNew && <span className="card-badge">New</span>}
        <div className="card-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="card-image"
          />
          <div className="card-overlay"></div>
        </div>
        <div className="card-content">
          <span className="card-category">{product.category}</span>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-description">{product.description}</p>
          
          <div className="card-footer">
            <div className="card-price">${product.price}</div>
            <div className="card-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="action-button quick-view"
                aria-label="Quick view"
              >
                <i className="fa-solid fa-eye"></i>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="action-button add-to-cart"
                aria-label="Add to cart"
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 