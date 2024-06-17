import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Login.module.css'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import { userAuthentication } from '../../hooks/userAuthentication'
import { signInWithGoogle } from '../../hooks/userAuthentication'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = userAuthentication()
  const navigate = useNavigate()

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      handleAuthenticationError(error, 'Google');
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try{
      const userCredentials = { email, password };
      await login(userCredentials);
      navigate('/');
    }catch (error) {
      setError(error);
    }
  }
  
  const handleAuthenticationError = (error, method) => {
    console.error("Erro ao fazer login com ${method}:, error.message")
    setError("Erro ao fazer login. Tente novamente mais tarde")
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <>

      <FaixaTitulo colorClass="faixa-login" titulo="Gerencie suas atividades na área do usuário" subtitulo="Acesso gratuito" />

      <div className="bg-body-tertiary mt-5 mb-5 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <p>{error && <div className={styles.error}>{error}</div>}</p>
                    <CForm action="#" method="POST" onSubmit={handlerSubmit} >
                      <h2>Login</h2>
                      <p className="text-body-secondary">Entre em sua conta</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Email" 
                          autoComplete="email" 
                          value={email} onChange={(e) => setEmail(e.target.value)} 
                          required />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          id="password" 
                          name="password" 
                          type={ passwordVisible ? 'text' : 'password'}
                          placeholder="Senha"
                          autoComplete="current-password"
                          value={password} onChange={(e) => setPassword(e.target.value)} 
                          required 
                        />
                        <CInputGroupText onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {!passwordVisible && (<i class="fa fa-eye-slash"></i>)}
                        {passwordVisible && (<i class="fa fa-eye"></i>)}
                      </CInputGroupText>
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton type="submit" color="primary" className="px-4">
                            Fazer login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0 fst-italic text-decoration-none" >
                          Esqueceu sua senha?
                          </CButton>
                        </CCol>
                      </CRow>

                      <CRow className={styles.loginSocial}>
                      <button type="button" className={styles.google} onClick={handleGoogleLogin} disabled={loading}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 -5 58 58" width="40px" height="40px">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                      </button>
                      </CRow>

                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5" style={{ width: '44%'}}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Inscreva-se</h2> 
                      <p>
                      Realize atividades divertidas e compartilhe esses momentos especiais.
                      </p>  
                      <p>               
                      <img class="w-50" src="src/assets/img/famFog.png" alt="Astronauts on a rocket" />              
                      </p>
                      <Link to="/register">
                        <CButton className="mt-3" style={{ backgroundColor: '#ddffc1', color: '#111f0d' }}>
                          Criar uma conta
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>















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

{/*
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
              <button class="btn btn-outline-primary">Entrar</button>
            </div>

            <div>
          {!loading && <button className="btn">Entrar com</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
          <button type="button" class="btn btn-outline-primary" onClick={handleGoogleLogin} disabled={loading}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 40" width="20px" height="20px">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Google
          </button>
        </div>
          </form>
        </div>
      </div>
      */}
    </>
  )
}

export default Login