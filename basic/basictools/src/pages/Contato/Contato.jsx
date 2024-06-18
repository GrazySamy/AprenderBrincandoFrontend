import React, { useState } from 'react'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import styles from './Contato.module.css'
import './Contato.module.css'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CFormSelect,
    CFormTextarea,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Contato = () => {

    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      setValidated(true)
    }

    return (
        <>
            <FaixaTitulo colorClass="faixa-contato" titulo="Envie suas sugestões, elogios ou dúvidas técnicas" subtitulo="Suporte" />

            <div className="bg-body-tertiary mt-5 mb-5 d-flex flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={9} lg={7} xl={6}>
                            <CCard className="mx-4">
                                <CCardBody className="p-4">
                                    <CForm className="needs-validation" validated={validated} onSubmit={handleSubmit}>
                                        <h1>Contato</h1>
                                        <p className="text-body-secondary">Envie sua mensagem</p>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText><i class="fa fa-user"></i></CInputGroupText>
                                            <CFormInput placeholder="Nome" autoComplete="name" maxLength={30} required />
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText><i class="fa fa-at"></i></CInputGroupText>
                                            <CFormInput type="email" placeholder="Email" autoComplete="email" maxLength={30} required />
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText><i class="fa fa-comment"></i></CInputGroupText>
                                            <CFormSelect required >
                                                <option>Assunto</option>
                                                <option value="1">Suporte Técnico</option>
                                                <option value="2">Sugestão</option>
                                                <option value="3">Reclamação</option>
                                                <option value="4">Outros</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText><i class="fa fa-envelope"></i></CInputGroupText>
                                            <CFormTextarea placeholder="Mensagem" rows={5}  maxLength={100} required ></CFormTextarea>
                                        </CInputGroup>
                                        <div className='d-flex justify-content-center'>
                                            <button className={styles.btContato}>Enviar Mensagem</button>
                                        </div>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        </>
    )
}

export default Contato