import React from 'react'

const Contato = () => {
  return (
    <>
     <div class="container-fluid">
        <div class="row align-items-center ">
            <div class="col-md-4 text-center"></div>
            <div class="col-md-4">
                <div class="contato">
                <h3 class="luckiest">Envie sua sugestão ou relamação!!</h3>
                    <form>
                    <div class="form-group fs-5">
                            <label for="assunto">Assunto</label>
                            <input type="text" class="form-control" id="assunto"/>
                        </div>
                    <div class="form-group fs-5 ">
                            <label for="texto">Texto</label>
                            <textarea class="form-control" id="texto" rows="5"></textarea>
                        </div>
                    <div class="form-group mt-3">
                        <input type="submit" value="Enviar" class="btn btn-primary fs-5" />
                        <input type="button" value="Cancelar" class="btn btn-danger fs-5" />
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-4 text-center"></div>
        </div>
    </div>   
    </>
  )
}

export default Contato