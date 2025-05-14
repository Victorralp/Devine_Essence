import React, { useState, useEffect, useRef } from 'react';
import { FaLeaf, FaHeart, FaGem, FaGlobeAmericas, FaUsers, FaStar, FaQuoteLeft, FaPlay } from 'react-icons/fa';
import '../styles/About.css';

export const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const journeyRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isJourneyVisible, setIsJourneyVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const journeyStages = [
    {
      id: 1,
      title: "Awakening",
      description: "The first stage of any spiritual journey begins with awakening to something beyond the material world—a calling that stirs the soul and invites deeper exploration.",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "#7953d2",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-meditating-in-a-lotus-position-1452-large.mp4",
      products: ["Intention Journals", "Beginner's Meditation Kit", "Awakening Essential Oil Blend"]
    },
    {
      id: 2,
      title: "Healing",
      description: "Healing involves addressing past wounds and imbalances, allowing energy to flow freely and restore harmony to body, mind, and spirit.",
      image: "https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "#43a047",
      video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-healing-crystal-1420-large.mp4",
      products: ["Healing Crystal Sets", "Chakra Balancing Oils", "Energy Clearing Kits"]
    },
    {
      id: 3,
      title: "Transformation",
      description: "In transformation, we shed old patterns and beliefs, embodying new ways of being that align with our highest purpose and deepest truths.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "#ff9800",
      video: "https://assets.mixkit.co/videos/preview/mixkit-cosmos-from-outer-space-view-1610-large.mp4",
      products: ["Transformational Retreat Essentials", "Full Moon Release Ritual Kit", "Phoenix Rising Incense"]
    },
    {
      id: 4,
      title: "Integration",
      description: "Integration weaves spiritual insights into daily life, creating practices and rituals that sustain connection while living in the modern world.",
      image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "#1e88e5",
      video: "https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-plant-wet-18310-large.mp4",
      products: ["Daily Ritual Sets", "Sacred Space Home Collection", "Mindful Living Journal"]
    },
    {
      id: 5,
      title: "Transcendence",
      description: "The journey continues beyond individual growth toward universal connection, service to others, and recognition of our shared consciousness.",
      image: "https://images.unsplash.com/photo-1543083115-638c4e4d6b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "#6a1b9a",
      video: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4",
      products: ["Community Ceremony Kits", "Teaching & Sharing Tools", "Universal Connection Essentials"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if journey section is in view for animation
      if (journeyRef.current) {
        const rect = journeyRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setIsJourneyVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video handling
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleCardMouseEnter = (index: number) => {
    setActiveCard(index);
  };

  const handleCardMouseLeave = () => {
    setActiveCard(null);
  };

  const handleVideoOpen = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleVideoClose = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="about-page">
      {/* Parallax Video Hero */}
      <div className="video-hero-container">
        <video 
          ref={videoRef}
          className="hero-video" 
          loop 
          muted 
          onClick={toggleVideo}
          poster="/images/about-hero.jpg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-tent-in-the-snow-4330-large.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <h1 className="page-title reveal-text">Our Sacred Journey</h1>
          <div className="divider"></div>
          <p className="lead-text reveal-text-delay">
            Discover the story behind Divine Essence and our mission to bring spiritual wellness
            products that nurture the body, mind, and soul.
          </p>
          <button onClick={toggleVideo} className="video-btn">
            {isVideoPlaying ? 'Pause Background' : 'Play Background'}
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-arrows">
              ↓<span>↓</span>↓
            </span>
          </div>
        </div>
      </div>

      {/* Mission Statement with Parallax */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <section className="mission-section" style={{ 
          paddingBottom: "0", 
          marginBottom: "0", 
          background: "linear-gradient(-45deg, #4a2da6, #5a3dbc, #7b62d3, #6a1b9a)",
          backgroundSize: "400% 400%",
          animation: "missionBgPulse 15s ease infinite",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <div className="parallax-bg" style={{ backgroundPositionY: `${-scrollY * 0.15}px`, opacity: 0.1 }}></div>
          
          {/* Decorative stars */}
          <div style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            fontSize: "4rem",
            color: "rgba(255,255,255,0.3)"
          }}>✧</div>
          <div style={{
            position: "absolute",
            top: "15%",
            right: "15%",
            fontSize: "3rem",
            color: "rgba(255,255,255,0.2)"
          }}>✧</div>
          <div style={{
            position: "absolute",
            bottom: "20%",
            left: "20%",
            fontSize: "3.5rem",
            color: "rgba(255,255,255,0.25)"
          }}>✧</div>
          <div style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            fontSize: "4.5rem",
            color: "rgba(255,255,255,0.15)"
          }}>✧</div>
          
          <div style={{ maxWidth: "100%", width: "100%", padding: 0 }}>
            <div style={{ maxWidth: "100%", width: "100%" }}>
              <div style={{
                transform: "scale(1.0)",
                backgroundColor: "white",
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5)",
                width: "90%",
                maxWidth: "1200px",
                padding: "6rem 3rem 4rem",
                overflow: "visible",
                opacity: 1,
                borderRadius: "15px",
                margin: "0 auto",
                borderTop: "12px solid #5a3dbc",
                borderBottom: "2px solid rgba(90, 61, 188, 0.3)",
                position: "relative",
                zIndex: 10
              }}>
                <div style={{
                  position: "absolute",
                  top: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#5a3dbc",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
                  zIndex: 15
                }}>
                  <FaQuoteLeft style={{ fontSize: "3rem" }} />
                </div>
                <div style={{
                  margin: 0,
                  padding: 0,
                  visibility: "visible",
                  opacity: 1,
                  color: "#222",
                  width: "100%",
                  display: "block"
                }}>
                  <p style={{ 
                    fontSize: "2.2rem", 
                    color: "#222",
                    lineHeight: "1.4",
                    margin: "0",
                    padding: "0 1rem",
                    visibility: "visible",
                    opacity: 1,
                    display: "block",
                    width: "100%",
                    fontWeight: "600",
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    textAlign: "center",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"
                  }}>
                    "To honor ancient wisdom while creating modern tools for spiritual growth, 
                    empowering individuals to cultivate sacred connections with themselves, 
                    others, and the natural world."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Spiritual Journey Section */}
      <section className="journey-section" ref={journeyRef} style={{ marginTop: "0" }}>
        <div className="journey-background"></div>
        <div className="journey-stars"></div>
        <div className="container">
          <h2 className="section-title-light">The Spiritual Journey</h2>
          <p className="journey-intro">
            Every spiritual seeker walks a unique path, yet certain universal stages mark the evolution 
            of consciousness. Explore the stages that inspire our product collections and may reflect 
            your own sacred journey.
          </p>

          <div className={`journey-path ${isJourneyVisible ? 'animated' : ''}`}>
            <div className="journey-path-line"></div>
            
            {journeyStages.map((stage, index) => (
              <div 
                key={stage.id}
                className={`journey-stage ${activeCard === index ? 'active' : ''} ${isJourneyVisible ? 'visible' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  '--stage-color': stage.color
                } as React.CSSProperties}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="journey-stage-content">
                  <div className="stage-number">{stage.id}</div>
                  <div className="stage-image-container">
                    <img src={stage.image} alt={stage.title} className="stage-image" />
                    <button 
                      className="stage-video-button"
                      onClick={() => handleVideoOpen(stage.video)}
                      aria-label={`Watch ${stage.title} video`}
                    >
                      <FaPlay />
                    </button>
                  </div>
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-description">{stage.description}</p>
                  <div className="stage-products">
                    <h4>Featured Products:</h4>
                    <ul>
                      {stage.products.map((product, idx) => (
                        <li key={idx}>{product}</li>
                      ))}
                    </ul>
                    <a href="/shop" className="stage-shop-link">Explore Products</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="video-modal" onClick={handleVideoClose}>
            <div className="video-modal-content" onClick={e => e.stopPropagation()}>
              <button className="video-close-btn" onClick={handleVideoClose}>×</button>
              <video controls autoPlay className="modal-video">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>

      {/* Values with Interactive Tabs */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="section-title-center">Our Core Values</h2>
          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} 
                onClick={() => setActiveTab(0)}
              >
                <FaLeaf /> Sustainability
              </button>
              <button 
                className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} 
                onClick={() => setActiveTab(1)}
              >
                <FaHeart /> Authenticity
              </button>
              <button 
                className={`tab-btn ${activeTab === 2 ? 'active' : ''}`} 
                onClick={() => setActiveTab(2)}
              >
                <FaGem /> Quality
              </button>
            </div>
            <div className="tabs-content">
              <div className={`tab-panel ${activeTab === 0 ? 'active' : ''}`}>
                <div className="tab-content-inner">
                  <h3>Sustainability</h3>
                  <p>We are committed to sustainable practices in every aspect of our business. This means:</p>
                  <ul className="value-list">
                    <li>Sourcing all materials ethically and responsibly</li>
                    <li>Using plastic-free, biodegradable packaging</li>
                    <li>Supporting reforestation projects for every order placed</li>
                    <li>Working with artisans who practice sustainable harvesting</li>
                  </ul>
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Sustainable practices" 
                    className="tab-image" 
                  />
                </div>
              </div>
              <div className={`tab-panel ${activeTab === 1 ? 'active' : ''}`}>
                <div className="tab-content-inner">
                  <h3>Authenticity</h3>
                  <p>Every product we offer is created with respect for ancient traditions and authentic practices:</p>
                  <ul className="value-list">
                    <li>Working directly with traditional artisans from around the world</li>
                    <li>Researching historical uses and cultural contexts</li>
                    <li>Honoring the spiritual significance of each item we sell</li>
                    <li>Sharing the stories and teachings behind our products</li>
                  </ul>
                  <img 
                    src="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Authentic practices" 
                    className="tab-image" 
                  />
                </div>
              </div>
              <div className={`tab-panel ${activeTab === 2 ? 'active' : ''}`}>
                <div className="tab-content-inner">
                  <h3>Quality</h3>
                  <p>We never compromise on the quality of our products, which means:</p>
                  <ul className="value-list">
                    <li>Selecting only the finest natural materials</li>
                    <li>Rigorous testing for purity and effectiveness</li>
                    <li>Working with master craftspeople who excel in their art</li>
                    <li>Creating products that stand the test of time</li>
                  </ul>
                  <img 
                    src="https://images.unsplash.com/photo-1469037784699-75dcf276d546?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Quality craftsmanship" 
                    className="tab-image" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA with Parallax */}
      <section className="join-section">
        <div className="join-parallax" style={{ backgroundPositionY: `${-scrollY * 0.1}px` }}></div>
        <div className="container">
          <div className="join-content">
            <h2 className="join-title">Join Our Spiritual Community</h2>
            <p className="join-text">
              Become part of our growing family of spiritual seekers and receive exclusive 
              insights, early access to new products, and invitations to sacred ceremonies.
            </p>
            <form className="join-form">
              <input type="email" placeholder="Your email address" className="join-input" />
              <button type="submit" className="join-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}; 