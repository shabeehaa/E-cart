import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
    <div className='container'>
  <a className="navbar-brand fw-bold fs-4" href="#">
    <b>ShopCart</b>

  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <a className="nav-link fw-bold" href="#" id="navbar-a-tag">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#" id="navbar-a-tag">
     Product
      
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" id="navbar-a-tag">
          About</a>
      </li>
    </ul>
<div className='buttons'>
<button className='btn'>
    <a href="" className='btn btn-outline-dark'>

<i className='fa fa-sign-in me-1'></i>
        Login
    </a>
</button>

<button className='btn'>
    <a href="/cart" className='btn btn-outline-dark'>
    <i class="fa-solid fa-cart-shopping ms-2"></i>
       Cart
    </a>
</button>
</div>
  </div>
  </div>
</nav>

  </>
  )
}
