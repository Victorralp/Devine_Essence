import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { cartCount } = useCart();
  const [isTransparent, setIsTransparent] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check - only make transparent on home page
    setIsTransparent(window.scrollY <= 50 && location.pathname === '/');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      
      <nav className={`navbar ${isTransparent ? 'transparent' : ''} ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand" aria-label="Divine Essence - Home">
            <span aria-hidden="true">✧</span> Divine Essence
          </Link>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <ul className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/shop" 
                className={`navbar-link ${location.pathname === '/shop' ? 'active' : ''}`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/cart" 
                className="cart-icon" 
                aria-label={`View cart${cartCount > 0 ? ` with ${cartCount} items` : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="cart-badge" aria-hidden="true">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
} 