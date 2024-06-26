import React from 'react'
import styles from './Footer.module.css'
import './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className="row text-white fs-6 pt-4">
                        <p className={styles.paragrafo}>Aprender não é uma tarefa, é uma AVENTURA!</p>
                    </div>

                    <div className="row fw-bolder pb-4">
                        <span>REDES SOCIAIS</span>
                    </div>

                    <div className="row">
                        <ul className="nav col-6 mb-4">
                            <li class="nav-item">
                                <a class="text-white fs-3 mx-2" href="#"><i class="bi bi-facebook"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="text-white fs-3 mx-4" href="#"><i class="bi bi-twitter"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="text-white fs-3 mx-1" href="#"><i class="bi bi-instagram"></i></a>
                            </li>
                        </ul>

                        <div class="col-6">
                            <p className={styles.freepik}>Créditos de imagens ao Freepik</p>
                            <p className={styles.freepik}>&copy; 2024 Aprender Brincando. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer