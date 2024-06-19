import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Registro.module.css';  // Import as module for CSS modules
import { userAuthentication } from '../../hooks/userAuthentication';
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CFormFeedback,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const Register = () => {
  const { createUser, error: authError, loading } = userAuthentication();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false)

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('');

    if (password !== confirmedPassword) {
      setPasswordsMatch(false);
      return;
    }

    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)

    const user = {
      displayName,
      email,
      password,
    };

    try {
      await createUser(user);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <FaixaTitulo colorClass="faixa-register" titulo="Crie sua conta para acessar conteúdos exclusivos" subtitulo="Criar conta" />

      <div className="bg-body-tertiary mt-5 mb-5 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  {error && (<p className={styles.error}>{error}</p>)}
                  <CForm className="needs-validation" validated={validated} onSubmit={handleSubmit}>
                    <h2>Criar conta</h2>
                    <p className="text-body-secondary">Entre seus dados</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText><i class="fa fa-user"></i></CInputGroupText>
                      <CFormInput placeholder="Nome"  value={displayName} onChange={(e) => setDisplayName(e.target.value)} autoComplete="name" maxLength={30} required />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText><i class="fa fa-at"></i></CInputGroupText>
                      <CFormInput type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" maxLength={30} required />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText><i class="fa fa-lock"></i></CInputGroupText>
                      <CFormInput type={ passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => {setPassword(e.target.value); setPasswordsMatch(true);}} placeholder="Senha" autoComplete="password" minLength={6} maxLength={20} required />
                      <CInputGroupText onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {!passwordVisible && (<i class="fa fa-eye-slash"></i>)}
                        {passwordVisible && (<i class="fa fa-eye"></i>)}
                      </CInputGroupText>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText><i class="fa fa-lock"></i></CInputGroupText>
                      <CFormInput type={ confirmPasswordVisible ? 'text' : 'password'} value={confirmedPassword} onChange={(e) => {setConfirmedPassword(e.target.value); setPasswordsMatch(true);}} placeholder="Confirme sua senha" autoComplete="password" maxLength={20} invalid={!passwordsMatch} required />
                      <CInputGroupText onClick={toggleConfirmPasswordVisibility} style={{ cursor: 'pointer' }}>
                        {!confirmPasswordVisible && (<i class="fa fa-eye-slash"></i>)}
                        {confirmPasswordVisible && (<i class="fa fa-eye"></i>)}
                      </CInputGroupText>
                      <CFormFeedback invalid>As senhas não correspondem</CFormFeedback>
                    </CInputGroup>
                    <div className='d-flex justify-content-center'>
                      <button type="submit" className={styles.btRegister} disabled={loading} >{loading ? 'Registrando...' : 'Registrar'}</button>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>







      {/*
    <div className={styles.registerContainer}>
      <h1 className={styles.registerTitle}>Compartilhe seus aprendizados</h1>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <label className={styles.registerLabel}>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Digite seu nome"
            className={styles.registerInput}
          />
        </label>
        <label className={styles.registerLabel}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className={styles.registerInput}
          />
        </label>
        <label className={styles.registerLabel}>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a senha"
            className={styles.registerInput}
          />
        </label>
        <label className={styles.registerLabel}>
          <span>Confirmação:</span>
          <input
            type="password"
            name="ConfirmedPassword"
            required
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            placeholder="Confirme a  senha"
            className={styles.registerInput}
          />
        </label>
        <button className={styles.btn} type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrar'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
*/}
    </>
  );
};

export default Register;
