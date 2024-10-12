import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbg navfont py-3">
    <div class="container-fluid">
        <button type="button" class="navbar-toggler mx-auto" data-toggle="collapse" data-target="#myNavbar">
            <span class="fa fa-bars text-dark"> Menu </span>
        </button>
        <div id="myNavbar" class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto text-center navfont py-lg-0 py-4">
                <li class="nav-item px-3 active">
                    <Link class="nav-link" to="/products">Quick Purchase</Link>
                </li>
                <li class="nav-item px-3">
                    <Link class="nav-link" to="/about-us">About</Link>
                </li>
                <li class="nav-item px-3">
                    <Link class="nav-link" to="/safety-tips">Safety Tips</Link>
                </li>
                <li class="nav-item px-3">
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div> 
    </div>		
</nav>
  );
}

export default Header;
