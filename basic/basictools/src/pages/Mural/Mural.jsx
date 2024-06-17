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
                    <img className={styles.imgMural} src="src/assets/img/contorno.JPG" alt="Imagem de criança contornando sua mão em um papel com lápis de cor azul."/>
                    <img className={styles.imgMural} src="src/assets/img/palitos.JPG" alt="Imagem de brinquedo com caixa de papelão colorida com as cores do arco-íris."/>
                    <img className={styles.imgMural} src="src/assets/img/barquinho.JPG" alt="Imagem de criança e um adulto resposável dobrando um barquinho de papel."/>
                    <img className={styles.imgMural} src="src/assets/img/papelao.JPG" alt="Imagem vista de cima de duas crianças brincando com dobraduras de papel."/>
                    <img className={styles.imgMural} src="src/assets/img/bacia.JPG" alt="Imagem de criança e uma adulta responsável colocando brinquedos na água."/>
                    <img className={styles.imgMural} src="src/assets/img/vulcaoo.JPG" alt="Imagem de uma criança colocando um líquido vermelho dentro de um vulcão de experimento escolar."/>
                    <img className={styles.imgMural} src="src/assets/img/bola.JPG" alt="Imagem de quatro crianças brincando com uma bola."/>
                    <img className={styles.imgMural} src="src/assets/img/jogos.JPG" alt="Imagem com três adultos cada um com uma criança no colo e uma criança no canto inferior direito brincando no chão."/>
                </SlideshowLightbox>
            </div>
            </div>
        </>
 
    )
}

export default Mural;


