import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="assets/img/logo.png" alt="logo" width="100" height="44" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item px-2">
                <a class="nav-link fw-bolder text-dark" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link fw-bolder text-dark" href="sobre">Sobre</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link fw-bolder text-dark dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Educação Infantil
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="coordenacao">Coordenação Motora</a></li>
                  <li><a class="dropdown-item" href="alfabetizacao">Alfabetização</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link fw-bolder text-dark dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ensino Fundamental
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="portugues">Português</a></li>
                  <li><a class="dropdown-item" href="matematica">Matemática</a></li>
                  <li><a class="dropdown-item" href="ciencias">Ciências</a></li>
                </ul>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link fw-bolder text-dark" href="mural">Mural</a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link fw-bolder text-dark" href="contato">Contato</a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link fw-bolder text-dark" href="login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar