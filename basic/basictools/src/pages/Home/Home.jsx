import React from 'react'
import styles from './Home.module.css'
import './Home.module.css'

const Home = () => {
  return (
    <>
      <section class="capa bg-success">
        <div class="container">
          <div class="row align-items-center py-5 mt-5">
            <div class="col-md-6 p-5 text-white">
              <h1 class="fs-5">BEM VINDO AO APRENDER BRINCANDO</h1>
              <h3 class="fw-bolder display-3">FRASEEEEEEEEE</h3>
              <a href="" class="btn btn-outline-light mt-3"><i class="..."></i>SABER MAIS</a>
            </div>
            <div class="col-md-6 py-5">
              <img src="assets/img/capa.png" class="img-fluid" alt="" width="500" height="500" />
            </div>

          </div>
        </div>
      </section>

      <section class="categorias">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-12 text-center mt-5">
              <h3 class="fs-6">COMECE A BRINCAR HOJE</h3>
              <h1 class="fw-bolder">Navegue em Nossas Categorias</h1>
            </div>
          </div>

          <div class="row justify-content-center p-3">
            <div class="card col-md-2 p-3 m-1">
                <img src="png" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h6 class="card-title luckiest">ALFABETIZAÇÃO</h6>
                    <p class="card-text fw-bolder">TEXTO</p>
                    <a class="btn btn-outline-dark" href="alfabetizacao">Saiba Mais</a>
                </div>
            </div>

            <div class="card col-md-2 p-3 m-1">
                <img src="/src" class="card-img-top" alt="" width="30" height="30" />
                <div class="card-body text-center">
                    <h6 class="card-title luckiest">COORDENAÇÃO MOTORA</h6>
                    <p class="card-text fw-bolder">TEXTO</p>
                    <a class="btn btn-outline-dark" href="coordenacao">Saiba Mais</a>
                </div>
            </div>

            <div class="card col-md-2 p-3 m-1">
                <img src="/src" class="card-img-top" alt="" width="30" height="30" />
                <div class="card-body text-center">
                    <h6 class="card-title luckiest">PORTUGUÊS</h6>
                    <p class="card-text fw-bolder">TEXTO</p>
                    <a class="btn btn-outline-dark" href="portugues">Saiba Mais</a>
                </div>
            </div>
            <div class="card col-md-2 p-3 m-1">
                <img src="/src" class="card-img-top" alt="" width="30" height="30" />
                <div class="card-body text-center">
                    <h6 class="card-title luckiest">MATEMÁTICA</h6>
                    <p class="card-text fw-bolder">TEXTO</p>
                    <a class="btn btn-outline-dark" href="matematica">Saiba Mais</a>
                </div>
            </div>

            <div class="card col-md-2 p-3 m-1">
                <img src="png" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h6 class="card-title luckiest">CIÊNCIA</h6>
                    <p class="card-text fw-bolder">TEXTO</p>
                    <a class="btn btn-outline-dark" href="ciencias">Saiba Mais</a>
                </div>
            </div>
        </div>
        </div>
      </section>


      <section class="mural p-2 bg-success bg-opacity-10">
        <div class="container p-4">
          <div class="row">
            <div class="col-md-12 text-center mt-5">
              <h3 class="fs-6">DESTAQUES</h3>
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
              <a class="btn btn-success">Particpe</a>
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
                    <h3 class="fs-6">APRIMORE SUAS HABILIDADES</h3>
                    <h1 class="fw-bolder">Aprenda o Que Quiser</h1>
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





