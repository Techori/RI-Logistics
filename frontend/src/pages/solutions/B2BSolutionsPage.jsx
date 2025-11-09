import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../../theme/ThemeProvider';
import Navbar from '../../components/solutions/Navbar';
import MagneticButton from '../../components/common/MagneticButton';
import './SolutionsPage.css';

const B2BSolutionsPage = () => {
  const { mode } = useThemeMode();
  const navigate = useNavigate();
  const isDark = mode === 'dark';
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState([
    { value: 0, target: 500, suffix: '+', label: 'Enterprise Clients' },
    { value: 0, target: 98, suffix: '%', label: 'On-time Delivery' },
    { value: 0, target: 50, suffix: 'M+', label: 'Shipments Annually' },
    { value: 0, target: 24, suffix: '/7', label: 'Support Available' }
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
      icon: '🚚',
      title: 'Bulk Transportation',
      description: 'Efficient handling of large-scale shipments with dedicated fleet management and route optimization.',
      benefits: ['Cost-effective bulk shipping', 'Dedicated fleet allocation', 'Route optimization']
    },
    {
      icon: '📦',
      title: 'Warehouse Solutions',
      description: 'State-of-the-art warehousing with inventory management, cross-docking, and distribution services.',
      benefits: ['Smart inventory tracking', 'Temperature-controlled storage', 'Real-time stock updates']
    },
    {
      icon: '🌐',
      title: 'Supply Chain Integration',
      description: 'Seamless integration with your existing systems for end-to-end supply chain visibility.',
      benefits: ['API integration', 'ERP connectivity', 'Real-time analytics']
    },
    {
      icon: '🔄',
      title: 'Reverse Logistics',
      description: 'Comprehensive returns management and reverse logistics solutions for B2B operations.',
      benefits: ['Returns processing', 'Quality inspection', 'Refurbishment services']
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Advanced analytics and reporting tools for data-driven decision making.',
      benefits: ['Custom reports', 'Performance metrics', 'Predictive insights']
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Comprehensive insurance and risk mitigation strategies for your valuable cargo.',
      benefits: ['Full cargo insurance', 'Risk assessment', 'Compliance support']
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: '🏭', description: 'Raw materials and finished goods logistics' },
    { name: 'Retail', icon: '🏬', description: 'Distribution center to store delivery' },
    { name: 'Pharmaceuticals', icon: '💊', description: 'Temperature-controlled medical supply chain' },
    { name: 'Automotive', icon: '🚗', description: 'Parts and components distribution' },
    { name: 'Electronics', icon: '💻', description: 'High-value tech product logistics' },
    { name: 'FMCG', icon: '🛒', description: 'Fast-moving consumer goods distribution' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'Up to 1,000 shipments/month',
        'Basic analytics dashboard',
        'Email support',
        'Standard delivery options',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'For established enterprises',
      features: [
        'Up to 5,000 shipments/month',
        'Advanced analytics & reporting',
        '24/7 priority support',
        'Express & same-day delivery',
        'Dedicated account manager',
        'Custom integrations',
        'Warehouse management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited shipments',
        'Full analytics suite',
        'Dedicated support team',
        'All delivery options',
        'Custom SLA agreements',
        'White-label solutions',
        'Multi-location support',
        'Blockchain tracking'
      ],
      popular: false
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
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="hero-badge">B2B Logistics Solutions</span>
          <h1 className="hero-title">
            Powering Your <span className="gradient-text">Business Growth</span>
          </h1>
          <p className="hero-description">
            Enterprise-grade logistics solutions designed for businesses. Streamline your supply chain with our comprehensive B2B platform featuring bulk shipping, warehouse management, and real-time tracking.
          </p>
          <div className="hero-buttons">
            <MagneticButton>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Start Free Trial
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="btn btn-secondary" onClick={() => setActiveTab('pricing')}>
                View Pricing
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
            <span className="card-icon">📊</span>
            <span className="card-text">Real-time Analytics</span>
          </motion.div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <span className="card-icon">🚚</span>
            <span className="card-text">Fleet Management</span>
          </motion.div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <span className="card-icon">📦</span>
            <span className="card-text">Warehouse Solutions</span>
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
          <h2 className="section-title">Comprehensive B2B Features</h2>
          <p className="section-subtitle">
            Everything you need to manage your business logistics efficiently
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

      {/* Industries Section */}
      <section className="industries-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Tailored solutions for diverse business sectors
          </p>
        </motion.div>

        <motion.div
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <span className="industry-icon">{industry.icon}</span>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Flexible Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your business needs
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
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
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
          <h2 className="cta-title">Ready to Transform Your Business Logistics?</h2>
          <p className="cta-description">
            Join hundreds of enterprises already using our platform to optimize their supply chain
          </p>
          <div className="cta-buttons">
            <MagneticButton>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>
                Start Your Free Trial
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="btn btn-secondary">
                Schedule a Demo
              </button>
            </MagneticButton>
          </div>
          {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', py: 8 }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, fontSize: '1.75rem' }}>
              RI Logistics
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              ISO 9001: 2015, ISO 27001: 2022 Certified Company
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              CIN: L63090DL2011PLC221234
            </Typography>
          </Box>

          {/* Main Footer Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(5, 1fr)',
              },
              gap: { xs: 4, md: 6 },
              mb: 6,
            }}
          >
            {/* Services */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                SERVICES
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Express Parcel', 'Warehousing', 'Part Truckload', 'Full Truckload'].map(
                  (item) => (
                    <Box component="li" key={item} sx={{ mb: 1.5 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          cursor: 'pointer',
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                          transition: 'color 0.2s',
                          '&:hover': { color: 'text.primary' },
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            </Box>

            {/* Solutions */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                SOLUTIONS
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['D2C Brands', 'B2B Enterprises', 'Part Truck Load', 'Full truck Load', '3rd Party Load', 'white lable  Solution' ].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Partners */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                PARTNERS
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Franchise Opportunities', 'Delivery Partner', 'Fleet Owner', 'Fleet Owner']. map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Company */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                COMPANY
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['About Us', 'Governance', 'Investor Relations', 'ODR Portal', 'Press Release', 'Careers'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Get in Touch */}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                }}
              >
                GET IN TOUCH
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Support', 'Raise a query', 'Store Locator', 'Rate Calculator'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Policies Row */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
              }}
            >
              POLICIES
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, md: 4 },
              }}
            >
              {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Fraud Disclaimer', 'ONDC Disclaimer'].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </motion.div>
      </section>
    </div>
  );
};

export default B2BSolutionsPage;
