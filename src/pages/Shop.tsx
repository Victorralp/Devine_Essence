import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Shop.css';

export function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();
  
  // Get unique categories from products
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

  // Filter products based on search term and selected category
  useEffect(() => {
    let result = products;
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="shop-page">
      {/* Hero Section with Parallax Effect */}
      <div className="shop-hero">
        <div className="shop-hero-content">
          <h1 className="hero-title">Divine Collection</h1>
          <p className="hero-subtitle">
            Discover our curated selection of spiritual tools designed to elevate your practice 
            and transform your sacred space.
          </p>
          
          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map(category => (
              <button 
                key={category}
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="container-custom">
        <div className="search-filter-container">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="search-input-container w-full md:w-auto flex-grow">
              <MagnifyingGlassIcon className="search-icon h-4 w-4" />
              <input
                type="text"
                className="search-input"
                placeholder="Search spiritual products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button className="filter-button">
                <FunnelIcon className="h-5 w-5" />
                <span>Filter</span>
              </button>
              <select 
                className="filter-dropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Display */}
      <div className="products-container">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  data-product-id={product.id} 
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <h3>No Products Found</h3>
              <p>We couldn't find any products matching your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="clear-search-btn"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 