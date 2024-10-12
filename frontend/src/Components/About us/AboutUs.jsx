import React from 'react'
import { Link } from 'react-router-dom'
import './aboutUs.css'
const AboutUs = () => {
return (
<div>
    <img src="https://www.mysivakasicrackers.com/images/aboutbanner.jpg" alt="image" />
    <div class="container pb-5">
        <div class="row pt-5">
            <div className="col-lg-6 col-div">
                <img src="https://www.mysivakasicrackers.com/images/besway.png" class="img-fluid  mx-auto d-block" alt="My Sivakasi Crackers" title="My Sivakasi Crackers"/>
            </div>
            <div className="col-lg-6">
                <div className="section-title">
                    <h2 className='about'><span><strong>About Us</strong></span></h2>
                    <h2 class="gilroy clr1 fw-600">We Provide Premium Quality <br/> Crackers</h2>
                    <p class="roboto clr2">We are reputed and reliable name involved in the field of Fireworks trading business for past 10 years. </p>
                    <p class="roboto clr2">We offer various range of fireworks products such as Sparklers, Ground Chakkars, Twinkling Stars, 
                        Chorsa, Rockets, Flower Pots, Pencils, Atom Bombs, Colour Matches and other Fancy Items. We also offer fireworks gift boxes ranges at competitive price. With websites, e-mail services & other technologies we are able to serve you faster, better and in time to your complete satisfaction. We offer the best products and services at economical prices to our clients.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="contactbg">
        <div className="container pad matter">
            <div class="row ">
                <div class="col-lg-12 col-md-12 col-12 text-center">
                    <h1 class="gilroy text-white pb-4">Have any questions related our products? Feel Free to Enquire Us!</h1>
                    <Link to="/contact" class="btn1-a"> <button className='btn1'><strong>CONTACT NOW</strong></button> </Link>		
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid pad px-lg-5">
<div class="row p-5">
    <div class="col-md-3 px-lg-3 pt-3">
        <h3 class="gilroy text-center font-weight-bold clr-or red">Why Choose Us</h3>
        <div class="smallborder1"></div>
        <p class="roboto pt-4 clr2">Our Company is known for providing best Quality Products to our esteemed customers at competitive prices.</p>
        <li class="pb-2 roboto smallfnt clr2"><i class="fa fa-bomb clr1"></i> &ensp; 10+ years of experience </li>
        <li class="pb-2 roboto smallfnt clr2"><i class="fa fa-bomb clr1"></i> &ensp; Direct dealers of reputed brands </li>
        <li class="pb-2 roboto smallfnt clr2"><i class="fa fa-bomb clr1"></i> &ensp; Quality and safety crackers </li>
        <li class="pb-2 roboto smallfnt clr2"><i class="fa fa-bomb clr1"></i> &ensp; Credible and healthy dealings </li>
        <li class="pb-2 roboto smallfnt clr2"><i class="fa fa-bomb clr1"></i> &ensp; Quick response &amp; on time delivery </li>
    </div>
    <div class="col-md-6">
        <img src="https://www.mysivakasicrackers.com/images/aboutcenter.png" class="img-fluid w-75 mx-auto d-block" alt="My Sivakasi Crackers" title="My Sivakasi Crackers"/>
    </div>
    <div class="col-md-3 px-lg-3 pt-3">
        <h3 class="gilroy text-center font-weight-bold clr-or red">Vision &amp; Mission</h3>
        <div class="smallborder1"></div>
        <p class="roboto pt-4 clr2">To be the Best wholesale Dealer for all kind of fancy crackers &amp; Giftboxes and market leader in innovative and colourful crackers.</p>
        <p class="roboto clr2">Our Mission is to provide Quality and Innovative Crackers products to our valuable customers at reasonable price and light up all their celebrations</p>
    </div>
</div>
<button class="blink-button"><Link to='/products' style={{textDecoration:"none", color:"white"}}>Shop Now</Link></button>
</div>
</div>
)}

export default AboutUs