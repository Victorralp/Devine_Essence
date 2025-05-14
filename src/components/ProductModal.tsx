import { useEffect, useState, useRef } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: () => void;
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElement = useRef<HTMLButtonElement>(null);

  // Handle keyboard navigation within the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      
      // Trap focus inside the modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      
      // Focus first element when modal opens
      setTimeout(() => {
        if (firstFocusableElement.current) {
          firstFocusableElement.current.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
    onClose();
    if (onAddToCart) onAddToCart();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue > 0) {
      setQuantity(newValue);
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${product.id}`}
    >
      <div 
        className="modal-container" 
        onClick={e => e.stopPropagation()}
        ref={modalRef}
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close product details"
          ref={firstFocusableElement}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-content">
          <div className="modal-image-container">
            {!isImageLoaded && <div className="lazy-placeholder" aria-hidden="true"></div>}
            <img 
              src={product.image} 
              alt={product.name} 
              className="modal-img"
              onLoad={() => setIsImageLoaded(true)}
              style={{ opacity: isImageLoaded ? 1 : 0 }}
            />
            {product.isNew && <span className="product-badge new-badge">New</span>}
          </div>
          
          <div className="modal-info">
            <span className="modal-category">{product.category}</span>
            <h3 className="modal-title" id={`modal-title-${product.id}`}>{product.name}</h3>
            <p className="modal-price">₦{product.price.toFixed(2)}</p>
            <p className="modal-description">{product.details}</p>
            
            <div className="product-benefits">
              <h4 className="benefits-title">Key Benefits:</h4>
              <ul className="benefits-list">
                <li className="product-benefit">Ethically sourced materials</li>
                <li className="product-benefit">Charged under the full moon</li>
                <li className="product-benefit">Handcrafted with intention</li>
                <li className="product-benefit">Promotes spiritual growth</li>
              </ul>
            </div>
            
            <div className="quantity-control">
              <label htmlFor="quantity" className="quantity-label">Quantity</label>
              <div className="quantity-input-group">
                <button 
                  className="quantity-btn" 
                  onClick={decrementQuantity}
                  aria-label="Decrease quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <input 
                  type="number" 
                  id="quantity" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                  min="1" 
                  max="99"
                  className="quantity-input"
                  aria-label="Product quantity"
                />
                <button 
                  className="quantity-btn"
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="modal-actions">
              <button
                className="btn btn-primary add-to-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-outline"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 