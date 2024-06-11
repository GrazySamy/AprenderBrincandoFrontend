import React, { useEffect } from 'react'
import styles from './Mural.module.css'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'

function Mural() {
    useEffect(() => {
        initLightboxJS("38D9-565D-70AB-E059", "individual");
    });

    return (
        <>
            <FaixaTitulo colorClass="faixa-mural" titulo="ATIVIDADES REALIZADAS" subtitulo="Mural" />

            
            <div className='container mx-auto text-center'>
            <div className={styles.mural}>
                <SlideshowLightbox showThumbnails={true}>
                    <img className={styles.imgMural} src="src/assets/img/contorno.JPG" alt="Imagem 1"/>
                    <img className={styles.imgMural} src="src/assets/img/palitos.JPG" alt="Imagem 1"/>
                    <img className={styles.imgMural} src="src/assets/img/barquinho.JPG" alt="Imagem 1"/>
                    <img className={styles.imgMural} src="src/assets/img/papelao.JPG" alt="Imagem 1"/>
                    <img className={styles.imgMural} src="src/assets/img/bacia.JPG" alt="Imagem 1"/>
                    <img className={styles.imgMural} src="src/assets/img/vulcaoo.JPG" alt="Imagem 1"/>
                    <img className={styles.imgMural} src="src/assets/img/bola.JPG" alt="Imagem 1"/>
                    <img className={styles.imgMural} src="src/assets/img/jogos.JPG" alt="Imagem 1"/>
                </SlideshowLightbox>
            </div>
            </div>
        </>
 
    )
}

export default Mural;


