import React from 'react'
import styles from './Footer.module.css'
import './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div class="container">
                    <div class="row py-5">

                        <div class="col-md-6 mt-3 text-white fw-bolder fs-6">
                           <img src="src/assets/img/logosfundo.png" width="100" height="100" />
                            <p className={styles.paragrafo}>Aprender não é uma tarefa, é uma AVENTURA!</p>
                        </div>

                        <div class="col-md-6 mt-3">
                            <h3 class="fs-6 ms-3"  className={styles.redessociais}>REDES SOCIAIS</h3>
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