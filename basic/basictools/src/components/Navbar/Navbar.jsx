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

      <div id="menu" class="container">
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
      </nav>

    </>
  );
}

export default Navbar;