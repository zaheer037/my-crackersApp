import React from 'react';
import './footer.css'; // Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-logo">
          <img src="https://www.mysivakasicrackers.com/images/logo.png" alt="My Sivakasi Crackers" />
          <h2>Our Showroom</h2>
          <p>3/1233/1/1, Chalapathi Nagar,<br />
            Amaravati Road, Lam, Guntur - 522 402.
          </p>
        </div>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3><br />
        <p><strong>Whats App</strong><br />
          <span><i class="fa fa-whatsapp"></i></span> +91 63010 52247
        </p>
        <p><strong>Mobile</strong><br />
          <span>📞</span> +91 63010 52247
        </p>
        <p><strong>Email</strong><br />
          <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>  y22cai037ciet@chalapathiengg.ac.in
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3><br />
        <div className="quick-links">
          <button>Home</button>
          <button>About My Sivakasi Crackers</button>
          <button>Fire Crackers</button>
          <button>Fireworks Gift Box</button>
          <button>Price List</button>
          <button>Quick Purchase</button>
          <button>Contact us</button>
        </div>
      </div>

      <div className="footer-section">
        <h3>Reach Us</h3><br />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0702646119603!2d80.4333332751424!3d16.370382684353594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b23d0f761c1%3A0x38b09fed35a46ce5!2sChalapathi%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1728572843101!5m2!1sen!2sin" width="300" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </footer>
  );
};

export default Footer;
