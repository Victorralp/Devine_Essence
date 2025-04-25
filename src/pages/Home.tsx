import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  // Get the first 3 products for featured section
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to Divine Essence</h1>
          <p className="hero-subtitle">Discover spiritual tools to elevate your consciousness and transform your journey</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">
              Explore Our Products
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Our Commitment</h2>
            <p className="section-subtitle">Every product is created with intention and positive energy</p>
          </div>
          
          <div className="grid grid-3">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="benefit-title">Energetically Charged</h3>
              <p className="benefit-text">All our products are cleansed and charged under the full moon, infusing them with powerful energy.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Crafted with Love</h3>
              <p className="benefit-text">Each item is handcrafted with intention, love, and respect for ancient spiritual traditions.</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
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
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Our Sacred Mission</h2>
          </div>
          
          <div className="mission-card">
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
              <Link to="/about" className="learn-more-link">
                Learn more about our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured py-5 bg-white">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Discover our most beloved spiritual tools</p>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <div className="card" key={product.id}>
                <div className="card-img-container">
                  <img src={product.image} alt={product.name} className="card-img" />
                  {product.new && <span className="card-badge">New</span>}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  <div className="card-price">{product.price.toFixed(2)}</div>
                  <div className="card-actions">
                    <Link to={`/product/${product.id}`} className="btn btn-outline">
                      View Details
                    </Link>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/shop" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section py-5">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              The Blessed Ring has completely transformed my meditation practice. I can feel the powerful energy it carries, 
              and it has become an essential part of my spiritual journey. Divine Essence truly creates magical products!
            </p>
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-author">Sarah J.</p>
            <p className="testimonial-title">Spiritual Practitioner</p>
          </div>
        </div>
      </section>
    </main>
  );
} 