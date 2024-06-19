import React from 'react'
import styles from './Sobre.module.css'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'

const Sobre = () => {
  return (
    <>
      <FaixaTitulo colorClass="faixa-sobre" titulo="QUEM SOMOS" subtitulo="Sobre Nós" />

      <div class="container">
        <div class="row align-items-center py-5 mb-2">
          <div class="col-md-12 p-3">
            <div class="row justify-content-center mb-4">
              <div class="col-md-3">
                <div class="card bg-light">
                  <div class="card-body">
                    <h2 class="fw-bolder text-center mb-4">Missão</h2>
                    <p class="card-text text-center">Oferecer atividades educativas divertidas que pais e filhos podem realizar juntos, fortalecendo laços familiares e promovendo o desenvolvimento infantil.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card bg-light">
                  <div class="card-body">
                    <h2 class="fw-bolder text-center mb-4">Visão</h2>
                    <p class="card-text text-center mb-5">Pais fortalecendo o desenvolvimento integral da criança para um futuro brilhante.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card bg-light">
                  <div class="card-body">
                    <h2 class="fw-bolder text-center mb-4">Valor</h2>
                    <p class="card-text text-center">Educação de Qualidade</p>
                    <p class="card-text text-center">Diversão e Aprendizado</p>
                    <p class="card-text text-center mb-3">Família</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-2">
              <div class="card">
                <img src="src/assets/img/fotoAna.jpeg" className={styles.foto} alt="Imagem 1" />
                <div class="card-body">
                  <h5 class="card-title">Ana Lívia</h5>
                  <p class="card-text mb-4">Desenvolvedora</p>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="card">
                <img src="src/assets/img/fotoSamanta.jpeg" className={styles.foto} alt="Imagem 2" />
                <div class="card-body">
                  <h5 class="card-title">Samanta Graziela</h5>
                  <p class="card-text">Scrum Master e Desenvolvedora</p>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <div class="card">
                <img src="src/assets/img/fotoSamara.jpeg" className={styles.foto} alt="Imagem 3" />
                <div class="card-body">
                  <h5 class="card-title">Samara Palladino</h5>
                  <p class="card-text mb-4">Desenvolvedora</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </>
  )

}

export default Sobre