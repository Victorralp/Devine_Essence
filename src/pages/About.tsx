import React from 'react';
import { FaLeaf, FaHeart, FaGem } from 'react-icons/fa';
import '../styles/About.css';

export const About = () => {
  return (
    <div>
      <div className="about-hero">
        <h1 className="page-title">Our Journey</h1>
        <p className="lead-text">
          Discover the story behind Divine Essence and our mission to bring spiritual wellness
          products that nurture the body, mind, and soul.
        </p>
      </div>

      <section className="bg-white py-5">
        <div className="container">
          <div className="grid-2">
            <div className="fadeIn">
              <h2 className="section-title">Our Story</h2>
              <p>
                Divine Essence was born out of a deep personal journey toward spiritual
                awakening and holistic wellness. Our founder, after experiencing the
                transformative power of natural remedies and spiritual practices, committed
                to creating a sanctuary where others could discover tools for their own
                spiritual journeys.
              </p>
              <p>
                What began as a small collection of handcrafted items has grown into a
                thoughtfully curated selection of products sourced from artisans who share
                our commitment to quality, sustainability, and spiritual integrity.
              </p>
            </div>
            <div className="img-container fadeIn">
              <img
                src="/images/our-story.jpg"
                alt="Divine Essence founder working with herbs"
                className="rounded-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="grid-2-reverse">
            <div className="fadeIn">
              <h2 className="section-title">Our Values</h2>
              <p>
                At Divine Essence, we believe that spiritual tools should be created with
                intention, respect for nature, and a deep understanding of ancient wisdom.
                Each product in our collection is chosen or crafted with these principles
                in mind.
              </p>
              <p>
                We honor traditions from around the world while embracing modern
                knowledge, creating a unique approach to spiritual products that bridges
                time-honored practices with contemporary needs.
              </p>
            </div>
            <div className="img-container fadeIn">
              <img
                src="/images/our-values.jpg"
                alt="Sacred objects arranged on natural materials"
                className="rounded-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5 text-center">
        <div className="container">
          <h2 className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Our Core Principles</h2>
          <div className="grid-3">
            <div className="card p-4 fadeIn">
              <div className="icon-container">
                <FaLeaf size={40} />
              </div>
              <h3>Sustainability</h3>
              <p>
                We are committed to sustainable practices, from ethically sourced
                materials to eco-friendly packaging, honoring our responsibility to the
                Earth.
              </p>
            </div>
            <div className="card p-4 fadeIn">
              <div className="icon-container">
                <FaHeart size={40} />
              </div>
              <h3>Authenticity</h3>
              <p>
                Every product reflects authentic spiritual traditions and genuine
                craftsmanship, ensuring tools that truly support your practice.
              </p>
            </div>
            <div className="card p-4 fadeIn">
              <div className="icon-container">
                <FaGem size={40} />
              </div>
              <h3>Quality</h3>
              <p>
                We select only the finest materials and work with skilled artisans who
                share our passion for excellence and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="grid-2">
            <div className="img-container fadeIn">
              <img
                src="/images/our-vision.jpg"
                alt="Serene meditation space with Divine Essence products"
                className="rounded-img"
              />
            </div>
            <div className="fadeIn">
              <h2 className="section-title">Our Vision</h2>
              <p>
                We envision a world where spiritual practice is accessible to all, where
                ancient wisdom is preserved and honored, and where the tools for
                transformation are crafted with integrity and reverence.
              </p>
              <p>
                Divine Essence strives to be more than a store—we aim to be a trusted
                companion on your spiritual journey, offering guidance, quality products,
                and a community where seekers can find inspiration and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 