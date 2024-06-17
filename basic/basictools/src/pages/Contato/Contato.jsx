import React from 'react'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import styles from './Contato.module.css'
import './Contato.module.css'

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
                <div className="card w-50 mx-auto custom-card">
                    <form className={styles.form}>
                        <div className="row mt-5">
                            <div class="col-sm-12 col-md-12 col-lg-6 mt-2">
                                <input type="text" class="form-control" placeholder="Nome completo" aria-label="First name" />
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 mt-2">
                                <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                                <input type="text" class="form-control" placeholder="Assunto" aria-label="Assunto" />
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 mt-2">
                                <textarea type='text' class="form-control" placeholder="Digite sua mensagem aqui" rows="4"></textarea>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 text-center mt-4 mb-5">
                            <button className={styles.btenviar}>Enviar Mensagem</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contato