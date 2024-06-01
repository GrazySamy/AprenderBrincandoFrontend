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
            
            <div class="my-5">
            <SlideshowLightbox className={styles.container} showThumbnails={true}>
                <img className={styles.img} src="src/assets/img/mural1.jpg" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/fotoMural2.png" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/fotoMural2.png" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/fotoMural2.png" alt="Imagem 1"/>
            </SlideshowLightbox>
            </div>

        </>
    )
}

export default Mural;


