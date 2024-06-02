import React, { useState, useRef, useEffect } from 'react'
import UserProfile from '../UserProfile/UserProfile';

function Navbar() {

  const handleLogout = () => {
    // Lógica de logout aqui, por exemplo, limpar o token de autenticação
    console.log('Usuário deslogado');
  };

  const user = {
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
        <span class="basic-menu-item blue"> <UserProfile user={user}  onLogout={handleLogout} /> </span>
        <a href="contato" class="basic-menu-item green"> <i class="fa fa-envelope"></i> </a>
        <a href="/" class="basic-menu-item purple"> <i class="fa fa-home"></i> </a>
      </nav>

    </>
  );
}

export default Navbar;