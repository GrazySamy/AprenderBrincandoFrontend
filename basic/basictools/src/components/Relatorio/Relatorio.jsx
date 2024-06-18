import React, { useState } from 'react';
import DataTableVideos from '../DataTable/DataTableVideos'
import DataTableUploads from '../DataTable/DataTableUploads'
import DataTableContatos from '../DataTable/DataTableContatos'
import DataTableSessoes from '../DataTable/DataTableSessoes'

export function openRelatorioVideos() {
  $('#relatorioVideos').modal('show');
}

export function openRelatorioUploads() {
  $('#relatorioUploads').modal('show');
}

export function openRelatorioContatos() {
  $('#relatorioContatos').modal('show');
}

export function openRelatorioSessoes() {
  $('#relatorioSessoes').modal('show');
}

const Modal = () => {

  return (
    <>
      <div class='modal fade' id="relatorioVideos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Relatório de Vídeos Assistidos</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <DataTableVideos />
            </div>
          </div>
        </div>
      </div>

      <div class='modal fade' id="relatorioUploads" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Relatório de Upload de Fotos</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <DataTableUploads />
            </div>
          </div>
        </div>
      </div>

      <div class='modal fade' id="relatorioContatos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Relatório de Contatos</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <DataTableContatos />
            </div>
          </div>
        </div>
      </div>

      <div class='modal fade' id="relatorioSessoes" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Relatório de Sessões de Usuário</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <DataTableSessoes />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal