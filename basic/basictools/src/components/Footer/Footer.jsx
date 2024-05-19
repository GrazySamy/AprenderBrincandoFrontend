import React from 'react'
import './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Footer = () => {
  return (
    <>
      <div class="py-5"></div>
      <footer class="rodape text-white bg-success bg-opacity-75">
        <div class="container">
            <div class="row py-5">

                <div class="col-md-4 mt-3">
                    <img src="src/assets/img/alfabetizaçao.png"/>
                    <p>Aprender não é uma tarefa, é uma AVENTURA!</p>
                </div>

                <div class="col-md-3 mt-3">
                    <h3 class="fs-6 ms-3">MENU</h3>
                    <ul class="nav flex-column ">
                        <li class="nav-item">
                            <a class="nav-link text-white fw-lighter" aria-current="page" href="#">Início</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white fw-lighter" href="#">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white fw-lighter" href="#">Contato</a>
                        </li>

                    </ul>
                </div>

                <div class="col-md-3 mt-3">
                    <h3 class="fs-6 ms-3">REDES SOCIAIS</h3>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link text-white fs-3" aria-current="page" href="#"><i
                                    class="bi bi-facebook"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white fs-3" href="#"><i class="bi bi-twitter"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white fs-3" href="#"><i class="bi bi-instagram"></i></a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer