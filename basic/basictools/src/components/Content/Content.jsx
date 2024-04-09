import React from 'react'
import './Content.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Content = () => {
  return (
   <>


<section class="bg-opacity-50 bg-light">
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="luckiest display-5 text-primary">Educação Infantil</h1>
            </div>
        </div>

        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text-center fs-5 fw-bolder">
                    <h1 class="luckiest text-primary">ALFABETIZAÇÃO</h1>
                    <p>A alfabetização infantil é fundamental, pois estabelece as bases para leitura, escrita e habilidades cognitivas, fomenta a comunicação e o pensamento crítico, prepara para o sucesso na educação e na vida adulta, promove inclusão social, acesso à informação e autonomia, sendo essencial para o desenvolvimento saudável e educacional das crianças.</p>
                    <a class="btn btn-outline-dark">Saiba Mais</a>
                </div>
                <div class="col-md-6">
                    <img src="/src/assets/img/alfabetização.jpg" class="img-fluid rounded-lg"/>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 p-5">
                <img src="/src/assets/img/coordenaçãoMotora.jpg" class="img-fluid rounded-lg"/>
            </div>
            <div class="col-md-6 text-center fs-5 fw-bolder">
                <h1 class="luckiest text-primary">COORDENAÇÃO MOTORA</h1>
                <p>A coordenação motora infantil refere-se à habilidade das crianças de controlar seus movimentos. O desenvolvimento da coordenação motora é crucial para atividades diárias, mobilidade e habilidades motoras, influenciando o crescimento e a aprendizagem das crianças.</p>
                <a class="btn btn-outline-dark">Saiba Mais</a>
            </div>
        </div>
    </div>
</section>

<section class="destaques bg-white bg-opacity-10">
    <div class="container p-4">
        <div class="row">
            <div class="col-md-12 text-center mt-5">
                <h1 class="luckiest display-5 mb-5 text-primary">Ensino Fundamental</h1>
            </div>
        </div>

        <div class="row justify-content-center p-3">
            <div class="card col-md-4 p-3 m-1">
                <img src="/src/assets/img/meninoLeitura.png" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title luckiest">PORTUGUÊS</h5>
                    <p class="card-text fw-bolder">A língua portuguesa é essencial para uma comunicação eficaz, desenvolvendo habilidades fundamentais de leitura, escrita e expressão oral ...</p>
                    <a class="btn btn-outline-dark">Saiba Mais</a>
                </div>
            </div>

            <div class="card col-md-4 p-3 m-1">
                <img src="/src/assets/img/matematica.png" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title luckiest">MATEMÁTICA</h5>
                    <p class="card-text fw-bolder">A matemática é fundamental para o desenvolvimento do raciocínio lógico, a compreensão de conceitos financeiros e melhora a capacidade de tomar decisões ... </p>
                    <a class="btn btn-outline-dark">Saiba Mais</a>
                </div>
            </div>

            <div class="card col-md-4 p-3 m-1">
                <img src="/src/assets/img/quimica.png" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title luckiest">CIÊNCIA</h5>
                    <p class="card-text fw-bolder">A ciência é vital para a compreensão do mundo ao redor, incentivando o pensamento crítico, a curiosidade e a resolução de problemas ...</p>
                    <a class="btn btn-outline-dark">Saiba Mais</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="Mural">
    <div class="container p-5">
        <div class="row">
            <div class="col-md-12">
                <h1 class="luckiest display-5 text-center text-primary">MURAL</h1>
            </div>
        </div>

        <div class="row justify-content-center p-3">
            <div class="col-md-4">
                <div class="card py-3 m-1">
                    <img src="/src/assets/img/fotoMural1.png" class="card-img-top" alt="..."/>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card py-3 m-1">
                    <img src="/src/assets/img/fotoMural2.png" class="card-img-top" alt="..."/>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card py-3 m-1">
                    <img src="/src/assets/img/fotoMural3.png" class="card-img-top" alt="..."/>
                </div>
            </div>
        </div>
    </div>
</section>






   </>
  )
}

export default Content