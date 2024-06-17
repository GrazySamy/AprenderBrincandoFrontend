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
          <img src="src/assets/img/famFog.png" alt="Desenho de astronauta e bebê astronauta montados em um foguete no espaço."/>
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
                <img src="src/assets/img/alfabetização.png" alt="Desenho de astronauta montado em um lápis."/>
                <h3>ALFABETIZAÇÃO</h3>
                <a href="/Alfabetizacao"><button className={styles.btAlfabetizacao}>Explorar</button></a>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/coordenação.png" alt="Desenho de astronauta jogando futebol com uma bola em formato de lua."/>
                <h3>COORDENAÇÃO MOTORA</h3>
                {/*<button styles="background-color: #ff5722;">Explorar</button>*/}
                <a href="/Coordenacao"><button className={styles.btCoordenacao}>Explorar</button></a>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/portugues.png" alt="Desenho de astronauta lendo livro sobre a lua."/>
                <h3>PORTUGUÊS</h3>
                <a href="/Portugues"><button className={styles.btPortugues}>Explorar</button></a>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/matematica.png" alt="Desenho de astronauta em dúvida."/>
                <h3>MATEMÁTICA</h3>
                <a href="/Matematica"><button className={styles.btMatematica}>Explorar</button></a>
            </div>
            <div className={styles.card}>
                <img src="src/assets/img/cienciass.png" alt="Desenho de astronauta vestindo um jaleco e segurando um erlenmeyer."/>
                <h3>CIÊNCIAS</h3>
                <a href="/Ciencias"><button className={styles.btCiencias}>Explorar</button></a>
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
                  <img src="src/assets/img/vulcao.webp" class="card-img-top" alt="Imagem de uma criança fazendo um experimento de vulcão." className={styles.tamanhoImg} />
                </div>
                <div class="col-md-3 card" className={styles.tamanhoCard}>
                  <img src="src/assets/img/letras.webp" class="card-img-top" alt="Imagem de criança brincando" className={styles.tamanhoImg} />
                </div>
                <div class="col-md-3 card" className={styles.tamanhoCard}>
                  <img src="src/assets/img/detergente.jpg" class="card-img-top" alt="Imagem com uma criança e seu responsável realizando um experimento com detergentes coloridos." className={styles.tamanhoImg} />
                </div>
                <div class="col-md-3 card" className={styles.tamanhoCard}>
                  <img src="src/assets/img/recorte.webp" class="card-img-top" alt="Imagem de duas crianças sentadas de costas recortando papéis coloridos." className={styles.tamanhoImg} />
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
            <img src="src/assets/img/logo.png" class="card-img-top" alt="Logo do Aprender Brincando composta por um foguete saindo de um livro soltando fumaça." className={styles.sobre} />
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