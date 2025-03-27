import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { FaChartLine, FaBrain, FaUserFriends, FaRegLightbulb } from 'react-icons/fa'; // Icons for features
import { motion } from 'framer-motion'; // Animations

const Home = () => {
  return (
    <div className="home-container">
      <motion.header 
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Welcome to the Digital Solutions Platform</h1>
        <p>Minimizing Student Dropouts with Data-Driven Insights</p>
        <Link to="/login">
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.header>

      <section className="features-section">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.div 
          className="features"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Real-time Data</h3>
            <p>Track student performance and dropout risks in real-time, and take immediate action to help students.</p>
          </div>
          <div className="feature-card">
            <FaBrain className="feature-icon" />
            <h3>AI-powered Insights</h3>
            <p>Use AI and data analysis to predict potential dropouts and provide targeted interventions.</p>
          </div>
          <div className="feature-card">
            <FaUserFriends className="feature-icon" />
            <h3>Community Support</h3>
            <p>Engage parents, teachers, and counselors to collaboratively reduce student dropouts.</p>
          </div>
          <div className="feature-card">
            <FaRegLightbulb className="feature-icon" />
            <h3>Innovative Solutions</h3>
            <p>Our cutting-edge technology provides actionable insights for schools and institutions.</p>
          </div>
        </motion.div>
      </section>

      <section className="about-section">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          We aim to reduce student dropouts through a combination of data-driven insights, AI-powered predictions, and a supportive ecosystem of educators, parents, and peers.
        </motion.p>
      </section>

      <section className="statistics-section">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          Our Impact
        </motion.h2>
        <div className="statistics-cards">
          <motion.div 
            className="statistics-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h3>85%</h3>
            <p>Improved student retention</p>
          </motion.div>
          <motion.div 
            className="statistics-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h3>70+</h3>
            <p>Institutions using our platform</p>
          </motion.div>
          <motion.div 
            className="statistics-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <h3>10,000+</h3>
            <p>Students impacted</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
