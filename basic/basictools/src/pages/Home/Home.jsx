import React from 'react'
import styles from './Home.module.css'
import './Home.module.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

  return (
    <>
      <section class="bainner">
        <div className={styles.bgBainner}>
          <div class="row">
          <div class="col-md-4 d-none d-md-block">
        <img src="src/assets/img/FFF.png" className={styles.imgFamilia} alt="..." />
      </div>
            <div class="col-md-6 m-5 p-5">
              <h1 className={styles.frase1}>Bem Vindos ao Aprender Bincando!</h1>
            <p className={styles.frase2}>PRONTOS PARA UMA AVENTURA<br/>CHEIA DE DIVERSÃO E APRENDIZADO?</p>
            </div>
          </div>
        </div>
      </section>

      <section class="categorias">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="fs-4 mt-5 pt-3">COMECE A BRINCAR HOJE</h3>
              <h1 class="fw-bolder">Navegue em Nossas Categorias</h1>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="card col-md-2 p-3 m-1 my-5 shadow">
              <img src="src/assets/img/alfabetização.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h6 class="card-title my-1">ALFABETIZAÇÃO</h6>
                <a href="/alfabetizacao">
                  <button className={styles.btAlfabetizacao}>Saiba Mais</button>
                </a>
              </div>
            </div>

            <div class="card col-md-2 p-3 m-1 my-5 shadow">
              <img src="src/assets/img/coordenação.png" class="card-img-top" alt="" />
              <div class="card-body text-center">
                <h6 class="card-title luckiest">COORDENAÇÃO MOTORA</h6>
                <a href="/coordenacao">
                  <button className={styles.btCoordenacao}>Explorar</button>
                </a>
              </div>
            </div>

            <div class="card col-md-2 p-3 m-1 my-5 shadow">
              <img src="src/assets/img/portugues.png" class="card-img-top" alt="" />
              <div class="card-body text-center">
                <h6 class="card-title luckiest">PORTUGUÊS</h6>
                <a href="/portugues">
                  <button className={styles.btPortugues}>Explorar</button>
                </a>
              </div>
            </div>

            <div class="card col-md-2 p-3 m-1 my-5 shadow">
              <img src="src/assets/img/matematica.png" class="card-img-top" alt="" />
              <div class="card-body text-center">
                <h6 class="card-title luckiest">MATEMÁTICA</h6>
                <a href="/matematica">
                  <button className={styles.btMatematica}>Explorar</button>
                </a>
              </div>
            </div>

            <div class="card col-md-2 p-3 m-1 my-5 shadow">
              <img src="src/assets/img/cienciass.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h6 class="card-title luckiest">CIÊNCIA</h6>
                <a href="/ciencias">
                  <button className={styles.btCiencias}>Explorar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section >
        <div className={styles.mural}>
          <div class="row mt-4">
            <div class="col-md-12 text-center mt-5">
              <h3 class="fs-4">DESTAQUES</h3>
              <h1 class="fw-bolder" href="mural">Mural</h1>
            </div>
          </div>

          <div class="row p-4">
            <div class="col-md-2 text-center p-3 mt-3">
              <img src="assets/img/c1.png" class="img-fluid" alt="..." width="100" height="100" />

              <div class="mt-2">
                <h3 class="fs-6">texto</h3>
              </div>
            </div>
            <div class="col-md-2 text-center p-3 mt-3">
              <img src="assets/img/c2.png" class="img-fluid" alt="..." width="100" height="100" />

              <div class="mt-2">
                <h3 class="fs-6">texto</h3>
              </div>
            </div>
            <div class="col-md-2 text-center p-3 mt-3">
              <img src="assets/img/c3.png" class="img-fluid" alt="..." width="100" height="100" />

              <div class="mt-2">
                <h3 class="fs-6">texto</h3>
              </div>
            </div>
            <div class="col-md-2 text-center p-3 mt-3">
              <img src="assets/img/c4.png" class="img-fluid" alt="..." width="100" height="100" />

              <div class="mt-2">
                <h3 class="fs-6">texto</h3>
              </div>
            </div>
            <div class="col-md-2 text-center p-3 mt-3">
              <img src="assets/img/c5.png" class="img-fluid" alt="..." width="100" height="100" />

              <div class="mt-2">
                <h3 class="fs-6">texto</h3>
              </div>
            </div>
            <div class="col-md-2 text-center p-3 mt-3">
              <img src="assets/img/c6.png" class="img-fluid" alt="..." width="100" height="100" />

              <div class="mt-2">
                <h3 class="fs-6">texto</h3>
              </div>
            </div>

            <div class="col-md-12 text-center mt-5">

            </div>
          </div>
        </div>
      </section>

      <section class="sobre">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-6">
              <img src="assets/img/sobre2.png" class="img-fluid" alt="..." />
            </div>
            <div class="col-md-6 p-3">
              <h3 class="fs-6">TEXTO</h3>
              <h1 class="fw-bolder">Sobre Nós</h1>
              <p>texto texto</p>
              <p>texto texto</p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
export default Home





