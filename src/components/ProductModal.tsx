import { useEffect } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="modal-img"
        />
        
        <h3 className="modal-title">{product.name}</h3>
        <p className="modal-price">${product.price}</p>
        <p className="modal-description">{product.details}</p>
        
        <button
          className="btn btn-primary w-full"
          onClick={() => {
            addToCart(product);
            onClose();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
} 