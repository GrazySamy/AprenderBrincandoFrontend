import React from 'react'

const FaixaTitulo = ({ colorClass, titulo, subtitulo }) => {
  return (
    <>
       <div className={colorClass}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="fs-4 mt-2">{titulo}</h3>
              <h1 className="fw-bolder" href="mural">{subtitulo}</h1>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default FaixaTitulo