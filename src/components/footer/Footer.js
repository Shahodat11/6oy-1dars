import React from 'react'
import "./Footer.css"
import icon from "../images/Screenshot_1.png"

function Footer() {
  return (
    <div className='footer'>
         <footer>
  <div class="container">
    <div class="footer-content">
      <div class="right-content">
        <div class="right">
          <h4>SUPPORT</h4>
          <h5 class="h5">Contact us</h5>
          <h5>User Guide</h5>
          <h5>Warranty</h5>
          <h5>International Warranty</h5>
          <h5>EU Declaration of Conformity</h5>
          <h5>Scooter Safety Notice</h5>
          <h5>Android Enterprise Recommended</h5>
          <h5>Digital Services Act</h5>
        </div>
        <div class="right">
          <h4>ABOUT US</h4>
          <h5 class="h5">Xiaomi</h5>
          <h5>Leadership Team</h5>
          <h5>Privacy Policy</h5>
          <h5>Integrity & Compliance</h5>
          <h5>Investor Relations</h5>
          <h5>Sustainability</h5>
          <h5>Trust Center</h5>
          <h5>Xiaomi Accessibility</h5>
          <h5>Xiaomi HyperOS</h5>
        </div>
        <div class="right">
          <h4>XIAOMI PROJECTS</h4>
          <h5 class="h5">Xiaomi Creators</h5>
          <h5>Xiaomi Studios</h5>
          <h5>Xiaomi Imagery</h5>
          <h5>Xiaomi Master Class</h5>
          <h5>Xiaomi Renovation</h5>
        </div>
        <div class="right">
          <h4>Follow Xiaomi</h4>
          <h5 class="h5"><img src={icon} alt="" /></h5>
          <h5>Let's stay in touch</h5>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer