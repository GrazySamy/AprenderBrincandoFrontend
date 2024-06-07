import React from 'react'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import styles from './Contato.module.css'

const Contato = () => {
    return (
        <>
            <FaixaTitulo colorClass="faixa-contato" titulo="" subtitulo="Contato" />

            {/*} <div class="row mt-5">
                <div class="col-4"></div>
                <div class="col-4">
                    <form>
                        <input type="text" placeholder=' Digite seu nome' required />
                        <input type="email" placeholder=' Digite seu email' required />
                        <textarea placeholder=' Digite sua mensagem' required></textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>*/}


            <div className={styles.contato}>
                <div class="card w-50 mx-auto">
                    <form className={styles.form}>
                        <div class="row">
                            <div class=" col-md-6 mt-5">
                                <input type="text" class="form-control" placeholder="Nome completo" aria-label="First name" />
                            </div>
                            <div class="col-md-6 mt-5">
                                <input type="text" class="form-control" placeholder="Email" aria-label="Last name" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mt-2">
                                <input type="text" class="form-control" placeholder="Assunto" aria-label="Last name" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mt-2">
                                <textarea type='text' class="form-control" placeholder="Digite sua mensagem aqui" rows="4"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center mt-4 mb-5">
                                <button class="btn btn-outline-primary">Enviar Mensagem</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contato