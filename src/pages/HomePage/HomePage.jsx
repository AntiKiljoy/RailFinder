// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import headerImage from '../../images/20241215_120653.webp';
import hertiageRailwaysImage from '../../images/20230718_135453.webp';
import destinationsImage from '../../images/20241215_162627.webp';
import communityImage from '../../images/20240609_135459.webp';
import sustainabilityImage from '../../images/GRR.webp';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Heritage Railway Explorer</h1>
        <p>
          At Heritage Railway Explorer, we're passionate about promoting the joys and benefits of rail travel. Whether you're a seasoned rail enthusiast or a curious traveler, our platform is designed to help you discover and explore the rich history and scenic beauty of heritage railways across the UK and Europe. Rail travel is not just a means of getting from point A to point B; it's an experience that combines adventure, nostalgia, and sustainability.
        </p>
        <img src={headerImage} alt="Heritage Railway" className="header-image" />
      </header>

      <section className="intro-section">
        <p>
          Our mission is to make it easier for you to find and enjoy these unique journeys. By highlighting the charm and significance of heritage railways, we aim to connect you with destinations you might not otherwise have considered. Each railway offers a unique story, breathtaking landscapes, and an opportunity to step back in time and experience travel as it was in the golden age of railways.
        </p>
        <p>
          Rail travel is also an environmentally friendly choice. By choosing to travel by train, you're reducing your carbon footprint and supporting a more sustainable way of exploring the world. Heritage Railway Explorer provides you with the information and tools you need to make greener travel choices, helping you to contribute to a healthier planet.
        </p>
        <p>
          Whether you're planning a family trip, a romantic getaway, or simply an escape into nature, our app is your guide to unforgettable railway adventures. Discover hidden gems, connect with a community of fellow travelers, and track your journey's positive impact on the environment.
        </p>
      </section>

      <section className="highlights-section">
        <h2>Highlights</h2>
        <div className="highlight">
          <h3>Explore Heritage Railways</h3>
          <p>Find detailed information about various heritage railways, including history, schedules, and ticket prices.</p>
          <img src={hertiageRailwaysImage} alt="Explore" />
        </div>
        <div className="highlight">
          <h3>Unique Destinations</h3>
          <p>Discover unique and scenic destinations accessible by heritage railways.</p>
          <img src={destinationsImage} alt="Destinations" />
        </div>
        <div className="highlight">
          <h3>Community Interaction</h3>
          <p>Join a vibrant community of railway enthusiasts. Share your experiences and read reviews from others.</p>
          <img src={communityImage} alt="Community" />
        </div>
        <div className="highlight">
          <h3>Sustainability Tracker</h3>
          <p>Track the environmental impact of your rail travel choices and contribute to a greener planet.</p>
          <img src={sustainabilityImage} alt="Sustainability" />
        </div>
      </section>

      <section className="cta-section">
        <h2>Get Started</h2>
        <p>Sign up today to start your journey with Heritage Railway Explorer.</p>
        <Link to="/sign-up" className="cta-button">Sign Up</Link>
      </section>
    </div>
  );
};

export default HomePage;