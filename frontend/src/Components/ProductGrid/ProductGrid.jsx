import React, { useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import SearchBar from './Searchbar';
import './productGrid.css';
import ProductList from './ListView/ProductList';
function ProductGrid() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isListView, setIsListView] = useState(false);
  
  const handleCartClick = () => {
    navigate('/cart-items');
  };


  useEffect(() => {
    axios.get('https://my-crackers-app.onrender.com/api/products')
      .then(response => {
        console.log('Fetched products:', response.data);
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleViewToggle = () => {
    setIsListView(!isListView); // Toggle between grid and list view
  };

  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.mysivakasicrackers.com/images/65ca6db6d389d.jpg" class="d-block w-100" alt="first-slide-image" height="450px"/>
          </div>
          <div class="carousel-item">
            <img src="https://www.mysivakasicrackers.com/images/65ca6dc78eaaa.jpg" class="d-block w-100" alt="..." height="450px"/>
          </div>
          <div class="carousel-item">
            <img src="https://srirengacrackers.com/assets/img/hero/hero1.jpg" class="d-block w-100" alt="..." height='450px'/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="features-container">
        <div className="feature-item">
          <div className="icon">
            <span role="img" aria-label="discount"><i class="fa fa-tag" aria-hidden="true"></i></span>
          </div>
          <div className="text">
            <h3>Discount Crackers</h3>
            <p>Highest Discount at low price</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="icon">
            <span role="img" aria-label="wholesale"><i class="fa fa-diamond" aria-hidden="true" style={{fontSize:"2rem"}}></i></span>
          </div>
          <div className="text">
            <h3>Wholesale Price</h3>
            <p>Our crackers are safe to use</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="icon">
            <span role="img" aria-label="quality"><i class="fa fa-magic icon-in2"></i></span>
          </div>
          <div className="text">
            <h3>Best Quality</h3>
            <p>100% superior quality crackers</p>
          </div>
        </div>
      </div>
      <SearchBar onSearch={handleSearch} />
       <div className='btn-div'>
        <button className="view-toggle-btn" onClick={handleViewToggle}>
          {isListView? <i class="fa fa-list" aria-hidden="true"></i>:<i class="fa fa-table" aria-hidden="true"></i>}
          {isListView ?' Grid View' : ' List View'}
        </button>
       </div>
      <div className='disc-div'><h2>SOUND CRACKERS (80% Discount)</h2></div>
      {/* Conditionally render grid or list view */}
      {isListView ? (
        <ProductList products={filteredProducts} />  // ListView Component
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      <div className="fixed-cart-logo" onClick={handleCartClick}>
        <i className="fa fa-shopping-cart cart-logo" aria-hidden="true" style={{fontSize:"2.5rem"}}></i>
      </div>
      <div className='reaching-div'>
        <h2>Thanks for Reaching Us!!!</h2>
        <button className='btn'><Link to="/cart-items">Please Check Your Order</Link></button>
      </div>
    </div>
  );
}

export default ProductGrid;
