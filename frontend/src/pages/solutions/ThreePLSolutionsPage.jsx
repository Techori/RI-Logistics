import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/solutions/Footer';
import { useThemeMode } from '../../theme/ThemeProvider';
import Navbar from '../../components/solutions/Navbar';
import MagneticButton from '../../components/common/MagneticButton';
import './SolutionsPage.css';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
  Divider,
} from '@mui/material';
const ThreePLSolutionsPage = () => {
  const { mode } = useThemeMode();
  const navigate = useNavigate();
  const isDark = mode === 'dark';
  const [stats, setStats] = useState([
    { value: 0, target: 100, suffix: 'M+', label: 'Orders Processed' },
    { value: 0, target: 50, suffix: '+', label: 'Warehouse Locations' },
    { value: 0, target: 99, suffix: '%', label: 'Accuracy Rate' },
    { value: 0, target: 15, suffix: 'K+', label: 'Sq Ft Storage' }
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

  const services = [
    {
      icon: '📦',
      title: 'Warehousing & Storage',
      description: 'State-of-the-art warehouse facilities with advanced inventory management systems.',
      features: [
        'Climate-controlled storage',
        'Real-time inventory tracking',
        'Multi-client warehousing',
        'Automated picking systems',
        'Security & surveillance',
        'Scalable storage solutions'
      ]
    },
    {
      icon: '🚛',
      title: 'Transportation Management',
      description: 'End-to-end transportation solutions with multimodal capabilities.',
      features: [
        'Road, rail, air & sea freight',
        'Route optimization',
        'Fleet management',
        'Cross-border logistics',
        'Last-mile delivery',
        'Real-time GPS tracking'
      ]
    },
    {
      icon: '📊',
      title: 'Order Fulfillment',
      description: 'Complete order processing from receipt to delivery with precision.',
      features: [
        'Order processing automation',
        'Pick, pack & ship services',
        'Quality control checks',
        'Gift wrapping & kitting',
        'Returns processing',
        'Same-day fulfillment'
      ]
    },
    {
      icon: '💼',
      title: 'Value-Added Services',
      description: 'Additional services to enhance your supply chain efficiency.',
      features: [
        'Product labeling & tagging',
        'Assembly & kitting',
        'Quality inspection',
        'Product photography',
        'Inventory optimization',
        'Demand forecasting'
      ]
    },
    {
      icon: '🔗',
      title: 'Supply Chain Integration',
      description: 'Seamless integration with your existing business systems.',
      features: [
        'ERP integration',
        'E-commerce platform sync',
        'API connectivity',
        'EDI capabilities',
        'Multi-channel support',
        'Custom integrations'
      ]
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights to drive data-driven decisions.',
      features: [
        'Real-time dashboards',
        'Custom reports',
        'Performance metrics',
        'Predictive analytics',
        'Cost analysis',
        'KPI tracking'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Save up to 40% on logistics costs with our optimized operations',
      icon: '💰',
      percentage: '40%'
    },
    {
      title: 'Faster Delivery',
      description: 'Reduce delivery times by 60% with our distribution network',
      icon: '⚡',
      percentage: '60%'
    },
    {
      title: 'Improved Accuracy',
      description: '99.9% order accuracy with our automated systems',
      icon: '🎯',
      percentage: '99.9%'
    },
    {
      title: 'Scalability',
      description: 'Scale operations seamlessly during peak seasons',
      icon: '📈',
      percentage: '∞'
    }
  ];

  const industries = [
    {
      name: 'E-commerce & Retail',
      icon: '🛒',
      description: 'Complete fulfillment solutions for online retailers',
      capabilities: ['Multi-channel fulfillment', 'Returns management', 'Peak season handling']
    },
    {
      name: 'Healthcare & Pharma',
      icon: '🏥',
      description: 'Compliant storage and distribution of medical supplies',
      capabilities: ['Temperature control', 'Regulatory compliance', 'Sterile handling']
    },
    {
      name: 'Technology & Electronics',
      icon: '💻',
      description: 'Secure handling of high-value electronic items',
      capabilities: ['Anti-static storage', 'Insurance coverage', 'Serial tracking']
    },
    {
      name: 'Food & Beverage',
      icon: '🍕',
      description: 'Cold chain logistics for perishable goods',
      capabilities: ['Cold storage', 'FIFO management', 'Food-grade facilities']
    },
    {
      name: 'Fashion & Apparel',
      icon: '👗',
      description: 'Specialized handling for fashion products',
      capabilities: ['Hanging storage', 'SKU management', 'Seasonal inventory']
    },
    {
      name: 'Automotive',
      icon: '🚗',
      description: 'Parts distribution and inventory management',
      capabilities: ['Parts cataloging', 'JIT delivery', 'Reverse logistics']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Onboarding',
      description: 'We analyze your requirements and design a customized solution',
      icon: '📋'
    },
    {
      step: '02',
      title: 'Integration',
      description: 'Seamlessly connect your systems with our platform',
      icon: '🔗'
    },
    {
      step: '03',
      title: 'Inventory Transfer',
      description: 'Safe transfer of your inventory to our facilities',
      icon: '📦'
    },
    {
      step: '04',
      title: 'Operations Launch',
      description: 'Go live with full-scale operations and support',
      icon: '🚀'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous improvement and process optimization',
      icon: '⚙️'
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: 'Custom',
      period: '',
      description: 'For growing businesses',
      features: [
        'Up to 5,000 orders/month',
        '10,000 sq ft storage',
        'Basic inventory management',
        'Standard shipping options',
        'Email & phone support',
        'Monthly reporting',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: 'Custom',
      period: '',
      description: 'For established companies',
      features: [
        'Up to 25,000 orders/month',
        '50,000 sq ft storage',
        'Advanced WMS',
        'Multi-channel fulfillment',
        'Dedicated account manager',
        'Real-time analytics',
        'Value-added services',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited orders',
        'Unlimited storage',
        'Custom WMS solutions',
        'White-label fulfillment',
        'Dedicated operations team',
        'AI-powered analytics',
        'Full value-added services',
        '24/7 premium support',
        'Multi-location network',
        'Blockchain tracking',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      company: 'TechMart India',
      name: 'Vikram Patel',
      role: 'Operations Director',
      text: 'Switching to their 3PL services reduced our logistics costs by 35% while improving delivery times significantly.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      company: 'FreshFoods Direct',
      name: 'Kavita Singh',
      role: 'Supply Chain Head',
      text: 'Their cold chain infrastructure is world-class. We can now deliver fresh products across the country.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      company: 'StyleHub Fashion',
      name: 'Arjun Kapoor',
      role: 'CEO',
      text: 'The scalability during festive seasons is incredible. They handled 10x our normal volume seamlessly.',
      rating: 5,
      avatar: '👨‍💼'
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
      <section className="hero-section threePL-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="hero-badge">Third-Party Logistics Solutions</span>
          <h1 className="hero-title">
            Your <span className="gradient-text">Complete Logistics</span> Partner
          </h1>
          <p className="hero-description">
            Comprehensive 3PL solutions including warehousing, fulfillment, and transportation. Let us handle your entire supply chain while you focus on growing your business.
          </p>
          <div className="hero-buttons">
            <MagneticButton>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Request a Quote
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="btn btn-secondary">
                Schedule Tour
              </button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="hero-animation">
          <motion.div
            className="floating-card"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="card-icon">📦</span>
            <span className="card-text">Warehousing</span>
          </motion.div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <span className="card-icon">🚛</span>
            <span className="card-text">Transportation</span>
          </motion.div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <span className="card-icon">📊</span>
            <span className="card-text">Fulfillment</span>
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

      {/* Services Section */}
      <section className="services-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Comprehensive 3PL Services</h2>
          <p className="section-subtitle">
            End-to-end logistics solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Why Choose Our 3PL Services?</h2>
          <p className="section-subtitle">
            Measurable benefits that drive business growth
          </p>
        </motion.div>

        <motion.div
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">{benefit.icon}</span>
                <span className="benefit-percentage">{benefit.percentage}</span>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Industry-Specific Solutions</h2>
          <p className="section-subtitle">
            Specialized 3PL services for diverse verticals
          </p>
        </motion.div>

        <motion.div
          className="industries-grid-3pl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card-3pl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <span className="industry-icon-3pl">{industry.icon}</span>
              <h3 className="industry-name-3pl">{industry.name}</h3>
              <p className="industry-description-3pl">{industry.description}</p>
              <div className="industry-capabilities">
                {industry.capabilities.map((cap, idx) => (
                  <span key={idx} className="capability-tag">{cap}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Our Onboarding Process</h2>
          <p className="section-subtitle">
            Simple, structured approach to get you started
          </p>
        </motion.div>

        <motion.div
          className="process-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              variants={itemVariants}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <span className="step-icon">{step.icon}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <motion.div
                  className="step-connector"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              )}
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
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            See what our partners say about us
          </p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
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
                  <p className="author-role">{testimonial.role}</p>
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
          <h2 className="section-title">Flexible Pricing Models</h2>
          <p className="section-subtitle">
            Customized solutions based on your volume and requirements
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
              {plan.popular && <span className="popular-badge">Recommended</span>}
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
                  Get Custom Quote
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
          <h2 className="cta-title">Ready to Optimize Your Supply Chain?</h2>
          <p className="cta-description">
            Partner with us for world-class 3PL services that scale with your business
          </p>
          <div className="cta-buttons">
            <MagneticButton>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Request a Quote
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="btn btn-secondary">
                Schedule Facility Tour
              </button>
            </MagneticButton>
          </div>
        </motion.div>
      </section>
      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default ThreePLSolutionsPage;
