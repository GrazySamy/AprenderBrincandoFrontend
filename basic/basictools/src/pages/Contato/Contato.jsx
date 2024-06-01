import React from 'react'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import styles from './Contato.module.css'

const Contato = () => {
    return (
        <>
            <FaixaTitulo colorClass="faixa-contato" titulo="" subtitulo="Contato" />

            <div class="row mt-5">
                <div class="col-4"></div>
                <div class="col-4">
                    <form>
                        <input type="text" placeholder=' Digite seu nome' required />
                        <input type="email" placeholder=' Digite seu email' required />
                        <textarea placeholder=' Digite sua mensagem' required></textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default Contato