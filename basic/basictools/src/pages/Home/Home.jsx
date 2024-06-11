import React from 'react'
import styles from './Home.module.css'
import './Home.module.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

  return (
    <>

      <section className={styles.bgHome}>
        <div class="container">
          <div class="row align-items-center py-4">
            <div class="col-md-12 text-center">
            <h1 class="fw-bolder text-white opacity-75 mt-5">Bem Vindos ao</h1>
              <h1 class="fw-bolder text-white opacity-75 pt-3">APRENDER BRINCANDO</h1>
              <p class="fs-2 fw-bolder text-white opacity-75 pt-3">Pronto para AVENTURAS cheias de aprendizado?</p>
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
                  <button className={styles.btAlfabetizacao}>Explorar</button>
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

      <section class="mural">
        <div className={styles.mural}>
          <div class="row mt-4">
            <div class="col-md-12 text-center mt-5 pt-3">
              <h3 class="fs-4">DESTAQUES</h3>
              <h1 class="fw-bolder mb-5" href="mural">Mural</h1>
              <div class="row justify-content-center">
                <div class="col-md-3 card" className={styles.tamanhoCard}>
                  <img src="src/assets/img/vulcao.webp" class="card-img-top" alt="..." className={styles.tamanhoImg} />
                </div>
                <div class="col-md-3 card" className={styles.tamanhoCard}>
                  <img src="src/assets/img/letras.webp" class="card-img-top" alt="..." className={styles.tamanhoImg} />
                </div>
                <div class="col-md-3 card" className={styles.tamanhoCard}>
                  <img src="src/assets/img/detergente.jpg" class="card-img-top" alt="..." className={styles.tamanhoImg} />
                </div>
                <div class="col-md-3 card" className={styles.tamanhoCard}>
                  <img src="src/assets/img/recorte.webp" class="card-img-top" alt="..." className={styles.tamanhoImg} />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3 mb-4 text-center">
              <a href="/mural">
                  <button className={styles.btMural}>Explorar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sobre">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-6">
            <img src="src/assets/img/logo.png" class="card-img-top" alt="..." className={styles.sobre} />
            </div>
            <div class="col-md-6 p-3">
              <h1 class="fw-bolder mb-4">Sobre Nós</h1>
              <p className={styles.fraseSobre}>Somos dedicados a estimular a educação infantil com atividades divertidas e educativas que você pode fazer com seus filhos. Nossa missão é fortalecer os laços familiares e promover o desenvolvimento das crianças através de vídeos envolventes e lúdicos. Junte-se a nós e transforme o aprendizado em uma aventura emocionante para toda a família!</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default Home





