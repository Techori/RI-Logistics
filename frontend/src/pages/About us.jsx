import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to RILogistics, your trusted partner in logistics and transportation.  
        We specialize in connecting truck owners, drivers, transporters, and customers  
        through a seamless digital platform that makes freight booking, tracking, and  
        management efficient and transparent.
      </p>
      <p style={styles.text}>
        Our platform aims to revolutionize the logistics industry by providing a  
        user-friendly experience reminiscent of popular ride-hailing apps, but  
        tailored specifically to the complex needs of freight and cargo movement.  
      </p>
      <p style={styles.text}>
        From real-time tracking, flexible load management, to secure payments  
        and reliable customer support, we are committed to empowering every  
        stakeholder in the transportation chain.
      </p>
      <p style={styles.text}>
        Our vision is to build a sustainable, tech-driven logistics ecosystem  
        that delivers value, trust, and growth opportunities to businesses and individuals alike.
      </p>
      <h2 style={styles.subTitle}>Our Values</h2>
      <ul style={styles.list}>
        <li>Integrity in all our dealings</li>
        <li>Customer-centric innovation</li>
        <li>Commitment to safety and compliance</li>
        <li>Transparency and trustworthiness</li>
        <li>Continuous improvement and learning</li>
      </ul>
      <h2 style={styles.subTitle}>Contact Us</h2>
      <p style={styles.text}>Email: support@rilogistics.com</p>
      <p style={styles.text}>Phone: +91 9876543210</p>
      <p style={styles.text}>Address: 123 Logistics Park, Mumbai, India</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 800,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: 1.6,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    color: "#FF9933", // saffron primary color
  },
  subTitle: {
    fontSize: 28,
    marginTop: 40,
    marginBottom: 15,
    color: "#B8860B", // metallic accent
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
  list: {
    listStyleType: "disc",
    paddingLeft: 20,
    fontSize: 18,
  },
};

export default AboutUs;
