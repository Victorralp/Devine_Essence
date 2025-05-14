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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    
    // Show visual feedback
    const button = e.currentTarget as HTMLButtonElement;
    button.classList.add('added');
    setTimeout(() => {
      button.classList.remove('added');
    }, 1500);
  };

  const getBadgeClass = () => {
    if (product.category === 'Limited') return 'limited-badge';
    if (product.isNew) return 'new-badge';
    return 'bestseller-badge';
  };

  return (
    <>
      <div 
        className="product-card hover-scale hover-glow" 
        {...props}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${product.name}`}
      >
        {(product.isNew || product.category === 'Limited') && (
          <span className={`product-badge ${getBadgeClass()}`}>
            {product.category === 'Limited' ? 'Limited Edition' : 'New'}
          </span>
        )}
        
        <div className="card-image-container hover-zoom">
          {!isImageLoaded && <div className="lazy-placeholder" aria-hidden="true"></div>}
          <img
            src={product.image}
            alt={product.name}
            className="card-image"
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
            style={{ opacity: isImageLoaded ? 1 : 0 }}
          />
          <div className="card-overlay"></div>
          <div className="card-quick-view">Quick View</div>
        </div>
        
        <div className="card-content">
          <span className="card-category">{product.category}</span>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-description">{product.description}</p>
          
          <div className="product-benefits">
            <div className="product-benefit">Ethically sourced</div>
            <div className="product-benefit">Handcrafted with care</div>
          </div>
          
          <div className="card-footer">
            <div className="card-price">₦{product.price.toFixed(2)}</div>
            <div className="card-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="action-button view-details-btn"
                aria-label={`Quick view of ${product.name}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
              <button
                onClick={handleAddToCart}
                className="action-button add-to-cart-btn"
                aria-label={`Add ${product.name} to cart`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={() => addToCart(product)}
      />
    </>
  );
} 