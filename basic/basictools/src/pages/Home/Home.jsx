import React from 'react'
import styles from './Home.module.css'
import './Home.module.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

  return (
    <>
    <div className={styles.banner}>
      <div class="row align-items-center py-4">
          <div class="col-md-4 text-center">
          <img src="src/assets/img/famFog.png" alt="Astronauts on a rocket" />
          </div>
          <div class="col-md-7">
          <h1 class="mt-5">BEM-VINDO AO APRENDER BRINCANDO!</h1>
          <p>DESCUBRA UM MUNDO DE APRENDIZADO E CRIE MEMÓRIAS INESQUECÍVEIS COM SEUS FILHOS!</p>
          </div>
      </div>
    </div>

    <div className={styles.containner}>
    <div class="row align-items-center py-4">
    <div class="col-md-12  text-center">
        <h2>COMECE A BRINCAR HOJE</h2>
        <h1 >Navegue em Nossas Categorias</h1>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="src/assets/img/alfabetização.png" alt="Alfabetização"/>
                <h3>ALFABETIZAÇÃO</h3>
                <button className={styles.btAlfabetizacao}>Explorar</button>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/coordenação.png" alt="Coordenação Motora"/>
                <h3>COORDENAÇÃO MOTORA</h3>
                {/*<button styles="background-color: #ff5722;">Explorar</button>*/}
                <button className={styles.btCoordenacao}>Explorar</button>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/portugues.png" alt="Português"/>
                <h3>PORTUGUÊS</h3>
                <button className={styles.btPortugues}>Explorar</button>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/matematica.png" alt="Matemática"/>
                <h3>MATEMÁTICA</h3>
                <button className={styles.btMatematica}>Explorar</button>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/cienciass.png" alt="Ciências"/>
                <h3>CIÊNCIAS</h3>
                <button className={styles.btCiencias}>Explorar</button>
            </div>
        </div>
    </div>
    </div>
    </div>


      <section class="mural">
        <div className={styles.mural}>
          <div class="row">
            <div class="col-md-12 text-center mt-4 pt-2">
              <h1 class="fw-bolder mb-4" href="mural">Mural</h1>
               <div class="mb-5 mt-4 w-75 mx-auto">Somos dedicados a estimular a educação infantil com atividades divertidas e educativas que você pode fazer com seus filhos. Nossa missão é fortalecer os laços familiares e promover o desenvolvimento das crianças através de vídeos envolventes e lúdicos. Junte-se a nós e transforme o aprendizado em uma aventura emocionante para toda a família!</div>
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
              <a href="/mural"><button className={styles.btMural}>Explorar</button></a>
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





