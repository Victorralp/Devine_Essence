import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  const faqs = [
    {
      question: "What kind of spiritual products do you offer?",
      answer: "We offer a wide range of spiritual products including meditation tools, crystals, ceremonial items, essential oils, incense, and more. All our products are ethically sourced and created with intention."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping times and costs vary depending on your location. You can see exact shipping costs at checkout."
    },
    {
      question: "Are your products ethically sourced?",
      answer: "Absolutely. We prioritize ethical sourcing practices and work with suppliers who share our values of sustainability, fair trade, and respect for cultural traditions."
    },
    {
      question: "Do you offer guidance on how to use your products?",
      answer: "Yes, we provide detailed instructions with each product. Additionally, our blog features articles about spiritual practices and our newsletter shares tips and rituals."
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We're here to assist you on your spiritual journey. Whether you have questions about our products or need guidance, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-card-container">
            {/* Contact Info Card */}
            <div className="contact-info-card">
              <div className="info-card-pattern"></div>
              <h2 className="info-card-title">Contact Information</h2>
              <p>Have questions? Reach out to us through any of these channels:</p>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon-container">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <div className="info-text">
                    <p className="info-label">Email</p>
                    <p className="info-detail">contact@divineessence.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="info-icon-container">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div className="info-text">
                    <p className="info-label">Phone</p>
                    <p className="info-detail">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="info-icon-container">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div className="info-text">
                    <p className="info-label">Location</p>
                    <p className="info-detail">123 Spiritual Path, Serenity Valley, SC 98765</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3 className="social-title">Connect With Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form Card */}
            <div className="contact-form-card">
              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircleIcon className="success-icon" />
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-text">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <h2 className="form-title">Send Us a Message</h2>
                    <p className="form-subtitle">
                      Fill out the form below and we'll respond to your inquiry as soon as possible.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="form-control"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="form-control"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number (optional)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="order">Order Status</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="form-button">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Find answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 