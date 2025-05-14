import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  // Get the first 3 products for featured section
  const featuredProducts = products.slice(0, 3);
  
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Scroll animation observer
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => observer.observe(el));
    
    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  // Slider data
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507164941316-6a95aecb5800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Elevate Your Spiritual Journey',
      subtitle: 'Discover our collection of mindfully crafted products designed to enhance your connection to self and universe',
      cta: { text: 'Explore Products', link: '/shop' },
      secondaryCta: { text: 'Our Story', link: '/about' }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Transform Your Space',
      subtitle: 'Create sacred environments with our spiritually charged products that bring harmony and balance',
      cta: { text: 'Shop Collections', link: '/shop' },
      secondaryCta: { text: 'View Gallery', link: '/gallery' }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531257240678-d5b1922e672d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'New Arrivals',
      subtitle: 'Discover our latest additions that will enhance your meditation practice and spiritual growth',
      cta: { text: 'Shop New', link: '/shop' },
      secondaryCta: { text: 'Learn More', link: '/about' }
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 6000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, isAnimating]);

  const goToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    // Reset animating flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    // Reset animating flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Reset animating flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <main className="homepage">
      {/* Hero Slider */}
      <div className="slider-container">
        <div 
          className="slider" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden={currentSlide !== index}
            >
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <div className="slide-buttons">
                  <Link to={slide.cta.link} className="btn btn-primary">
                    {slide.cta.text}
                  </Link>
                  <Link to={slide.secondaryCta.link} className="btn btn-outline">
                    {slide.secondaryCta.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="slider-nav prev" 
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="slider-nav next" 
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index}
            />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-5 bg-white">
        <div className="container section-container">
          <div className="section-title-container">
            <h2 className="section-title animate-on-scroll">Our Commitment</h2>
            <p className="section-subtitle animate-on-scroll animate-delay-100">Every product is created with intention and positive energy</p>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-item animate-on-scroll animate-delay-200">
              <div className="benefit-icon icon-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="benefit-title">Energetically Charged</h3>
              <p className="benefit-text">All our products are cleansed and charged under the full moon, infusing them with powerful energy.</p>
            </div>
            
            <div className="benefit-item animate-on-scroll animate-delay-300">
              <div className="benefit-icon icon-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Crafted with Love</h3>
              <p className="benefit-text">Each item is handcrafted with intention, love, and respect for ancient spiritual traditions.</p>
            </div>
            
            <div className="benefit-item animate-on-scroll animate-delay-400">
              <div className="benefit-icon icon-rotate">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Ethically Sourced</h3>
              <p className="benefit-text">We ensure all materials are ethically sourced and environmentally friendly for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container section-container">
          <div className="section-title-container">
            <h2 className="section-title animate-on-scroll">Our Sacred Mission</h2>
          </div>
          
          <div className="mission-card animate-on-scroll animate-delay-100">
            <p className="mb-3">
              At Divine Essence, we believe that spiritual growth is a personal journey that can be 
              enhanced with the right tools and intentions. Our carefully curated collection of spiritual 
              products is designed to help you connect with your higher self and the energies around you.
            </p>
            <p className="mb-3">
              Each item in our shop is selected with intention and purpose, crafted by artisans who 
              understand the power of energy and spirituality. Whether you're beginning your spiritual 
              journey or looking to deepen your practice, our products will serve as faithful companions.
            </p>
            <div className="text-center mt-4">
              <Link to="/about" className="learn-more-link hover-scale">
                Learn more about our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured py-5 bg-white">
        <div className="container section-container">
          <div className="section-title-container">
            <h2 className="section-title animate-on-scroll">Featured Products</h2>
            <p className="section-subtitle animate-on-scroll animate-delay-100">Discover our most beloved spiritual tools</p>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <div 
                className={`card hover-scale hover-glow animate-on-scroll animate-delay-${(index + 2) * 100}`} 
                key={product.id}
              >
                <div className="card-img-container hover-zoom">
                  <img src={product.image} alt={product.name} className="card-img" loading="lazy" />
                  {product.isNew && <span className="card-badge">New</span>}
                  <div className="card-quick-view">Quick View</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  
                  <div className="product-benefits">
                    <div className="product-benefit">Ethically sourced materials</div>
                    <div className="product-benefit">Charged under the full moon</div>
                    <div className="product-benefit">Handcrafted with intention</div>
                  </div>
                  
                  <div className="card-price">₦{product.price.toFixed(2)}</div>
                  <div className="card-actions">
                    <Link to={`/product/${product.id}`} className="btn view-details-btn">
                      View Details
                    </Link>
                    <button className="btn add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4 animate-on-scroll">
            <Link to="/shop" className="btn btn-primary pulse-animation">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 