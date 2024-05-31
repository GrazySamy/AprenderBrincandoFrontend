import React from 'react'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import styles from './Contato.module.css'

const Contato = () => {
    return (
        <>

            <div className={styles.container}>
                <form className={styles.form}>
                    <h2>Contato</h2>
                    <div class="form-group mt-3">
                        <input type="text" class="form-control" id="assunto" placeholder="Digite o assunto" />
                    </div>
                    <div class="form-group mt-3 ">
                        <textarea class="form-control" id="texto" rows="5" placeholder="Digite a mensagem"></textarea>
                    </div>
                    <div class="form-group mt-3">
                        <button type="submit">Enviar</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Contato