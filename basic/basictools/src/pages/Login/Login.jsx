import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { userAuthentication } from '../../hooks/userAuthentication'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = userAuthentication()
  const navigate = useNavigate()

  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const usuario = { email, password }
    const logado = await login(usuario)

    if (logado) {
      navigate("/")
    }
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <>

      <FaixaTitulo colorClass="faixa-login" titulo="" subtitulo="Login" />

      {/*<div className={styles.cardLogin}>
        <form action="#" method="POST" className={styles.formLogin} onSubmit={handlerSubmit}>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.groupLogin}>
            <input type="email" id="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.groupLogin}>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>*/}

      <div className={styles.login}>
        <div class="card w-25 mx-auto">
          <form className={styles.form} action="#" method="POST" onSubmit={handlerSubmit} >
            {error && <div className={styles.error}>{error}</div>}
            
            <div class="row">

              <div class="col-md-12 mt-4">
                <input class="form-control" type="email" id="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-2">
                <input class="form-control" type="password" id="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

           
              <div class="text-center mt-4 mb-5">
                <button class="btn btn-outline-primary">Enviar Mensagem</button>
              </div>
          
          </form>
        </div>
      </div>



    </>
  )
}

export default Login
