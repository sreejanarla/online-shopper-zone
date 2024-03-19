import React from "react";
function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            SHOPER<span>ZONE</span>
          </h3>
          <p class="footer-links">
            <a href="#" class="link-1">
              HOME
            </a>
          </p>
          <p class="footer-company-name">ShoperZone</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="address"></i>
            <p>
              <span>bradely</span>
            </p>
          </div>
          <div>
            <i class="phone"></i>
            <p>0987654321</p>
          </div>
          <div>
            <i class="email"></i>
            <p>
              <a href="shoperzone@company.com">shoperzone@company.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the compant</span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
