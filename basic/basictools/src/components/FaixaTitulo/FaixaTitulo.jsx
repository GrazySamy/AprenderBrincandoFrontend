import React from 'react'

const FaixaTitulo = ({ colorClass, titulo, subtitulo }) => {
  return (
    <>
       <div className={colorClass}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="fs-6">{titulo}</h3>
              <h1 class="fw-bolder" href="mural">{subtitulo}</h1>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default FaixaTitulo