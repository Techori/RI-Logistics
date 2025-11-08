import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../../theme/ThemeProvider';
import Navbar from '../../components/solutions/Navbar';
import MagneticButton from '../../components/common/MagneticButton';
import './SolutionsPage.css';

const D2CSolutionsPage = () => {
  const { mode } = useThemeMode();
  const navigate = useNavigate();
  const isDark = mode === 'dark';
  const [stats, setStats] = useState([
    { value: 0, target: 1, suffix: 'M+', label: 'Happy Customers' },
    { value: 0, target: 99, suffix: '%', label: 'Delivery Success' },
    { value: 0, target: 500, suffix: '+', label: 'Cities Covered' },
    { value: 0, target: 2, suffix: 'H', label: 'Avg Delivery Time' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => {
          if (stat.value < stat.target) {
            const increment = Math.ceil(stat.target / 50);
            return { ...stat, value: Math.min(stat.value + increment, stat.target) };
          }
          return stat;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '⚡',
      title: 'Same-Day Delivery',
      description: 'Lightning-fast delivery options to ensure your customers receive their orders when they need them.',
      benefits: ['2-hour express delivery', 'Scheduled delivery slots', 'Real-time tracking']
    },
    {
      icon: '📱',
      title: 'Customer App Integration',
      description: 'Seamless integration with your mobile app for enhanced customer experience.',
      benefits: ['White-label mobile app', 'Push notifications', 'In-app tracking']
    },
    {
      icon: '💳',
      title: 'COD & Digital Payments',
      description: 'Multiple payment options including cash on delivery and digital wallets.',
      benefits: ['Cash on delivery', 'UPI & wallets', 'Secure payment gateway']
    },
    {
      icon: '🎁',
      title: 'Custom Packaging',
      description: 'Branded packaging solutions to enhance your brand identity.',
      benefits: ['Custom branded boxes', 'Gift wrapping options', 'Eco-friendly materials']
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: 'Hassle-free return process with doorstep pickup and instant refunds.',
      benefits: ['Doorstep pickup', 'Instant refund processing', 'Quality checks']
    },
    {
      icon: '📍',
      title: 'Hyperlocal Delivery',
      description: 'Optimized last-mile delivery for faster and more efficient service.',
      benefits: ['Zone-based routing', 'Local partner network', 'Shorter delivery times']
    }
  ];

  const useCases = [
    {
      icon: '🛍️',
      title: 'E-commerce',
      description: 'Perfect for online retailers selling directly to consumers',
      stats: '10K+ brands trust us'
    },
    {
      icon: '🍔',
      title: 'Food Delivery',
      description: 'Fresh and fast delivery for restaurants and cloud kitchens',
      stats: 'Hot & fresh guaranteed'
    },
    {
      icon: '💄',
      title: 'Beauty & Cosmetics',
      description: 'Delicate handling of beauty products with care',
      stats: '99% damage-free delivery'
    },
    {
      icon: '📚',
      title: 'Books & Media',
      description: 'Safe delivery of books, magazines, and media products',
      stats: 'Premium packaging'
    },
    {
      icon: '👕',
      title: 'Fashion & Apparel',
      description: 'Dedicated solutions for fashion brands and boutiques',
      stats: 'Size-specific packaging'
    },
    {
      icon: '🎮',
      title: 'Electronics',
      description: 'Secure delivery of gadgets and electronic items',
      stats: 'Insurance included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'For small businesses & startups',
      features: [
        'Up to 500 deliveries/month',
        'Standard delivery (3-5 days)',
        'Email support',
        'Basic tracking',
        'COD available',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$299',
      period: '/month',
      description: 'For growing online businesses',
      features: [
        'Up to 2,000 deliveries/month',
        'Same-day delivery options',
        'Priority support',
        'Advanced analytics',
        'Custom packaging',
        'API integration',
        'Returns management',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$799',
      period: '/month',
      description: 'For established D2C brands',
      features: [
        'Unlimited deliveries',
        'Express delivery (2 hours)',
        '24/7 premium support',
        'White-label solutions',
        'Custom branding',
        'Multi-channel integration',
        'Advanced returns portal',
        'Hyperlocal delivery network',
        'Priority routing'
      ],
      popular: false
    }
  ];

  const customerTestimonials = [
    {
      name: 'Priya Sharma',
      company: 'Fashion Forward',
      text: 'The same-day delivery feature has transformed our customer satisfaction rates. Highly recommended!',
      rating: 5,
      avatar: '👩'
    },
    {
      name: 'Rahul Mehta',
      company: 'TechGadgets Online',
      text: 'Exceptional service with real-time tracking. Our customers love the transparency.',
      rating: 5,
      avatar: '👨'
    },
    {
      name: 'Anita Desai',
      company: 'Beauty Essentials',
      text: 'Custom packaging options helped us create a memorable unboxing experience for our customers.',
      rating: 5,
      avatar: '👩'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`solutions-page ${isDark ? 'dark' : 'light'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section d2c-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="hero-badge">D2C Delivery Solutions</span>
          <h1 className="hero-title">
            Delight Your <span className="gradient-text">Customers</span> Every Time
          </h1>
          <p className="hero-description">
            Lightning-fast delivery solutions for modern D2C brands. From same-day delivery to custom packaging, we help you create unforgettable customer experiences.
          </p>
          <div className="hero-buttons">
            <MagneticButton>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Get Started Free
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="btn btn-secondary">
                Watch Demo
              </button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="hero-animation">
          <motion.div
            className="floating-card"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="card-icon">⚡</span>
            <span className="card-text">2-Hour Delivery</span>
          </motion.div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <span className="card-icon">📱</span>
            <span className="card-text">Live Tracking</span>
          </motion.div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -25, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <span className="card-icon">🎁</span>
            <span className="card-text">Custom Packaging</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} className="stat-card" variants={itemVariants}>
            <h2 className="stat-value">{stat.value}{stat.suffix}</h2>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Features Section */}
      <section className="features-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Built for D2C Excellence</h2>
          <p className="section-subtitle">
            Everything you need to deliver exceptional customer experiences
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Perfect For Every Business</h2>
          <p className="section-subtitle">
            Specialized solutions for different industry verticals
          </p>
        </motion.div>

        <motion.div
          className="use-cases-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="use-case-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <span className="use-case-icon">{useCase.icon}</span>
              <h3 className="use-case-title">{useCase.title}</h3>
              <p className="use-case-description">{useCase.description}</p>
              <span className="use-case-stats">{useCase.stats}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Loved by D2C Brands</h2>
          <p className="section-subtitle">
            See what our customers have to say
          </p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {customerTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <span className="author-avatar">{testimonial.avatar}</span>
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your business size
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <MagneticButton>
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  Choose Plan
                </button>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2 className="cta-title">Ready to Scale Your D2C Brand?</h2>
          <p className="cta-description">
            Join thousands of successful D2C brands delivering happiness to customers every day
          </p>
          <div className="cta-buttons">
            <MagneticButton>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Start Free Trial
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="btn btn-secondary">
                Talk to Sales
              </button>
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default D2CSolutionsPage;
