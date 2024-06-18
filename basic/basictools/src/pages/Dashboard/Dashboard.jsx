import React from 'react'
import classNames from 'classnames'

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilCloudDownload
} from '@coreui/icons'

import Widget from '../../components/Widget/Widget'
import Chart from '../../components/Chart/Chart'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'

export const Dashboard = () => {
  const progressExample = [
    { title: 'Acessos', value: '29.703', percent: 40, color: 'success' },
    { title: 'Usuários Inscritos', value: '24.093', percent: 20, color: 'info' },
    { title: 'Páginas Visualizadas', value: '78.706', percent: 60, color: 'warning' },
    { title: 'Visualizações do Mural', value: '15.012', percent: 10.15, color: 'primary' },
    { title: 'Índice de Rejeição', value: 'Taxa Média', percent: 10.15, color: 'danger' }
  ]

  return (
    <>

      <FaixaTitulo colorClass="faixa-dashboard" titulo="DASHBOARD" subtitulo="Tráfego e Engajamento" />

      <div class="container py-5">
        <Widget className="mb-4" />
        
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Tráfego
                </h4>
                <div className="small text-body-secondary">Janeiro - Junho 2024</div>
              </CCol>
              <CCol sm={7} className="d-none d-md-block">
                <CButton color="primary" className="float-end">
                  <CIcon icon={cilCloudDownload} />
                </CButton>
                <CButtonGroup className="float-end me-3">
                  {['Dia', 'Mês', 'Ano'].map((value) => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Mês'}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>
            <Chart />
          </CCardBody>
          <CCardFooter>
            <CRow
              xs={{ cols: 1, gutter: 4 }}
              sm={{ cols: 2 }}
              lg={{ cols: 4 }}
              xl={{ cols: 5 }}
              className="mb-2 text-center"
            >
              {progressExample.map((item, index, items) => (
                <CCol
                  className={classNames({
                    'd-none d-xl-block': index + 1 === items.length,
                  })}
                  key={index}
                >
                  <div className="text-body-secondary">{item.title}</div>
                  <div className="fw-semibold text-truncate">
                    {item.value} ({item.percent}%)
                  </div>
                  <CProgress thin className="mt-2" color={item.color} value={item.percent} />
                </CCol>
              ))}
            </CRow>
          </CCardFooter>
        </CCard>
      </div>
    </>
  )
}

export default Dashboard
