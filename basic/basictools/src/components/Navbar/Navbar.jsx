import React, { useState, useRef, useEffect } from 'react'
import UserProfile from '../UserProfile/UserProfile';
import { userAuthValue } from '../../context/AuthContext'
import { userAuthentication } from '../../hooks/userAuthentication'

function Navbar() {

  const { user } = userAuthValue();
  const { logout } = userAuthentication();

  const avatar = {
    avatar: 'src/assets/img/logado.png'
  };

  const menuClickRef = useRef(null);
  const menuOpcoesRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (menuOpcoesRef.current) {
        menuOpcoesRef.current.classList.toggle('open');
      }
    };

    const menuClickElement = menuClickRef.current;
    if (menuClickElement) {
      menuClickElement.addEventListener('click', handleClick);
    }

    return () => {
      if (menuClickElement) {
        menuClickElement.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <>

      {/*<div id="menu" class="container">
        <i id="menuClick" ref={menuClickRef} class="fa fa-bars fs-5" title="Click me!"></i>
        <ul id="menuOpcoes" ref={menuOpcoesRef}>
          <li id="menuOpcao"><a id="menuLink" href="alfabetizacao">Alfabetização</a></li>
          <li id="menuOpcao"><a id="menuLink" href="coordenacao">Coordenação Motora</a></li>
          <li id="menuOpcao"><a id="menuLink" href="portugues">Português</a></li>
          <li id="menuOpcao"><a id="menuLink" href="matematica">Matemática</a></li>
          <li id="menuOpcao"><a id="menuLink" href="ciencias">Ciências</a></li>
          <li id="menuOpcao"><a id="menuLink" href="mural">Mural</a></li>
        </ul>
      </div>

      <nav class="basic-menu">
        { user && (<span class="basic-menu-item blue"> <UserProfile user={avatar}  onLogout={logout} /> </span>) }
        { !user && (<a href="login" class="basic-menu-item blue"> <i class="fa fa-user"></i> </a>) }
        <a href="contato" class="basic-menu-item green"> <i class="fa fa-envelope"></i> </a>
        <a href="/" class="basic-menu-item purple"> <i class="fa fa-home"></i> </a>
  </nav> */}




      <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand"><img src="src/assets/img/logo.png" alt="..." width="10%" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">APRENDER BRINCANDO</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/educacao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Educação Infantil
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/alfabetizacao">Alfabetização</a></li>
                    <li><a class="dropdown-item" href="/coordenacao">Coordenação</a></li>
                    <li>
                    </li>                    
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/fundamental" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ensino Fundamental
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/portugues">Português</a></li>
                    <li><a class="dropdown-item" href="/matematica">Matemática</a></li>
                    <li><a class="dropdown-item" href="/ciencias">Ciências</a></li>
                    <li>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sobre">Sobre Nós</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contato">Contato</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/mural">Mural</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;