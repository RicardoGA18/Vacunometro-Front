import React from 'react'
// Assets
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer l-container">
      <div className="l-contain">
        <div className="Footer__Logo">
          <img src={logo} alt="Logo Vacunometro Peru" />
          <p>Vacunómetro<br />Perú</p>
        </div>
        <div className="Footer__Contact">
          <p>CONTACT US</p>
          <ul>
            <li><span>+44 345 678 903</span></li>
            <li><span>adobexd@mail.com</span></li>
            <li><span>Find a Store</span></li>
          </ul>
        </div>
        <div className="Footer__Services">
          <p>SERVICES</p>
          <ul>
            <li><span>Contact Us</span></li>
            <li><span>Ordering & Payment</span></li>
            <li><span>Shipping</span></li>
            <li><span>Returns</span></li>
            <li><span>FAQ</span></li>
            <li><span>Sizing Guide</span></li>
          </ul>
        </div>
        <p className="Footer__Copy">© AdobeXD Kit</p>
      </div>
    </div>
  )
}

export default Footer