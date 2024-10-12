import React from 'react'
import { Link } from 'react-router-dom'
//import Image from "https://www.mysivakasicrackers.com/images/contactbanner.jpg"
import "./contact.css"
const Contact = () => {
  
  return (
    <div>
      <img src="https://www.mysivakasicrackers.com/images/contactbanner.jpg" alt="My crackers Banner" width={"100%"}/>
      <div class="contact-section">
        <h2>CONTACT US</h2>
        <div class="contact-container">
          <div class="contact-item">
            <div class="icon"><i class="fa fa-map-marker"></i></div>
            <h3>Address</h3>
            <p>My Sivakasi Crackers</p>
            <p>3/1233/1/1, Mariyamman Nagar,</p>
            <p>Sattur Road Paraipatti,</p>
            <p>Sivakasi - 626 189.</p>
          </div>
          <div class="contact-item">
            <div class="icon"> <i class="fa fa-phone"></i></div>
            <h3>Phone</h3>
            <p>Mobile: +91 78710 76094</p>
            <p>Mobile: +91 94424 56559</p>
          </div>
          <div class="contact-item">
            <div class="icon"><i class="fa fa-envelope"></i></div>
            <h3>Connect With Us</h3>
            <p>beswaycrackersenquiry@gmail.com</p>
          </div>
        </div>
      </div>
      <button class="blink-button"><Link to='/products' style={{textDecoration:"none", color:"white"}}>Shop Now</Link></button>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0702646119603!2d80.4333332751424!3d16.370382684353594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b23d0f761c1%3A0x38b09fed35a46ce5!2sChalapathi%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1728534430071!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact