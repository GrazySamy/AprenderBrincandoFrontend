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
            {/*<FaixaTitulo colorClass="faixa-mural" titulo="ATIVIDADES REALIZADAS" subtitulo="Mural" />
                /<div class="col-6">
            <div className={styles.container}>
            <SlideshowLightbox showThumbnails={true}>
                <img className={styles.img} src="src/assets/img/contorno.webp" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/palitos.JPG" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/barquinho.JPG" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/papelao.JPG" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/bacia.JPG" alt="Imagem 1"/>
                <img className={styles.img} src="src/assets/img/vulcaoo.JPG" alt="Imagem 1"/>
                
            </SlideshowLightbox>
            </div>
            </div>*/}
</>
 
    )
}

export default Mural;


