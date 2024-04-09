import React from 'react'
import './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Footer = () => {
  return (
    <>
    <footer class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="list-unstyled social-icons">
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-linkedin-in"></i></li>
           </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <p>&copy; 2024 Seu Site. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer