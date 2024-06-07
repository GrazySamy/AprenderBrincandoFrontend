import React from 'react'
import styles from './Sobre.module.css'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'

const Sobre = () => {
  return (
    <>
      <FaixaTitulo colorClass="faixa-sobre" titulo="QUEM SOMOS" subtitulo="Sobre Nós" />

      <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-12 p-3">           
              <h2 class="fw-bolder">Nossa Missão</h2>
              <p className={styles.missao}>Bem-vindo ao Aprender brincando, um espaço dedicado a estimular a educação infantil através de atividades divertidas e envolventes que os pais podem realizar com seus filhos. Nossa missão é proporcionar recursos educativos de alta qualidade que fortaleçam os laços familiares, incentivem a aprendizagem e promovam o desenvolvimento integral das crianças.</p>
              <h2 class="fw-bolder">Nossa Visão</h2>
              <p className={styles.visao}>Acreditamos que a educação infantil é a base para um futuro brilhante. Nossa visão é criar um ambiente onde pais e filhos possam explorar juntos o mundo do conhecimento, cultivando a curiosidade, a criatividade e o amor pelo aprendizado desde cedo. Entendemos que uma relação positiva entre pais e filhos na infância contribui significativamente para o desenvolvimento emocional, social e intelectual das crianças, preparando-as para um futuro cheio de possibilidades e sucesso.</p>
              <h2 class="fw-bolder">Nossos Valores</h2>
              <p className={styles.valor}>Educação de Qualidade: Comprometemo-nos a oferecer conteúdos educativos, criativos e eficazes.</p>
              <p className={styles.valor}>Diversão e Aprendizado: Acreditamos que a aprendizagem deve ser divertida. Nossas atividades são lúdicas e estimulantes.</p>
              <p className={styles.valor}>Família: Reconhecemos o papel crucial dos pais e cuidadores no desenvolvimento infantil e trabalhamos para apoiá-los nesse papel.</p>
            </div>
          </div>
        </div>

    </>
  )

}

export default Sobre