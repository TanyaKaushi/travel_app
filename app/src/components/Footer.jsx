import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer-10">
        <div class="container">
        
          <div class="row">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-4 mb-md-0 mb-4">
                  <h2 class="footer-heading">About</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="d-block">
                        Out story
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-block">
                        Awards
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-block">
                        Our Team
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                  <h2 class="footer-heading">Company</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="d-block">
                        Our services
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-block">
                        Clients
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-block">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                  <h2 class="footer-heading">Resources</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="d-block">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-block">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-block">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-5 mb-md-0 mb-4">
              <h2 class="footer-heading-logo">Tripco Travel</h2>
            </div>
          </div>
          <div class="row mt-5 pt-4 border-top">
            <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
              <p class="copyright mb-0">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
