import { useState, forwardRef, useImperativeHandle  } from 'react';
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle
} from '@coreui/react'

const ModalVideo = forwardRef((props, ref) => {

  const [visible, setVisible] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [video, setVideo] = useState('')

  useImperativeHandle(ref, () => ({
    show: (titulo, video) => {
      setVideo(video);
      setTitulo(titulo);
      setVisible(true);
    }
  }));
  
  return (
    <>
      <CModal fullscreen visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{titulo}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <iframe width="100%" height="99%" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </CModalBody>
      </CModal>
    </>
  );
});

export default ModalVideo;